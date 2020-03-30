import React from 'react';
import { Link } from 'react-router-dom';
import NewItemButton from '../utils/newItemButton';

class ChannelIndexItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const channel = this.props.channel;
        return (
            <div className="channel-item" >
                <Link
                    to={`/workspaces/${this.props.workspaceId}/channels/${channel.id}`}
                    key={channel.id}><div>{channel.name}</div>
                </Link>
                <NewItemButton type="addChannelUser" />
            </div>
        )
    }
}

export default ChannelIndexItem;