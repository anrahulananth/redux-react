import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { appState } from './store';
import { Thread } from './Thread';

const store = createStore(appState, applyMiddleware(thunk, logger));

const App = () => (
    <Provider store={store}>
        <Thread />
    </Provider>
);

export default App;
