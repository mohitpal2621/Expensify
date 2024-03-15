import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expensesViewer';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>This is the Expense List</h1>
        {props.expenses.map((exp) => (
            <ExpenseListItem key={exp.id} {...exp} />
        ))}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);
