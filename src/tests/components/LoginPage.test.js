import React from "react"; 
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginPage from "../../components/LoginPage";
import { Provider } from "react-redux";
import configureStore from "../../store/configureStore";

const store = configureStore();

jest.mock('firebase/auth', () => ({
    GoogleAuthProvider: jest.fn(() => ({
      setCustomParameters: jest.fn(),
    })),
    getAuth: jest.fn(() => ({})),
}));

test("Should render the login page correctly", () => {
    const {container} = render(<Provider store={store}><LoginPage/></Provider>)
    expect(container).toMatchSnapshot();
});

// test("Should call startLogin on button click", () => {
//   const startlogin = jest.fn();
//   const {getByText} = render(<Provider store={store}><LoginPage startLogin={startlogin}/></Provider>)
//   const btn = fireEvent.click(getByText("LOGIN"));
//   expect(startlogin).toHaveBeenCalled();
// })