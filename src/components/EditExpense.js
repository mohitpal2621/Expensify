// Using Hooks instead of connect()
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

export const EditExpense = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const nav = useNavigate();
    const exp = useSelector(state => state.expenses.find((exp) => exp.id === id));
    
    return (
        <div>
            <ExpenseForm
                expense={exp}
                onSubmit={(exp) => {
                    dispatch(startEditExpense(id, exp));
                    nav("/");
                }}
            />
            <button onClick={() => {
                    dispatch(startRemoveExpense(id));
                    nav("/");
                }}
            >
                Remove button
            </button>
        </div>
    );
};

export default EditExpense;