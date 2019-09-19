import { RECEIVE_WORKSPACES, RECEIVE_WORKSPACE } from '../actions/workspace_actions';

const chatUiReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WORKSPACES:
            return Object.assign({}, state, action.payload.channels);
        case RECEIVE_WORKSPACE:
            return Object.assign({}, state, action.payload.channels);
        default:
            return state;
    }
}

export default chatUiReducer;