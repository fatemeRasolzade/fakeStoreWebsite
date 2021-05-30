import React from 'react';

const Register = () => {
    return ( 
    <div className="form-container">
          <div className="form-box">
      <h2>عضویت در سایت</h2>
      <form>
        <div className="form-input">
          <input type="text" name="" required />
          <label>نام کاربری</label>
        </div>
        <div className="form-input">
          <input type="email" name="" required />
          <label>ایمیل</label>
        </div>
        <div className="form-input">
          <input type="password" name="" required />
          <label>رمز عبور</label>
        </div>
        <div className="text-right">
          <input type="checkbox" name="" required />
          <label className="pr-2">قوانین و مقررات سایت را می پذیرم</label>
        </div>
        <button type="submit" className="text-uppercase light-btn mt-4">عضویت</button>
      </form>
    </div>
    </div>
     );
}
 
export default Register;