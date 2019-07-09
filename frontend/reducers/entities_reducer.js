import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import messagesReducer from './messages_reducer';
import channelReducer from './channel_reducer';

export default combineReducers({
    users: usersReducer,
    messages: messagesReducer,
    channels: channelReducer
})