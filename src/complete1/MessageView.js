import React from 'react';
import { deleteMessage } from './action';
import store from './store'
import Messages from './Messages'

class MessageView extends React.Component {
    handleClick = id => {
        store.dispatch(deleteMessage(id));
    };

    render() {
        const {messages}=this.props;
        return (
            <div className='ui center aligned basic segment'>
                <div className='ui comments'>
                    <Messages messages={messages} onDeleteClick={this.handleClick}/>
                </div>
            </div>
        );
    }
}

export default MessageView;
