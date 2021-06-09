import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = () => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light main-navbar">
            <div className="container-fluid">
                <button className="navbar-toggler"
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                            to="/"
                            activeStyle={{fontWeight:"bold"}} exact
                            className="nav-link link-navbar pr-4" aria-current="page">
                                <i className="fa fa-home pl-1"></i>صفحه اصلی</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/register"
                            activeStyle={{fontWeight:"bold"}}
                            className="nav-link link-navbar pr-4">
                                <i className="fa fa-sign-in pl-1"></i>عضویت</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login"
                            activeStyle={{fontWeight:"bold"}}
                            className="nav-link link-navbar pr-4">
                                <i className="fa fa-user-o pl-1"></i>ورود</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about-us"
                            activeStyle={{fontWeight:"bold"}}
                            className="nav-link link-navbar pr-4">
                                <i className="fa fa-info pl-1"></i>درباره ما</NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink to="/cart/:id?"
                    activeStyle={{fontWeight:"bold"}}
                    className="navbar-brand link-navbar logo">
                        {cartItems.length}
                        <i className="fa fa-shopping-cart pr-1"></i>
                </NavLink>
            </div>
        </nav>
     );
}

export default Nav;