import React from "react";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpenseList from "./ExpenseList";

const ExpenseDashboardPage = () => {
    console.log("IN DASHBOARD");
    return (
        <div>
            <ExpenseListFilters/>
            <ExpenseList/>
        </div>
    )
};


export default ExpenseDashboardPage;