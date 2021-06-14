import {fireEvent, render} from '@testing-library/react';

import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Home";
import userEvent from '@testing-library/user-event';
import {within} from '@testing-library/dom';

test('renders all text of todo form correctly ', () => {
    const { getByText, get} = render(<Home/>);
    const movie = getByText("Movies");
    const show = getByText("Shows")
    expect(show).toReturn;
})
