import React from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import NewItemButton from '../utils/newItemButton';
import ChannelIndexItem from './channelIndexItem';

class ChannelIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.channels.length === undefined) return null;
    
        const channels = this.props.channels.map(channel => 
                                <ChannelIndexItem 
                                    key={channel.id}
                                    workspaceId={this.props.workspaceId} 
                                    channel={channel} />)
        return(
            <div>
                Channel Index: <NewItemButton type='channel' data={this.props.workspaceId} />
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
    channels: channelSelector(state, ownProps),
})

const mdp = dispatch => ({

})

export default withRouter(connect(msp, mdp)(ChannelIndex));