import { messagesReducer } from '../reducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const reducers = {
    applicationState: messagesReducer
}

const appState = combineReducers(reducers);

const store = createStore(appState, applyMiddleware(logger));

export default store;