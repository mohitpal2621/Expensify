import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";


export const AddExpense = (props) => {
    const nav = useNavigate();
    const handleAddExpense=(expense) => {
        console.log("Submitting expense:", expense);

        // this.props.dispatch(addExpense(expense))
        props.addExpense(expense);
        nav('/');
    }

    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                onSubmit={handleAddExpense}
            />
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpense);


// Can also be done using React Redux hooks

// import React from "react";
// import { useDispatch } from "react-redux";
// import { addExpense } from "../actions/expenses";
// import { useNavigate } from "react-router-dom";
// import ExpenseForm from "./ExpenseForm";

// const AddExpense = () => {
//     const dispatch = useDispatch();
//     const nav = useNavigate();

//     const onSubmit = (expense) => {
//         dispatch(addExpense(expense));
//         nav('/');
//     };

//     return (
//         <div>
//             <h1>Add Expense</h1>
//             <ExpenseForm onSubmit={onSubmit} />
//         </div>
//     );
// };

// export default AddExpense;
