import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import messagesReducer from './messages_reducer';
import channelsReducer from './channel_reducer';
import workspacesReducer from './workspaces_reducer';
import channelUsersReducer from './channe_users_reducer';

export default combineReducers({
    users: usersReducer,
    messages: messagesReducer,
    channels: channelsReducer,
    channelUsers: channelUsersReducer,
    workspaces: workspacesReducer
})
