import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import moment from "moment";

const EditExpense = (props) => {
    const { id } = useParams();
    const exp = useSelector(state => state.expenses.find((exp) => exp.id === id));
    console.log(exp);
    
    return (
        <div>
            <ExpenseForm
                expense={exp}
                onSubmit={(exp) => {
                    console.log("updated", exp);
                }}
            />
        </div>
    )
};


export default EditExpense;