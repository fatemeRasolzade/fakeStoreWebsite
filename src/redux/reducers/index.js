import { combineReducers } from "redux";
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';
import { userReducer } from './userReducer';

export const reducers = combineReducers({
    Products: productsReducer,
    Cart: cartReducer,
    Users: userReducer,
});