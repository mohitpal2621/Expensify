import React from "react";
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router-dom";
import 'react-dates/initialize';
import ExpenseListFilters from "../../components/ExpenseListFilters";
import { filters, altFilters} from "../fixtures/filters";
import { Provider } from "react-redux";
import configureStore from "../../store/configureStore";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, store;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    store = configureStore();
});

test("Should render default ExpenseListFilter", () => {
    const { container } = render(
        <Provider store={store}>
            <MemoryRouter>
                <ExpenseListFilters />
            </MemoryRouter>
        </Provider>
    );

    expect(container).toMatchSnapshot();
});