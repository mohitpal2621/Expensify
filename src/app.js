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

console.log('test');
const jsx = ( 
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const root = createRoot(document.getElementById("app"));

root.render(jsx);
