import React, { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const Register = () => {

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [policy,setPolicy] = useState();

    const [, forceUpdate] = useState();
    const validator = useRef(new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامیست",
        email: "ایمیل وارد شده نامعتبر است",
        min: "پر کردن این فیلد تا 6 کاراکتر الزامیست"
      },
      element: message => <div style={{ color: "red" , textAlign: "left" }}>{message}</div>
    }));

    const reset = () => {
      setUsername("");
      setEmail("");
      setPassword("");
      setPolicy();
    }

    const handleSubmit = event => {

      event.preventDefault();

      const user = {
        username,
        email,
        password
      }
      
      if(validator.current.allValid()){
        alert(username+"\nدر حال حاضر عضویت در سایت امکان پذیر نمی باشد\nدر حال توسعه...");
        console.log(user);
        reset();
      }else{
        validator.current.showMessages();
        forceUpdate(1);
      }
    }

    return (
      <div className="form-container">
        <div className="form-box">
          <h2>عضویت در سایت</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <input 
                type="text" 
                name="username" 
                value={username}
                onChange={e => {
                  setUsername(e.target.value);
                  validator.current.showMessageFor("username");
                }}
                
              />
              <label>نام کاربری</label>
            </div>
              {validator.current.message("username",username,"required|min:6")}
            <div className="form-input">
              <input 
                type="text"
                name="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                  validator.current.showMessageFor("email");
                }}
               
              />
              {validator.current.message("email",email,"required|email")}
              <label>ایمیل</label>
            </div>
            <div className="form-input">
              <input
                type="password"
                name="password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                  validator.current.showMessageFor("password");
                }}
              />
              <label>رمز عبور</label>
            </div>
              {validator.current.message("password",password,"required|min:6")}
            <div className="text-right">
              <input
                type="checkbox"
                name="policy"
                value={policy}
                onChange={e => {
                  setPolicy(e.currentTarget.checked);
                  validator.current.showMessageFor("policy");
                }}
                
              />
              <label className="pr-2">قوانین و مقررات سایت را می پذیرم</label>
            </div>
              {validator.current.message("policy",policy,"required")}
            <button 
              type="submit" 
              className="text-uppercase light-btn mt-4"
            >
              عضویت
            </button>
          </form>
        </div>
      </div>
    );
}
 
export default Register;