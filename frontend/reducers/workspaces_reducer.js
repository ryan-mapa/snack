import { RECEIVE_WORKSPACES, RECEIVE_WORKSPACE } from './../actions/workspace_actions';

const workspacesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_WORKSPACES:
            return Object.assign({}, state, action.payload.workspaces);
        case RECEIVE_WORKSPACE:
            return Object.assign({}, state, action.payload.workspaces);
        default:
            return state;
    }
}

export default workspacesReducer;