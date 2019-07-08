import React from 'react';
import MessageInput from './MessageInput';
import MessageView from './MessageView';

const Thread = () => (
    <div className='ui segment'>
        <MessageView />
        <MessageInput />
    </div>
);
export default Thread;
 