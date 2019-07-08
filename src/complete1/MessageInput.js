import React from 'react';
import { addMessage } from './action'
import store from './store'
class MessageInput extends React.Component {
    state = {
        value: '',
    };

    onChange = e => {
        this.setState({
            value: e.target.value,
        })
    };

    handleSubmit = () => {
        store.dispatch(addMessage(this.state.value));
        this.setState({
            value: '',
        });
    };

    render() {
        return (
            <div className='ui input'>
                <input
                    onChange={this.onChange}
                    value={this.state.value}
                    type='text'
                />
                <button
                    onClick={this.handleSubmit}
                    className='ui primary button'
                    type='submit'
                >
                    Submit
                </button>
            </div>
        );
    }
}

export default MessageInput;
