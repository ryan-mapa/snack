import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from '../actions/message_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_MESSAGE:
            return Object.assign({}, state, action.payload.user);
        case RECEIVE_MESSAGES:
            return Object.assign({}, state, action.payload.users);
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.user)
        default:
            return state;
    }
}

export default usersReducer;