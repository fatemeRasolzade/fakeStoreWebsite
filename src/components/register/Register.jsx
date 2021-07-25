import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { v4 as uuidv4 } from 'uuid';
import SimpleReactValidator from 'simple-react-validator';
import { addUser } from './../../redux/actions/userAction';

const Register = () => {

    const [user, setUser] = useState({
      id: uuidv4(), 
      username: "",
      email: "",
      password: ""
    })

    const [policy,setPolicy] = useState();
    const [, forceUpdate] = useState();
    const dispatch = useDispatch();

    const validator = useRef(new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامیست",
        email: "ایمیل وارد شده نامعتبر است",
        min: "پر کردن این فیلد تا 6 کاراکتر الزامیست"
      },
      element: message => <div style={{ color: "red" , textAlign: "left" }}>{message}</div>
    }));

    const onChange = (name,value) => {
      setUser({
        ...user,
        [name]: value
      })
    }

    const onSubmit = event => {

      event.preventDefault();
      
      if(validator.current.allValid()){
        dispatch(addUser(user));
      }else{
        validator.current.showMessages();
        forceUpdate(1);
      }
    }

    return (
      <main>
        <div className="container">
          <Helmet>
            <title>FAKESTORE | Register</title>
          </Helmet>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb p-0 my-4">
                <li class="breadcrumb-item"><Link to="/" className="dark-link"> صفحه اصلی </Link></li>
                <li class="breadcrumb-item active" aria-current="page"> عضویت در سایت </li>
            </ol>
          </nav>
          <div className="form-container py-5">
            <div className="form-box">
              <h2>عضویت در سایت</h2>
              <form onSubmit={onSubmit}>
                <div className="form-input">
                  <input 
                    type="text" 
                    name="username" 
                    value={user.username}
                    onChange={event => {
                      onChange('username',event.target.value)
                      validator.current.showMessageFor("username");
                    }}
                  />
                  <label>نام کاربری</label>
                </div>
                {validator.current.message("username",user.username,"required|min:6")}
                <div className="form-input">
                  <input 
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={event => {
                      onChange('email',event.target.value)
                      validator.current.showMessageFor("email");
                    }}
                  />
                  {validator.current.message("email",user.email,"required|email")}
                  <label>ایمیل</label>
                </div>
                <div className="form-input">
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={event => {
                      onChange('password',event.target.value)
                      validator.current.showMessageFor("password");
                    }}
                  />
                  <label>رمز عبور</label>
                </div>
                {validator.current.message("password",user.password,"required|min:6")}
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
                  <label className="pr-1">قوانین و مقررات سایت را می پذیرم</label>
                </div>
                {validator.current.message("policy",policy,"required")}
                <button 
                  type="submit" 
                  className="text-uppercase light-btn mt-4"
                  onClick={onSubmit}
                >
                  عضویت
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
}
 
export default Register;