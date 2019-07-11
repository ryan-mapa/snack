import React from 'react';
import NavContainer from './nav/nav_container';
import ModalContainer from './modal/modal_container';
import ChatroomContainer from './chat/chatroomContainer';
import ListenerContainer from './chat/listenerContainer';
import ChannelIndex from './chat/channel_index_container';
import WorkspaceIndex from './chat/workspaces/workspace_index_container';
import { AuthRoute } from '../util/route_utils'
import Workspace from '../components/chat/workspaces/workspace';
import { Route } from 'react-router-dom';
import Main from '../components/main';

const App = () => (
  <div>
    <NavContainer />
    <br/>
    <ModalContainer />
    {/* <ChannelIndex /> */}
    <Route path="/workspaces/:workspaceId/channels/:channelId" component={ListenerContainer} />
    {/* <ListenerContainer /> */}
    <AuthRoute path="/" component={Main}/>
    {/* <ChatroomContainer /> */}
    {/* <WorkspaceIndex /> */}
    <Route path="/workspaces/:workspaceId" component={Workspace} />
    <Route path="/workspaces/:workspaceId/channels/:channelId" component={ChatroomContainer} />

    {/* <Route path="/workspaces/:workspaceId" component={Workspace} />
    <Route path="/workspaces/:workspaceId/channels/:channelId" component={ChatroomContainer} /> */}
  </div>
)

export default App;
