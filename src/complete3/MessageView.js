import React from 'react';
import { connect } from 'react-redux';
import { deleteMessage, fetchMessages } from './action'
import Messages from './Messages'
import Loader from './Loader';

class MessageView extends React.Component {
    handleClick = id => {
        this.props.deleteMessage(id);
    };

    componentDidMount(){
        this.props.fetchMessages();
    }

    render() {
        const {messages, showLoader} = this.props;
        return (
            <div className='ui center aligned basic segment'>
                <div className='ui comments'>
                    {showLoader?<Loader/>:<Messages messages={messages} onDeleteClick={this.handleClick}/>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {applicationState:{messages}, showLoader} = state;
    return {
        messages: messages,
        showLoader
    }
};

const mapDispatchToProps = dispatch => (
    {
        deleteMessage: (id) => {
            dispatch(deleteMessage(id));
        },
        fetchMessages: () => {
            dispatch(fetchMessages());
        }
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(MessageView);
