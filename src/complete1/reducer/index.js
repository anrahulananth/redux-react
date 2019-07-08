import uuid from 'uuid';

export const messagesReducer = (state = { messages: [] }, action) => {
    switch (action.type) {

        case 'ADD_MESSAGE':
            const newMessage = {
                text: action.text,
                timestamp: Date.now(),
                id: uuid.v4(),
            };
            return {
                messages: state.messages.concat(newMessage),
            };

        case 'DELETE_MESSAGE': 
            return {
                messages: state.messages.filter((m) => (
                    m.id !== action.id
                ))
            };

        default: return state;
    }
}