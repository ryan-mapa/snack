import React from 'react';
import Cable from 'actioncable';

class Listener extends React.Component {
    constructor(props) {
        super(props);
        this.createSocket = this.createSocket.bind(this);
    }

    componentDidMount() {
        if (this.props.channelId) {
            this.createSocket(this.props.channelId);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.channelId !== prevProps.channelId) {
            if (this.props.channelId) {
                this.createSocket(this.props.channelId);
            }
        }
    }

    createSocket(id) {
        console.log("Running create socket");
        // let cable = Cable.createConsumer("ws://localhost:3000/cable");
        // if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        //     cable = Cable.createConsumer("ws://localhost:3000/cable");
        // } else {
        //     cable = Cable.createConsumer("wss://cluck-cluck.herokuapp.com/cable");
        // }
        // this.chats = cable.subscriptions.create( // no longer need this and line 26 (let cable...) with below App.cable from cable.js
        this.chats = App.cable.subscriptions.create(
        // this.chats = App.cable.subscriptions.create( //App comes from cable.js (rails)
            {
                channel: "MessageChannel",
                room: id
            },
            {
                connected: () => {
                    console.log(`Connected!! to ${id}`);
                },
                disconnected: () => {
                    console.log(`Disconnected!! from ${id}`);
                },
                received: data => {
                    let payload = {
                        messages: {
                            [data.message.id]: data.message
                        },
                        user: {
                            [data.user.id]: data.user
                        }
                    }
                    this.props.receiveMessage(payload);
                    // this.setState({cheese: "stringcheese"});
                }
            }               
        );
    }

    render() {
        return (
            <div>Listener</div>
        )
    }
}

export default Listener;