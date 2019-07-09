import React from 'react';
import { connect } from 'react-redux';
import { fetchWorkspaces } from './../../../actions/workspace_actions'

class WorkspaceIndex extends React.Component {

    componentDidMount() {
        this.props.fetchWorkspaces(this.props.currentUserId);
    }

    render() {
        return (
            <div>
                workspaceIndexo
            </div>
        )
    }
}


const msp = state => ({
    workspaces: state.entities.workspaces,
    currentUserId: state.session.currentUser
})

const mdp = dispatch => ({
    fetchWorkspaces: (userId) => dispatch(fetchWorkspaces(userId))
})

export default connect(msp, mdp)(WorkspaceIndex);