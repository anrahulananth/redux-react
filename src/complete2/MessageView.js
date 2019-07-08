import React from 'react';
import { connect } from 'react-redux';
import { deleteMessage } from './action'
import Messages from './Messages'

class MessageView extends React.Component {
    handleClick = id => {
        this.props.deleteMessage(id)
    };

    render() {
        const {messages} = this.props;
        return (
            <div className='ui center aligned basic segment'>
                <div className='ui comments'>
                    <Messages messages={messages} onDeleteClick={this.handleClick}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {applicationState:{messages}}=state;
    return {
        messages: messages
    }
};

const mapDispatchToProps = dispatch => (
    {
        deleteMessage: (id) => {
            dispatch(deleteMessage(id));
        }
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(MessageView);
