import React from "react";
import { connect } from "react-redux";
import { addExpense, editExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";

const AddExpense = (props) => {
    const nav = useNavigate();
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                onSubmit={(expense) => {
                    console.log(expense);
                    props.dispatch(addExpense(expense));
                    nav('/');
                }}
            />
        </div>
    )
};

export default connect()(AddExpense);