import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';
import { MemoryRouter } from 'react-router-dom';

test("Should render expense list with expenses", () => {
    const {container} = render(<MemoryRouter><ExpenseList expenses={expenses}/></MemoryRouter>);
    // Assert that the ExpenseList component is rendered
    expect(container).toMatchSnapshot();
});

test("Should render expense list with empty expenses", () => {
    const {container} = render(<MemoryRouter><ExpenseList expenses={[]}/></MemoryRouter>);
    // Assert that the ExpenseList component is rendered
    expect(container).toMatchSnapshot();
});