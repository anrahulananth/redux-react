import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from './action'
class MessageInput extends React.Component {
    state = {
        email: '',
        body:'',
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleSubmit = () => {
        this.props.addMessage(this.state);
        this.setState({
            email: '',
            body: ''
        });
    };

    render() {
        return (
            <div className='ui input'>
                 <input
                    onChange={this.onChange}
                    value={this.state.body}
                    name='body'
                    type='text'
                    placeholder='Body'
                />
                <input
                    onChange={this.onChange}
                    value={this.state.email}
                    name='email'
                    type='text'
                    placeholder='Email'
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
