import { getProducts } from "../services/productServices"

export const getAllProducts = () => {
    return async dispatch => {
        const {data} = await getProducts();
        await dispatch({type:"INIT", payload:data});
    }
}