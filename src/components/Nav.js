import React from 'react'; 
import {NavLink} from 'react-router-dom';
import '../App.css';
import logo from '../resources/logo.png';

const Nav = () => {
  return(
    <div className="nav-container">
      <div className="nav-logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="nav-link-container">
        <NavLink className="nav-link" activeClassName="active" to="/register">Sign Up</NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/login">Log In</NavLink>
      </div>

    </div>
  )
}

export default Nav;