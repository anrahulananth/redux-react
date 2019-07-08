import React from 'react';
import MessageInput from './MessageInput';
import MessageView from './MessageView';

export const Thread = () => (
    <div className='ui segment'>
        <MessageView />
        <MessageInput />
    </div>
);
 