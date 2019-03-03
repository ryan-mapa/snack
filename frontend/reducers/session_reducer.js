import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

const sessionReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case LOGOUT_CURRENT_USER:
            return { currentUser: null };
        case RECEIVE_CURRENT_USER:
            const currentUser = action.user;
            return { currentUser: Object.keys(action.user)[0] };
        default:
            return state;
    }
}

export default sessionReducer;