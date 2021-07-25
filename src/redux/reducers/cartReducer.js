export const cartReducer = ( state= { cartItems:[] }, action ) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const item = action.payload;
            const inCart =state.cartItems.find (
                (i) => i.productId === item.productId
            )
            if (inCart) {
                return {
                    ...state ,
                    cartItems : state.cartItems.map((i) =>
                    i.productId === inCart.productId ? item : i
                    ),
                }
            } else {
                return {
                    ...state ,
                    cartItems : [...state.cartItems , item]
                }
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems : state.cartItems.filter((i) => i.productId !== action.payload),
            }
        default:
            return state;
    }
 }