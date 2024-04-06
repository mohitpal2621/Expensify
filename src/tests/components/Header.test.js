import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Header from '../../components/Header';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import { startLogout } from '../../actions/auth';

let store;

beforeEach(() => {
    store = configureStore(); // Use your actual store configuration
});

jest.mock('../../actions/auth.js', () => ({
    startLogout: jest.fn(),
}));

// jest.mock('firebase/auth', () => ({
//     getAuth: jest.fn(() => ({
//       signOut: jest.fn(),
//     })),
//     GoogleAuthProvider: jest.fn().mockImplementation(() => ({
//         setCustomParameters: jest.fn(),
//     })),
// }));

test("Should render Header correctly", () => {
    const { container } = render(
        <Provider store={store}>
            <MemoryRouter>
                <Header startLogout={() => {}}/>
            </MemoryRouter>
        </Provider>
    );
    expect(container).toMatchSnapshot();
});

// test("Should call startLogout on button click", async () => {
//     const startLogoutMock = jest.fn(); // Mock the startLogout action creator

//     const { getByText } =  render(
//         <Provider store={store}>
//             <MemoryRouter>
//                 <Header startLogout={startLogoutMock} />
//             </MemoryRouter>
//         </Provider>
//     );

//     fireEvent.click(getByText("Log Out")); // Simulate button click

//     await expect(startLogoutMock).toHaveBeenCalled(); // Assert that startLogout was called
// });