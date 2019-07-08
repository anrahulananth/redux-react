export const messagesReducer = (state = { messages: [] }, action) => {
    switch (action.type) {

        case 'FETCH_MESSAGES_SUCCESS':
            return {
                messages: action.messages
            };

        case 'FETCH_MESSAGES_FAILURE':
            return state;     

        case 'ADD_MESSAGE_SUCCESS':
            return {
                messages: state.messages.concat(action.newMessage),
            };

        case 'ADD_MESSAGE_FAILURE':
            return state;

        case 'DELETE_MESSAGE_SUCCESS':
            return {
                messages: state.messages.filter((m) => (
                    m.id !== action.id
                ))
            };

        case 'DELETE_MESSAGE_FAILURE':
            return state;

        default: return state;
    }
}

export const loaderReducer = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_LOADER': return true;

        case 'HIDE_LOADER': return false;
        
        default: return state;
    }
}