import React from 'react';

class MesssageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: "" }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].speak({message: this.state.body });
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