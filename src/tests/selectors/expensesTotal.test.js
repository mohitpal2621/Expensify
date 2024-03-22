import React from "react";
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import ExpensesTotal from '../../selectors/expensesTotal';
import expenses from '../fixtures/expenses';

test("Should return 0 if no expenses", () => {
    const sum = ExpensesTotal([]);
    console.log("THIS IS THE SUMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM", sum);
    expect(sum).toBe(0);
});

test("Should add up a single expense", () => {
    const sum = ExpensesTotal([expenses[1]]);
    console.log("THIS IS THE SUMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM", sum);
    expect(sum).toBe(expenses[1].amount);
})

test("Should add up multiple expenses", () => {
    const sum = ExpensesTotal(expenses);
    console.log("THIS IS THE SUMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM", sum);
    const check = expenses[0].amount + expenses[1].amount + expenses[2].amount
    expect(sum).toBe(check);
})