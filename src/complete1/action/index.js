export const addMessage = (newMessage) => {
    return {
        type: 'ADD_MESSAGE',
        text: newMessage
    } 
}

export const deleteMessage = (id) => {
    return {
        type: 'DELETE_MESSAGE',
        id: id
    } 
}