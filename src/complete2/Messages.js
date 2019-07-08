import React from 'react';
const Messages = (props) => {
    if (props.messages && props.messages.length) {
        return (
            <div>
                {
                    props.messages.map((message, index) => (
                        <div
                            className='comment'
                            key={index}
                            onClick={() => props.onDeleteClick(message.id)} // Use `id`
                        >
                            <div className='text'> {/* Wrap message data in `div` */}
                                {message.text}
                                <span className='metadata'>@{message.timestamp}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
    return (
        <div></div>
    );
}

export default Messages;


