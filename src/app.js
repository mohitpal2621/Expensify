import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from "./routers/AppRouter";
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const root = createRoot(document.getElementById("app"));
const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const loadingComponent = <div><p>Loading...</p></div>;

// Render the loading component initially
root.render(loadingComponent);

// Dispatch action to start fetching expenses
store.dispatch(startSetExpenses())
.then(() => {
    // Once expenses are fetched, render the actual app
    root.render(jsx);
})
.catch((error) => {
    // Handle errors if expenses fetching fails
    console.error("Error fetching expenses:", error);
});