import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Expensify</h1>
            <nav id="navbars">
                <NavLink to="/" className={({ isActive }) => {
                    return isActive ? "active" : "inactive";
                }}>
                    To Home
                </NavLink>
                <NavLink to="/create" className={({ isActive }) => {
                    return isActive ? "active" : "inactive";
                }}>
                    To Create Expense
                </NavLink>
                <NavLink to="/edit" className={({ isActive }) => {
                    return isActive ? "active" : "inactive";
                }}>
                    To Edit Expense
                </NavLink>
                <NavLink to="/help" className={({ isActive }) => {
                    return isActive ? "active" : "inactive";
                }}>
                    To Help Expense
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
