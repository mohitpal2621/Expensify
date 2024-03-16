import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {v4 as uuid} from 'uuid';

// ADD_EXPENSE action generator
const addExpense = ({ description='', note='', amount=0, createdAt=0 }) => ({
    type: 'ADDEXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE action generator
const removeExpense = (id) => ({
    type: 'REMOVEEXPENSE',
    id
});

// EDIT_EXPENSE action generator
const editExpense = (id, updates) => ({
    type: 'EDITEXPENSE',
    id,
    updates
});

// SETTEXTFILTER action generator
const setTextFilter = (text = '') => ({
    type: 'SETTEXT',
    text
});

// SORTBYAMOUNT action generator
const sortByAmount = () => ({type: 'SORTBYAMOUNT'});

// SORTBYDATE action generator
const sortByDate = () => ({type: 'SORTBYDATE'});

// SETSTARTDATE action generator
const setStartDate = (stDate) => ({
    type: 'SETSTARTDATE',
    stDate
});

// SETENDDATE action generator
const setEndDate = (edDate) => ({
    type: 'SETENDDATE',
    edDate
});


// Default States
const expensesReducerDefaultState = [];

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

// Reduces Functions
const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADDEXPENSE':
            return [...state, action.expense];
        case 'REMOVEEXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDITEXPENSE':
            return state.map(exp => {
                if(exp.id === action.id){
                    return {...exp, ...action.updates};
                }else{
                    return exp;
                }
            });
        default:
            return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SETTEXT':
            return {...state, text: action.text};
        case 'SORTBYAMOUNT':
            return {...state, sortBy: 'amount'};
        case 'SORTBYDATE':
            return {...state, sortBy: 'date'};
        case 'SETSTARTDATE':
            return {...state, startDate: action.stDate};
        case 'SETENDDATE':
            return {...state, endDate: action.edDate};
        default:
            return state
    }
}

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((exp) => {
        const startDateMatch = typeof startDate !== 'number' || exp.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || exp.createdAt <= endDate; 
        const textMatch = exp.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((exp1, exp2) => {
        if(sortBy === 'date')
            return exp2.createdAt - exp1.createdAt;
        else if(sortBy === 'amount')
            return exp2.amount - exp1.amount;
    })
};


// Combine Reducers and Setup Store
const rootReducer = combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
});

const store = configureStore({
    reducer: rootReducer
});


// Subscribe for logging on state changes
store.subscribe(() => {
    const state = store.getState();
    const visExp = getVisibleExpenses(state.expenses, state.filters);
    console.log(visExp);
})

// Dispatches
const expOne = store.dispatch(addExpense({description: "Feb Rent", amount: 5000, createdAt: 1000}));
const expTwo = store.dispatch(addExpense({description: "Gas", amount: 800, createdAt: -1000}));
const expThree = store.dispatch(addExpense({description: "Tuition", amount: 3200, createdAt: 21000}));
const expFour = store.dispatch(addExpense({description: "Grocery", amount: 700, createdAt: 3200}));
// const expThree = store.dispatch(addExpense({description: "College", note: "Paid clg fees", amount: 16000}));
// const expFour = store.dispatch( removeExpense(expThree.expense.id) );
// const expFive = store.dispatch( editExpense(expOne.expense.id, { note:"paid rent for February", amount: 5500 }) );
// store.dispatch(setTextFilter('rent'));
// console.log(store.getState());
// store.dispatch(setTextFilter());
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(1000));
// store.dispatch(setEndDate());
store.dispatch(sortByAmount());
