const initialState = {
    notification : {
        open : false,
        text : ''
    },
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_NOTIFICATION':
            return{
                ...state,
                notification : {
                    open : action.payload.open,
                    text : action.payload.text
                },
            }
        case 'REMOVE_NOTIFICATION':
            return{
                ...state,
                notification : {
                    open : false,
                    text : ''
                },
            }
        default:
            return state;
    }
}