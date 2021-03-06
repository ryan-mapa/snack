import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';

const MessagesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_MESSAGES:
            return Object.assign({}, state, action.payload.messages);
        case RECEIVE_MESSAGE:
            return Object.assign({}, state, action.payload.messages);
        default:
            return state;
    }
}

export default MessagesReducer;