import React, { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

const Login = () => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const [, forceUpdate] = useState();
    const validator = useRef(new SimpleReactValidator({
      messages:{
        required:"پر کردن این فیلد الزامیست",
        min:"پر کردن این فیلد تا 6 کاراکتر الزامیست"
      },
      element: message => <div style={{ color: "red" , textAlign: "left" }}>{message}</div>
    }));

    const reset = () => {
      setUsername("");
      setPassword("");
    }

    const handleSubmit = event => {

        event.preventDefault();

        const user = {
            username,
            password
        }

        if(validator.current.allValid()){
            alert(username+"\nدر حال حاضر ورود به سایت امکان پذیر نمی باشد\nدر حال توسعه...");
            console.log(user);
            reset();
        }else{
            validator.current.showMessages();
            forceUpdate(1);
        }
    }
    return (
        <main>
            <div className="container">
                <Helmet>
                    <title>FAKESTORE | Login</title>
                </Helmet>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb p-0 my-4">
                        <li class="breadcrumb-item"><Link to="/" className="dark-link"> صفحه اصلی </Link></li>
                        <li class="breadcrumb-item active" aria-current="page"> ورود به سایت </li>
                    </ol>
                </nav>
                <div className="form-container py-5">
                    <div className="form-box">
                        <h2>ورود به سایت</h2>
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
                                <input type="password"
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
                            <button type="submit" className="text-uppercase light-btn my-3">
                                ورود
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default Login;