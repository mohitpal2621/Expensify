import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => {
    return (
        <div>
            This is from my dashboard comp.
        </div>
    )
};

const AddExpense = () => {
    return (
        <div>
            This is from my AddExpense comp.
        </div>
    )
};

const EditExpense = () => {
    return (
        <div>
            This is from my EditExpense comp.
        </div>
    )
};

const HelpPage = () => {
    return (
        <div>
            This is from my HelpPage comp.
        </div>
    )
};

const NotFound = () => {  
    return (
        <div>
            404! - <Link to="/">Go Home</Link>
        </div>
    );
};

const Header = () => {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink to="/" className={"active"}>To Home</NavLink>
            <NavLink to="/create" className="active">To Create Expense</NavLink>
            <NavLink to="/edit" className="active">To Edit Expense</NavLink>
            <NavLink to="/help" className="active">To Help Expense</NavLink>
        </header>
    );
};

const routes = (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<ExpenseDashboardPage />} />
            <Route path="/create" element={<AddExpense />} />
            <Route path="/edit" element={<EditExpense />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="*" element={<NotFound />} /> 
        </Routes>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
