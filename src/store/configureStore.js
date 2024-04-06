import { combineReducers, configureStore } from "@reduxjs/toolkit";
import expenseReducer from '../reducers/expenseReducer';
import filtersReducer from '../reducers/filterReducer';
import authReducer from "../reducers/authReducer";

const rootreducer = combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer,
    auth: authReducer
});

export default () => {
    const store = configureStore({
        reducer: rootreducer
    });

    return store;
};
