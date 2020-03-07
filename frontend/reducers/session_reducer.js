import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

const sessionReducer = (state = {currentUser: null}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case LOGOUT_CURRENT_USER:
            return { currentUser: null };
        case RECEIVE_CURRENT_USER:
            const currentUser = action.payload.user;
            return { currentUser: Object.keys(action.payload.users)[0] };
        default:
            return state;
    }
}

export default sessionReducer;