import React from "react";
import { Link } from "react-router-dom";
import expensesTotal from '../selectors/expensesTotal';
import selectExpenses from '../selectors/expensesViewer';
import curr from "../format/currFormat";
import { useSelector } from "react-redux";

const ExpenseSummary = () => {
    const exp = useSelector(state => {
    
        return selectExpenses(state.expenses, state.filters)
    });
    const sum = expensesTotal(exp);
    return (
        <div className="page-header">
            <div className="content-container">
            {
                (exp.length >= 1) && <h1 className="page-header__title">Viewing <span>{exp.length}</span> {exp.length===1 ? "expense" : "expenses"} totalling <span>{curr.format(sum).replace("INR", "Rs.")}</span></h1>
            }
                <div className="page-header__actions">
                    <Link className="button hoverBtn" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

export default ExpenseSummary;