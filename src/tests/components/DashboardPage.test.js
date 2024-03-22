// DashboardPage.test.js
import React from "react";
import { render, screen } from '@testing-library/react';
import ExpenseDashboardPage from "../../components/ExpenseDashboard";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../../store/configureStore";

// This line of code is using Jest's jest.mock() function to mock the ExpenseListFilters component. 
// When you provide a module path to jest.mock(), Jest replaces the module with a mock implementation. 
// Here, we're providing a manual mock implementation directly inline with jest.mock().

// The () => () => <div>Mock ExpenseListFilters</div> function is an arrow function that returns another arrow function. 
// This inner arrow function is a functional component that simply returns a <div> element with the text "Mock ExpenseListFilters". 
//This is a mock implementation of the ExpenseListFilters component.

jest.mock("../../components/ExpenseListFilters", () => () => <div>Mock ExpenseListFilters</div>);
jest.mock("../../components/ExpenseList", () => () => <div>Mock ExpenseList</div>);

test("should render the dashboard page", () => {
    const store = configureStore();
    const {container} = render(
        <Provider store={store}>
            <MemoryRouter>
                <ExpenseDashboardPage/>
            </MemoryRouter>
        </Provider>
    );
    expect(container).toMatchSnapshot();
});
