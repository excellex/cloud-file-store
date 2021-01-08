import React from 'react';
import './navbar.css'
import Logo from '../../assets/navbar-logo.svg'
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar__logo"/>
                <div className="navbar__header"><NavLink to="/">MERN CLOUD</NavLink></div>
                <div className="navbar__login"><NavLink to="/signin">Войти</NavLink></div>
                <div className="navbar__registration"><NavLink to="/signup">Регистрация</NavLink></div>
            </div>
        </div>
    );
};

export default Navbar;
