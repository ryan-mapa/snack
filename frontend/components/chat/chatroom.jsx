import React from 'react';
import MessageFormConatainer from './messageFormContainer';
import MessageContainer from './messages/messageContainer';


class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { messages: this.props.messages };
        this.bottom = React.createRef();
        this.loadChat = this.loadChat.bind(this);
    }

    componentDidMount() {
        this.loadChat()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.channelId !== this.props.channelId) {
            this.loadChat();
            this.bottom.current.scrollIntoView();
            // this.setState({messages: []});
        }

        // if (prevProps.messages.length !== this.props.messages.length) {
            this.bottom.current.scrollIntoView();
        // }
    }

    loadChat(e) {
        // e.preventDefault();
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
                <h3>Chatroom: {this.props.channelId}</h3>
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