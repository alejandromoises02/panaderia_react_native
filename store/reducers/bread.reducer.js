import { BREADS } from "../../data/breads";
import { SELECT_BREAD } from "../actions/bread.actions";
import { FILTER_BREADS } from "../actions/bread.actions";

const initialState = {
    list: BREADS,
    filteredBreads: [],
    selectedID: null
}

const BreadsReducer = (state = initialState, action) =>{
    switch(action.type){
        case SELECT_BREAD:
            return {
                ...state,
                selectedID: action.payload,
            };

        case FILTER_BREADS:
            return {
                ...state,
                filteredBreads: state.list.filter(bread => bread.category === action.payload)
            };

        default:
            return state;
    }
}

export default BreadsReducer