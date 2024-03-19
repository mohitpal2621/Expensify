import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Header from '../../components/Header';

test("Should render Header correctly", () => {
    const { container } = render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
});
