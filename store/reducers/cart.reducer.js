import { Switch } from "react-native";
import { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART } from "../actions/cart.actions";

const initialState = {
    items: [],
    total: 0,
}

const totalizar = (list) => list.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0);


const CartReducer = (state = initialState, action) =>{
        switch(action.type){
            case ADD_ITEM:
                const index = state.items.findIndex(item => item.id === action.payload.id);
                if(index === -1){
                    const item = {...action.payload, quantity : 1}
                    const updateCart = [...state.items, item];

                    return {
                        ...state,
                        items:updateCart,
                        total: totalizar(updateCart),
                    }
                }

                const items = state.items.map(item => {
                    if(item.id === action.payload.id) item.quantity++
                    return item
                })
                return {
                    ...state,
                    items,
                    total: totalizar(items)
                }

            case REMOVE_ITEM:
                const updateCart = state.items.filter(item => item.id !== action.payload)
                return {
                    ...state,
                    items: updateCart,
                    total: totalizar(updateCart)
                }

            case CONFIRM_CART:
                return {
                    ...state,
                    items:[],
                    total: 0,
                }

            default:
                return state
        }
}

export default CartReducer