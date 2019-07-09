import React from 'react';
import Cable from 'actioncable';

class Listener extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cheese: ""
        }
        this.createSocket = this.createSocket.bind(this);
    }

    componentDidMount() {
        this.createSocket(1);
    }

    createSocket(id) {
        console.log("Running create socket");
        let cable = Cable.createConsumer("ws://localhost:3000/cable");
        // if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        //     cable = Cable.createConsumer("ws://localhost:3000/cable");
        // } else {
        //     cable = Cable.createConsumer("wss://cluck-cluck.herokuapp.com/cable");
        // }
        this.chats = cable.subscriptions.create(
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
                    
                    // console.log(data);
                    // if (data.added) {
                    //     // if (data.userIds.includes(parseInt(this.props.currentUser))) {
                    //         this.createSocket(data.chatroomId);
                    //         this.props.fetchChatroom(data.chatroomId);
                    //     // }
                    // } else {
                        console.log("data come thru");
                        console.log(data);
                        
                        let payload = {
                            message: {
                                [data.message.id]: data.message
                            },
                            user: {
                                [data.user.id]: data.user
                            }
                        }
                        this.props.receiveMessage(payload);
                        this.setState({cheese: "stringcheese"});
                    // }
                }
            }               
        );
    }

    render() {
        console.log(this.state.cheese);
        return (
            <div>Listener</div>
        )
    }
}

export default Listener;