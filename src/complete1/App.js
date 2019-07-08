import React from 'react';
import Thread from './Thread';
import store from './store'

class App extends React.Component{
    componentDidMount(){
        store.subscribe(()=>this.forceUpdate());
    }
    render(){
        const state = store.getState();
        const {applicationState:{messages}} = state;
        return <Thread messages={messages} />
    }
}

export default App;
