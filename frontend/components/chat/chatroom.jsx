import React from 'react';
import MessageFormConatainer from './messageFormContainer';
import MessageContainer from './messages/messageContainer';


class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] };
        this.bottom = React.createRef();
    }

    componentDidMount() {
    }

    componentDidUpdate() {
        this.bottom.current.scrollIntoView();
    }

    loadChat(e) {
        e.preventDefault();
        // App.cable.subscriptions.subscriptions[0].load();
        this.props.getMessages(this.props.channelId);
    }

    render() {
        const messageList = this.props.messages.map(message => {
            return (
                <div className="message-text" key={ message.id }>
                    <MessageContainer message={message} />
                </div>
            )
        })

        return (
            <div className="chatroom-container">
                <h3>Chat Room</h3>
                <button className="load-button" 
                onClick={this.loadChat.bind(this)}>
                    Load Chat History
                </button>
                <div className="message-list">
                    {messageList}
                    <div ref={this.bottom} />
                </div>
                <MessageFormConatainer currentUser={this.props.currentUser} />
            </div>
        );       
    }
}

export default ChatRoom;