import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";


const Header = (props) => {
    return (
        <header>
            <h1>Expensify</h1>          
            <nav id="navbars">
                <NavLink to="/dashboard" className={({ isActive }) => {
                    return isActive ? "active" : "inactive";
                }}>
                    Home
                </NavLink>
                <NavLink to="/create" className={({ isActive }) => {
                    return isActive ? "active" : "inactive";
                }}>
                    Create
                </NavLink>
            </nav>
            <button onClick={props.startLogout}>Log Out</button>
        </header>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startLogout: async () => await dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
