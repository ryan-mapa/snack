import { RECEIVE_MESSAGES } from '../actions/message_actions';

const MessagesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_MESSAGES:
            return action.messages;
        default:
            return state;
    }
}

export default MessagesReducer;