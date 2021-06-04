import { combineReducers } from "redux";
import { productReducer } from './product';
import { productsReducer } from './products';

 export const reducers = combineReducers({
     product: productReducer,
     products: productsReducer
 })