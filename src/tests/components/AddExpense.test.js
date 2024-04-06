import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For extending jest-dom matchers
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import { AddExpense } from '../../components/AddExpense'; // Import the unconnected component
import expenses from '../fixtures/expenses';

jest.mock('firebase/auth', () => ({
    GoogleAuthProvider: jest.fn(() => ({
      setCustomParameters: jest.fn(),
    })),
    getAuth: jest.fn(() => ({})),
}));

test("Should render Add Expense Page correctly", () => {
    const store = configureStore();
    const { container } = render(
        <Provider store={store}>
            <MemoryRouter>
                <AddExpense/>
            </MemoryRouter>
        </Provider>
    );
    expect(container).toMatchSnapshot();
});

