import React from 'react';
import { Provider } from 'react-redux';
import Thread  from './Thread';
import store from './store'

const App = () => (
    <Provider store={store}>
        <Thread />
    </Provider>
);

export default App;
