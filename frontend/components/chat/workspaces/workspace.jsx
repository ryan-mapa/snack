import React from 'react';
import { connect } from 'react-redux';
import ChannelIndex from '../channel_index_container'
import { fetchWorkspace } from '../../../actions/workspace_actions'

class Workspace extends React.Component {
    componentDidMount() {
        this.props.fetchWorkspace(this.props.match.params.workspaceId)
    }

    render() {
        return (
            <div>Workspace show:
                <ChannelIndex workspaceId={this.props.match.params.workspaceId}/>
            </div>
        )
    }
}

const msp = (state, ownProps) => ({

})

const mdp = dispatch => ({
    fetchWorkspace: (id) => dispatch(fetchWorkspace(id))
})

export default connect(msp, mdp)(Workspace);