import React from 'react';

class MesssageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        let input = this.state;
        input.channel_id = this.props.channelId;
        this.props.createMessage(input);
        this.setState({ body: "" });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        className="message-input"
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder="type message here!"
                    />
                    <input type="submit" className="hidden-button"/>
                </form>
            </div>
        );
    }
}

export default MesssageForm;