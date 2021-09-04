import { combineReducers } from "redux";
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';
import { userReducer } from './userReducer';
import { notificationReducer } from "./notificationReducer";

export const reducers = combineReducers({
    Products: productsReducer,
    Cart: cartReducer,
    Users: userReducer,
    Notification: notificationReducer
});