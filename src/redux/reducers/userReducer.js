const initialState = {
    users: [
        {
            id:1,
            username:"f.rlh.1424",
            email:"f.rasoolzadeh.1424@gmail.com",
            password:"0000000000"
        },
        {
            id:2,
            username:"nafis.amiri",
            email:"nafis.amiri@gmail.com",
            password:"0000000000"
        },
    ],
    userInfo: {}
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return{
                ...state,
                users: [...state.users, action.payload]
            }
        case 'ADD_USER_INFO':
            return{
                ...state,
                userInfo: action.payload
            }
        case 'SIGN_OUT':
            return{
                ...state,
                userInfo: {}
            }
        default:
            return state;
    }
}