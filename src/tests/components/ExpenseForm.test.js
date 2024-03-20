import React from "react";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import moment from "moment";
import ExpenseForm from '../../components/ExpenseForm';
import expenses from "../fixtures/expenses";


jest.mock('react-dates', () => ({
    SingleDatePicker: () => <div>SingleDatePicker</div>
}));

// Mock moment in ExpenseForm.test.js
jest.mock('moment', () => {
    const moment = jest.requireActual('moment');
    return (timestamp = 0) => {
        return moment(timestamp);
    };
});


// Default call with default expense
test("Should render expense form correctly", () => {
    const { container } = render(<ExpenseForm />);
    expect(container).toMatchSnapshot();
});

test("Should render expense form WITH props correctly", () => {
    const { container} = render(<ExpenseForm expense={expenses[2]} />);
    expect(container).toMatchSnapshot();
});

test("Should render ERROR for invalid form submission", () => {
    const { getByText, container } = render(<ExpenseForm />);
  
    // Take a snapshot before form submission
    expect(container).toMatchSnapshot();

    // Simulate form submission without filling in any fields
    fireEvent.submit(container.querySelector('form'));

    // Assert that the error message appears
    expect(getByText("Please provide description and amount.")).toBeInTheDocument();

    // Take a snapshot after form submission
    expect(container).toMatchSnapshot();
});

test("Should set DESCRIPTION on input change", () => {
    const { container } = render(<ExpenseForm/>);

    const description = container.querySelector(
        'input[data-testid="description-input"]'
    );

    fireEvent.change(description, {target: {value: "New CHANGE"}})

    expect(description).toHaveValue("New CHANGE");
});

test("Should set NOTE on input change", () => {
    const { container } = render(<ExpenseForm/>);

    const note = container.querySelector('textarea');

    fireEvent.change(note, {target: {value: "New CHANGE"}})

    expect(note).toHaveValue("New CHANGE");
});

test("Should set AMOUNT on VALID input change", () => {
    const { container } = render(<ExpenseForm/>);

    const amount = container.querySelector('input[data-testid="amount-input"]');

    fireEvent.change(amount, {target: {value: "6969.69"}});

    expect(amount).toHaveValue("6969.69");
});

test("Should set AMOUNT on INVALID input change", () => {
    const { container } = render(<ExpenseForm/>);

    const amount = container.querySelector('input[data-testid="amount-input"]');

    fireEvent.change(amount, {target: {value: "6969.6969"}});

    expect(amount).toHaveValue("");
});

test("Should call onSubmit PROP for valid form submission", () => {
    const onSubmitSpy = jest.fn();

    const { container } = render(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);

    fireEvent.submit(container.querySelector('form'));
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        note: expenses[0].note,
        amount: parseFloat(expenses[0].amount, 10).toFixed(2),
        createdAt: expenses[0].createdAt
    });
    expect(container).toMatchSnapshot();
});
