import axios from 'axios';

const showLoader = (err) => ({
    type: 'SHOW_LOADER',
})

const hideLoader = (err) => ({
    type: 'HIDE_LOADER',
})

const fetchMessagesSuccess = (messages) => ({
    type: 'FETCH_MESSAGES_SUCCESS',
    messages
})

const fetchMessagesFailure = (err) => ({
    type: 'FETCH_MESSAGES_FAILURE',
})

const addMessageSuccess = (newMessage) => ({
    type: 'ADD_MESSAGE_SUCCESS',
    newMessage
})

const addMessageFailure = (err) => ({
    type: 'ADD_MESSAGE_FAILURE',
})

const deleteMessageSuccess = (id) => ({
    type: 'DELETE_MESSAGE_SUCCESS',
    id
})

const deleteMessageFailure = (err) => ({
    type: 'DELETE_MESSAGE_FAILURE',
})

export const fetchMessages = () => {
     return dispatch => {
        dispatch(showLoader())
        axios
          .get(`https://jsonplaceholder.typicode.com/comments?postId=1`)
          .then(res => {
            setTimeout(()=>{
                dispatch(fetchMessagesSuccess(res.data));
                dispatch(hideLoader())
            },10000);
          })
          .catch(err => {
            dispatch(fetchMessagesFailure(err.message));
            dispatch(hideLoader())
          });
         
    };
}

export const addMessage = ({email, body}) => {
    return dispatch => {
        dispatch(showLoader())
        axios
          .post(`https://jsonplaceholder.typicode.com/comments`, {
            name:'',
            email,
            body,
            postId: 1
          })
          .then(res => {
            setTimeout(()=>{
                dispatch(addMessageSuccess(res.data));
                dispatch(hideLoader())
            },2500);
          })
          .catch(err => {
            dispatch(addMessageFailure(err.message));
            dispatch(hideLoader())
          });
    };
}

export const deleteMessage = (id) => {
    return dispatch => {
        dispatch(showLoader())
        axios
          .delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
          .then(res => {
            setTimeout(()=>{
                dispatch(deleteMessageSuccess(id));
                dispatch(hideLoader())
            },2500);
          })
          .catch(err => {
            dispatch(deleteMessageFailure(err.message));
            dispatch(hideLoader())
          });
    };
}