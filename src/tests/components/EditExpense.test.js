import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For extending jest-dom matchers
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import { EditExpense } from '../../components/EditExpense'; // Import the unconnected component

test("Should render Add Expense Page correctly", () => {
    const store = configureStore();
    console.log(store.getState());
    const { container } = render(
        <Provider store={store}>
            <MemoryRouter>
                <EditExpense/>
            </MemoryRouter>
        </Provider>
    );
    expect(container).toMatchSnapshot();
});

