import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import messagesReducer from './messages_reducer';

export default combineReducers({
    users: usersReducer,
    messages: messagesReducer
})