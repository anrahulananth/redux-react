import React from 'react';
import MessageInput from './MessageInput';
import MessageView from './MessageView';

const Thread = (props) => {
    return (
        <div className='ui segment'>
            <MessageView messages={props.messages}/>
            <MessageInput />
        </div>
    );
};

// const Thread = props => (
//     <div className='ui segment'>
//         <MessageView messages={props.messages} store={props.store} />
//         <MessageInput store={props.store} />
//     </div>
// );
export default Thread