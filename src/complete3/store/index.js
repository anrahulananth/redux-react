import { messagesReducer, loaderReducer } from '../reducer';
import { combineReducers } from 'redux';

const reducers = {
    applicationState: messagesReducer,
    showLoader: loaderReducer
}

export const appState = combineReducers(reducers);