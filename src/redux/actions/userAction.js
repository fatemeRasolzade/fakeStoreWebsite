import history from "../../Utils/history"
import { createNotification } from "./notificationAction"

export const addUser = user => (dispatch, getState) => {
    const users = getState().Users.users
    const filteredUsername = users.filter(u => u.username === user.username)[0]
    const filteredEmail = users.filter(u => u.email === user.email)[0]
    if(filteredUsername){
        dispatch(createNotification('این نام کاربری قبلا ثبت شده است'))
    }else if(filteredEmail){
        dispatch(createNotification('این ایمیل قبلا ثبت شده است'))
    }else{
        dispatch({type:'ADD_USER', payload: user})
        dispatch(createNotification('کاربر با موفقیت ثبت شد'))
        history.push("/login")
    }
}

export const addUserInfo = user => dispatch => {
    dispatch({type: 'ADD_USER_INFO', payload: user})
}

export const chkPass = user => (dispatch, getState) => {
    const users = getState().Users.users
    const filteredUsername = users.filter(u => u.username === user.username)[0]
    if(filteredUsername){
        if(filteredUsername.password === user.password){
            localStorage.setItem('TOKEN_KEY', 'TESTLOGIN')
            dispatch(addUserInfo(user))
            dispatch(createNotification('ورود با موفقیت انجام شد'))
            history.push('/')
        }else{
            dispatch(createNotification('رمز عبور صحیح نمی باشد'))
        }
    }else{
        dispatch(createNotification('چنین کاربری در سیستم ثبت نشده است'))
    }
}

export const signOut = () => dispatch => {
    localStorage.removeItem('TOKEN_KEY')
    dispatch({type: 'SIGN_OUT'})
}