import React from "react";
import { render, screen } from '@testing-library/react';
import NotFound from "../../components/NotFound";
import { MemoryRouter } from "react-router-dom";


test("Should reender NOTFOUND", () => {
    const {container} = render(<MemoryRouter><NotFound/></MemoryRouter>);
    expect(container).toMatchSnapshot();
})