const initialState={
    products: [],
    productDetails: {}
}

export const productsReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'INIT':
            return{
                ...state,
                products: action.payload
            }
        case 'GET_PRODUCT_DETAILS':
            return{
                ...state,
                productDetails: action.payload
            }
        default:
            return state;
    }
}