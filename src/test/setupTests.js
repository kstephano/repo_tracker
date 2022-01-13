import React from 'react';

import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleWare } from 'redux';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';

//need below?

import searchReducer from './redux/searchReducer'

const TestProviders = ({ initState }) => {
    initState ||= { 
        user: "", 
        result: { repos: [], user: {
            avatar_url: "",
            login: "",
            email: ""
        } }, 
        loading: false 
    };
    let testReducer = () => searchReducer(initState, { type: '@@INIT' });
    const testStore = createStore(testReducer, applyMiddleware(thunk));

    return ({ children }) => (
        <Provider store={testStore}>
            { children }
        </Provider>
    )
}

const renderWithReduxProvider = (ui, options={}) => {
    let TestWrapper = TestProviders(options);
    render(ui, { wrapper: TestWrapper, ...options });
}

import axios from 'axios';
jest.mock('axios')
axios.get.mockResolvedValue({ 
    email: "kstephano@gmail.com", 
    html_url: "https://github.com/kstephano",
    avatar_url: "https://avatars.githubusercontent.com/u/45729162?v=4",
    login: "kstephano"
});

global.renderWithReduxProvider = renderWithReduxProvider;
global.React = React;
global.render = render;
global.userEvent = userEvent;