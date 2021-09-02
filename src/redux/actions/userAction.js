import history from "../../Utils/history"

export const addUser = user => (dispatch, getState) => {
    const users = getState().Users.users
    const filteredUsername = users.filter(u => u.username === user.username)[0]
    const filteredEmail = users.filter(u => u.email === user.email)[0]
    if(filteredUsername){
        alert('این نام کاربری قبلا ثبت شده است')
    }else if(filteredEmail){
        alert('این ایمیل قبلا ثبت شده است')
    }else{
        dispatch({type:'ADD_USER', payload: user})
        alert('کاربر با موفقیت ثبت شد')
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
            alert('ورود با موفقیت انجام شد')
            history.push('/')
        }else{
            alert('رمز عبور صحیح نمی باشد')
        }
    }else{
        alert('چنین کاربری در سیستم ثبت نشده است')
    }
}

export const signOut = () => dispatch => {
    localStorage.removeItem('TOKEN_KEY')
    dispatch({type: 'SIGN_OUT'})
}