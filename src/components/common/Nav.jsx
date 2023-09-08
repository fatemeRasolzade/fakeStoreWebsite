import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SignoutModal from "../../Utils/SignoutModal";

const Nav = () => {
  // const [OpenModal, setOpenModal] = useState(false)

  const [cartItems] = useSelector((state) => [state.Cart.cartItems]);
  //   const [userInfo, setUserInfo] = useState();

  let userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : undefined;
  //   useEffect(() => {
  //     if (user) setUserInfo(user);
  //   }, []);

  //   const dispatch = useDispatch();

  // const handleOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  return (
    <nav className="navbar navbar-expand-lg navbar-light main-navbar">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <p className="m-0 p-2 logo" aria-current="page">
                FAKESTORE
              </p>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                activeStyle={{ fontWeight: "bold" }}
                exact
                className="nav-link link-navbar pr-4"
                aria-current="page"
              >
                <i className="fa fa-home pl-1"></i>صفحه اصلی
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about-us"
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link link-navbar pr-4"
              >
                <i className="fa fa-info pl-1"></i>درباره ما
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
          {userInfo?.username ? (
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/cart/:id?"
                  activeStyle={{ fontWeight: "bold" }}
                  className="nav-link link-navbar logo"
                >
                  {cartItems.length}
                  <i className="fa fa-shopping-cart pr-1"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to=""
                  // onClick={handleOpen}
                  activeStyle={{ fontWeight: "bold" }}
                  className="nav-link link-navbar logo"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="fa fa-sign-out pr-1"></i>
                </NavLink>
                <SignoutModal />
              </li>
              <li className="nav-item">
                <p style={{}} className="nav-link link-navbar pr-4">
                  {userInfo?.username}
                  <i className="fa fa-user-o pr-1"></i>
                </p>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/cart/:id?"
                  activeStyle={{ fontWeight: "bold" }}
                  className="nav-link link-navbar logo"
                >
                  {cartItems.length}
                  <i className="fa fa-shopping-cart pr-1"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/register"
                  activeStyle={{ fontWeight: "bold" }}
                  className="nav-link link-navbar pr-4"
                >
                  عضویت
                  <i className="fa fa-sign-in pr-1"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  activeStyle={{ fontWeight: "bold" }}
                  className="nav-link link-navbar pr-4"
                >
                  ورود
                  <i className="fa fa-user-o pr-1"></i>
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
