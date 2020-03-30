import React from 'react';
import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';
import { closeModal } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

class ChannelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
    }

    updateName(e) {
        e.preventDefault();
        this.setState({name: e.target.value});
    }

    updateDescription(e) {
        e.preventDefault();
        this.setState({description: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let channel = Object.assign({}, this.state);
        channel.workspace_id = this.props.workspaceId;
        this.props.createChannel(channel).then(() => this.props.closeModal());
    }

    render() {
        console.log('workspaceId: ', this.props.workspaceId);

        return (
            <div>
                <h2>MEK NEW CHANNEL</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:
                        <input type="text" onChange={this.updateName} value={this.state.name}/>
                    </label><br/>
                    <label>Description:
                        <input type="text" onChange={this.updateDescription} value={this.state.description}/>
                    </label><br/>

                    <input type="submit" value="Create New Channel"/>
                </form>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    return ({
        workspaceId: parseInt(ownProps.location.pathname.slice(12))
    })
}

const mdp = (dispatch) => ({
    createChannel: channel => dispatch(createChannel(channel)),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(msp, mdp)(ChannelForm));