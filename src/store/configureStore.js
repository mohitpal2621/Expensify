import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from '../reducers/expenseReducer';
import filtersReducer from '../reducers/filterReducer';


export default () => {
    const store = configureStore({
        reducer: {
            expenses: expenseReducer,
            filters: filtersReducer
        }
    });

    return store;
};
