import React from 'react';
import MessageForm from './messageform';

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] };

        // Not sure what this line does.
        this.bottom = React.createRef();
    }

    componentDidMount() {
        App.cable.subscriptions.create(
            { channel: "ChatChannel" },
            {
                received: data => {
                    switch(data.type) {
                        case "message":
                            this.setState({messages: this.state.messages.concat(data.message)});
                            break;
                        case "messages":
                            this.setState({messages: data.messages });
                            break;
                    }
                },
                // received: data => {
                //     this.setState({
                //         messages: this.state.messages.concat(data.message)
                //     });
                // },
                speak: function(data) {return this.perform('speak', data)},
                load: function() {return this.perform("load")}
            }
        )
    }

    componentDidUpdate() {
        this.bottom.current.scrollIntoView();
    }

    loadChat(e) {
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].load();
    }

    render() {
        const messageList = this.state.messages.map(message => {
            return (
                <div className="message-text" key={ message.id }>
                    {message}
                    <div ref={this.bottom} />
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
                <div className="message-list">{messageList}</div>
                <MessageForm />
            </div>
        );       
    }


}

export default ChatRoom;