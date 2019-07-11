import React from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class ChannelIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.channels.length === undefined) return null;
    
        const channels = this.props.channels.map(channel => <Link to={`/workspaces/${this.props.workspaceId}/channels/${channel.id}`} key={channel.id}><div>{channel.name}</div></Link> )
        return(
            <div>
                Channel Index:
                <ul>
                    {channels}
                </ul>
            </div>
        )
    }
} 

const channelSelector = (state, ownProps) => {
    const workspaceId = ownProps.match.params.workspaceId;
    const channels = Object.values(state.entities.channels);
    return channels.filter(c => c.workspaceId == workspaceId);
}

const msp = (state, ownProps) => ({
    channels: channelSelector(state, ownProps)
})

const mdp = dispatch => ({

})

export default withRouter(connect(msp, mdp)(ChannelIndex));