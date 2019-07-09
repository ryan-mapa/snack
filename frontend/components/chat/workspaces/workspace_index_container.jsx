import React from 'react';
import { connect } from 'react-redux';
import { fetchWorkspaces } from '../../../actions/workspace_actions'

class WorkspaceIndex extends React.Component {

    componentDidMount() {
        this.props.fetchWorkspaces(this.props.currentUserId);
    }

    render() {
        if (this.props.workspaces.length === 0) return null;
        const workies = this.props.workspaces.map(workspace => <li key={workspace.id}>{workspace.name}</li>)

        return (
            <div>
                <p>workspaceIndexo</p>
                <ul>
                    {workies}
                </ul>
            </div>
        )
    }
}


const msp = state => ({
    workspaces: Object.values(state.entities.workspaces),
    currentUserId: state.session.currentUser
})

const mdp = dispatch => ({
    fetchWorkspaces: (userId) => dispatch(fetchWorkspaces(userId))
})

export default connect(msp, mdp)(WorkspaceIndex);