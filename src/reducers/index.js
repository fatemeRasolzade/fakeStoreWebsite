import { combineReducers } from "redux";
import { productReducer } from './product';
import { productsReducer } from './products';
import { cartReducer } from './cart';

 export const reducers = combineReducers({
     product: productReducer,
     products: productsReducer,
     cart: cartReducer,
 });