import React from "react";
import { NavLink, useParams } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <h1>Expensify</h1>
            <nav id="navbars">
                <NavLink to="/" className={({ isActive }) => {
                    return isActive ? "active" : "inactive";
                }}>
                    Home
                </NavLink>
                <NavLink to="/create" className={({ isActive }) => {
                    return isActive ? "active" : "inactive";
                }}>
                    Create
                </NavLink>
                <NavLink to="/help" className={({ isActive }) => {
                    return isActive ? "active" : "inactive";
                }}>
                    Help
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
