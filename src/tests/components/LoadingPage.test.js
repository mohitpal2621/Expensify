import React from "react";
import { render } from "@testing-library/react";
import LoadingPage from "../../components/LoadingPage";

test("Should render the loading page", () => {
    const {container} = render(<LoadingPage/>);
    expect(container).toMatchSnapshot();

})