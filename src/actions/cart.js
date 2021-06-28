import { getProduct } from "../services/productServices"

export const addToCart = productId => {
    return async dispatch => {
        const { data } = await getProduct(productId);
        await dispatch({
            type: "ADD_TO_CART",
            payload:{
                productId: data.id,
                title: data.title,
                price: data.price,
                image: data.image
            }
        });
    }
}
export const removeFromCart = (productId) => {
    return dispatch => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: productId
        });
    }
}