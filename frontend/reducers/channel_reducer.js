import { RECEIVE_WORKSPACES } from '../actions/workspace_actions';

const channelReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_WORKSPACES:
            return Object.assign({}, state, action.payload.channels);
        default:
            return state;
    }
}

export default channelReducer;