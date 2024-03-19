import React from "react";
import { render, screen } from '@testing-library/react';
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from '../fixtures/expenses';
import { MemoryRouter } from 'react-router-dom';

test("Should render a list item with given expense", () => {
    const {container} = render(<MemoryRouter><ExpenseListItem {...expenses[0]} /></MemoryRouter>);
    expect(container).toMatchSnapshot();
})