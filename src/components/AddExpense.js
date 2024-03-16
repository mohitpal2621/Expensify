import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AddExpense = (props) => {
    const navigate = useNavigate(); // Use useNavigate hook to get navigation function

    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                onSubmit={(expense) => {
                    console.log(expense);
                    props.dispatch(addExpense(expense));
                    navigate('/'); // Use navigate function to navigate
                }}
            />
        </div>
    )
};

export default connect()(AddExpense);
