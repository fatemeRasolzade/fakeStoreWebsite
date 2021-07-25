const initialState = {
    users: [
        {
            id:1,
            username:"f.rlh.1424",
            email:"f.rasoolzadeh.1424@gmail.com",
            password:"0000000000"
        }
    ],
    userInfo: {}
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return{
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}