import React, { useReducer, useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Switch } from "react-native";

const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';

const inputReducer = (state, action) => {
    switch(action.type){
        case INPUT_CHANGE:
            return{
                ...state,
                value: action.value,
                isValid: action.isValid,
            };
        case INPUT_BLUR:
            return{
                ...state,
                touched: true,
            };
        default:
            return state;
    };
};

const Input = props => {

    const [errorText, setErrorText] = useState('')

    const [state, dispatch] = useReducer(inputReducer, 
        {
            value:'',
            isValid:false,
            touched: false,
        }
    );

    const handlerBluer = props => dispatch({type: INPUT_BLUR})

    const handleChangeText = text =>{
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = true;
        if(props.required && text.trim().length === 0){
            isValid = false;
            setErrorText("Este campo es requerido");
        }
        if(props.email && !emailRegex.test(text.toLowerCase())) {
            isValid = false;
            setErrorText("Por favor incluye un email válido");
        }
        if(props.minLength && text.length < props.minLength) {
            isValid = false;
            setErrorText("Debes incluir minimo 6 caracteres");
        }
        
        
        dispatch({
            type: INPUT_CHANGE,
            value: text,
            isValid:isValid,
        });
    }

    const {onInputChange, id} = props;
    useEffect(() => {
        onInputChange(id, state.value , state.isValid)
    }, [state, onInputChange, id])

    return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput 
         {...props}
        style={styles.input}
        value={state.value}
        onChangeText={handleChangeText}
         onBlur={handlerBluer}
      />
      {!state.valid && state.touched && (
          <View>
              <Text style={styles.errorText}>{errorText}</Text>
        </View>  
      )}
    </View>);
};

const styles = StyleSheet.create({
    formControl: {
      width: '100%',
    },
    label: {
      fontFamily: 'Roboto',
      marginVertical: 8,
    },
    input: {
      paddingHorizontal: 2,
      paddingVertical: 5,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },
    errorText: {
      marginVertical: 5,
      color: '#cc7755'
    }
  });
export default Input;
