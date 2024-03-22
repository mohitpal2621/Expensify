import React from "react";
import expensesTotal from '../selectors/expensesTotal';
import selectExpenses from '../selectors/expensesViewer';
import curr from "../format/currFormat";
import { useSelector } from "react-redux";

const ExpenseSummary = () => {
    const exp = useSelector(state => selectExpenses(state.expenses, state.filters));
    const sum = expensesTotal(exp);
    return (
        <div>
            {
                (exp.length >= 1) && <h3>Viewing {exp.length} {exp.length===1 ? "expense" : "expenses"} totalling {curr.format(sum).replace("INR", "Rs.")}</h3>
            }
        </div>
    );
};

export default ExpenseSummary;