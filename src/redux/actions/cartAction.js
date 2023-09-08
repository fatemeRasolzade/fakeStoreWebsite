import { ProductsData } from "../../Utils/data";

export const addToCart = (productId) => {
  return async (dispatch) => {
    // const { data } = await getProduct(productId);
    const findProduct = ProductsData.find((item) => parseInt(item.id) === parseInt(productId));
    await dispatch({
      type: "ADD_TO_CART",
      payload: {
        productId: findProduct.id,
        title: findProduct.title,
        price: findProduct.price,
        image: findProduct.image,
      },
    });
  };
};
export const removeFromCart = (productId) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: productId,
    });
  };
};
