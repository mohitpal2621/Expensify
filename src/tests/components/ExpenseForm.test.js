import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExpenseForm from '../../components/ExpenseForm';
import { MemoryRouter } from "react-router-dom";
import expenses from "../fixtures/expenses";


jest.mock('react-dates', () => ({
    SingleDatePicker: () => <div>SingleDatePicker</div>
}));

// Mock moment in ExpenseForm.test.js
jest.mock('moment', () => {
    const moment = jest.requireActual('moment');
    return (timestamp) => {
        return {
            subtract: (amount, unit) => moment(timestamp).subtract(amount, unit),
            add: (amount, unit) => moment(timestamp).add(amount, unit),
            valueOf: () => moment(timestamp).valueOf()
        };
    };
});


// Your test case follows...
test("Should render expense form correctly", () => {
    const { container } = render(
        <MemoryRouter>
            <ExpenseForm />
        </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
});


test("Should render expense form WITH props correctly", () => {
    const { container } = render(
        <MemoryRouter>
            <ExpenseForm expense={expenses[1]} />
        </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
});