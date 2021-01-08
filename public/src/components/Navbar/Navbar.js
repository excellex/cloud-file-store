import React from 'react';
import './navbar.css'
import Logo from '../../assets/navbar-logo.svg'
import {NavLink} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutAC } from '../../redux/actionCreators';
const Navbar = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(store => store.user.isAuth)

  return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar__logo"/>

                <div className="navbar__header"><NavLink to="/">MERN CLOUD</NavLink></div>
                {isAuth &&<div className="navbar__login" onClick={() => dispatch(logoutAC())}>Выйти</div>}
                {!isAuth &&<div className="navbar__login"><NavLink to="/signin">Войти</NavLink></div>}
                {!isAuth &&<div className="navbar__registration"><NavLink to="/signup">Регистрация</NavLink></div>}
                
            </div>
        </div>
    );
};

export default Navbar;
