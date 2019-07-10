import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class ChannelIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.channels.length === undefined) return null;
    
        const channels = this.props.channels.map(channel => <Link to={`/workspaces/${this.props.workspaceId}/channels/${channel.id}`} key={channel.id}>channel: {channel.name}</Link> )
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


const msp = state => ({
    channels: Object.values(state.entities.channels)
})

const mdp = dispatch => ({

})

export default connect(msp, mdp)(ChannelIndex);