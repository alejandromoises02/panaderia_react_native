import { URL_API } from './../../constants/database'

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CONFIRM_CART = 'CONFIRM_CART';

export const addItem = (item) =>({
    type: ADD_ITEM,
    payload: item,
});

export const removeItem = (id) =>({
    type: REMOVE_ITEM,
    payload: id,
});

export const confirmCart = (payload) => {
    return async dispatch => {
        try{
            const response = await fetch(`${URL_API}/cart.json`,{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items: {...payload},
                })
            })
            const result = await response.json();
            console.log(result);
            dispatch({
                type:CONFIRM_CART,
            });
        }catch(e){
            console.log(e.message);
        }
        
    }
}


