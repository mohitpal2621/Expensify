import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expensesViewer";
import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "./actions/filters";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from "./routers/AppRouter";
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

const tranThree = store.dispatch(addExpense({description: "Tuition", note: "Paid the college fees successfully", amount: 10000, createdAt: 22000}));
const tranOne = store.dispatch(addExpense({description: "Rent Bill", amount: 8000, createdAt: 23000}));
const tranTwo = store.dispatch(addExpense({description: "Gas Bill", amount: 9000, createdAt: 21000}));
// store.dispatch(sortByAmount());
store.subscribe(() => {
    const state = store.getState();
    const viewExp = getVisibleExpenses(state.expenses, state.filters);
    console.log(viewExp);
})


const jsx = ( 
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const root = createRoot(document.getElementById("app"));

root.render(jsx);
