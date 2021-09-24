import React, { useCallback, useReducer } from "react";
import { Alert, StyleSheet } from "react-native";
import AuthScreenWrapper from "../../components/AuthScreenWrapper";
import { useDispatch } from "react-redux";
import { Button } from "react-native-elements";
import { COLORS } from "./../../constants/colors";
import { signup } from "../../store/actions/auth.action";
import Input from "../../components/input";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";
const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const inputValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const inputValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let formIsValid = true;
    for (const key in inputValidities) {
      formIsValid = formIsValid && inputValidities[key];
    }
    return {
      formIsValid,
      inputValues,
      inputValidities
    };
  }
  return state;
};

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [formState, formDispath] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: ""
    },
    inputValidities: {
      email: false,
      password: ""
    },
    formIsValid: false
  });

  const handlerSignUp = () => {
    if (formState.formIsValid) {
      dispatch(
        signup(formState.inputValues.femail, formState.inputValues.password)
      );
    } else {
      Alert.alert("No es valido el Formulario", "verifique los datos", [
        { text: "OK" }
      ]);
    }
  };

  const onInputChangeHandler = useCallback(
    (inputId, inputValue, inputValidity) => {
      formDispath({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputId
      });
    }
  );

  return (
    <AuthScreenWrapper
      title="Registrate"
      message="¿Ya tienes cuenta?"
      buttonText="Ingrese"
      buttonPath="Login"
    >
      <Input
        label="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        required
        email
        id="email"
        onInputChange={onInputChangeHandler}
      />
      <Input
        label="Password"
        secureTextEntry
        autoCapitalize="none"
        required
        minLength={6}
        id="password"
        onInputChange={onInputChangeHandler}
      />
      <Button
        title="Registrarme"
        onPress={handlerSignUp}
        buttonStyle={styles.button}
      />
    </AuthScreenWrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    marginVertical: 20,
  },
});

export default RegisterScreen;
