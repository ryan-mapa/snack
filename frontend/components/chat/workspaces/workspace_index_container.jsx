import React from 'react';
import { connect } from 'react-redux';
import { fetchWorkspaces } from '../../../actions/workspace_actions'
import { Link, Redirect } from 'react-router-dom';

class WorkspaceIndex extends React.Component {
    componentDidMount() {
        this.props.fetchWorkspaces(this.props.currentUserId);
    }

    render() {
        if (this.props.workspaces.length === 0) return null;
        const workies = this.props.workspaces.map(workspace => <Link to={`/workspaces/${workspace.id}`} key={workspace.id}>{workspace.name}</Link>)

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