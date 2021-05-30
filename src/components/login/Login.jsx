import React from 'react';

const Login = () => {
    return ( 
        <div className="form-container">
            <div className="form-box">
            <h2>ورود به سایت</h2>
            <form>
                <div className="form-input">
                    <input type="text" name="" required />
                    <label>نام کاربری</label>
                </div>
                <div className="form-input">
                    <input type="password" name="" required />
                    <label>رمز عبور</label>
                </div>
                <button type="submit" className="text-uppercase light-btn my-3">ورود</button>
            </form>
        </div>
        </div>
     );
}
 
export default Login;