import React from 'react';
import Cable from 'actioncable';

class Listener extends React.Component {
    constructor(props) {
        super(props);

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
                            user: data.user
                        }
                        this.props.receiveMessage(payload);
                    // }
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