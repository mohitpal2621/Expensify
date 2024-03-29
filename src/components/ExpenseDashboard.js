import React from "react";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

const ExpenseDashboardPage = () => {
    return (
        <div>
            <ExpenseListFilters/>
            <ExpenseSummary/>
            <ExpenseList/>
        </div>
    )
};


export default ExpenseDashboardPage;