import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from './action'
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
        this.props.addMessage(this.state.value);
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

const mapDispatchToProps = dispatch => (
    {
        addMessage: (message) => {
            dispatch(addMessage(message))
        }
    }
);

export default connect(null, mapDispatchToProps)(MessageInput);
