import { CATEGORIES } from "../../data/categories";
import { SELECT_CATEGORY } from "../actions/category.actions";

const initialState ={
    categories: CATEGORIES,
    selectedID: null,
};

const CategoryReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_CATEGORY:
            return{
                ...state,
                selectedID: action.payload,
            }
        default:
            return state;

    }
    return state;
}

export default CategoryReducer;