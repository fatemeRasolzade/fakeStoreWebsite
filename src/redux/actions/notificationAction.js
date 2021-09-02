export const createNotification = (text) => (dispatch) => {
    dispatch({
        type : 'GET_NOTIFICATION',
        payload : {
            text : text,
            open : true
        }
    })
}

export const removeNotification = () => (dispatch) => {
    dispatch({
        type : 'REMOVE_NOTIFICATION',
    })
}