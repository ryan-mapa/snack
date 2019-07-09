import React from 'react';
import NavContainer from './nav/nav_container';
import ModalContainer from './modal/modal_container';
import ChatroomContainer from './chat/chatroomContainer';
import ListenerContainer from './chat/listenerContainer';
import ChannelIndex from './chat/channel_index_container';
import WorkspaceIndex from './chat/workspaces/workspace_container';

const App = () => (
  <div>
    <NavContainer />
    <br/>
    <ModalContainer />
    <WorkspaceIndex />
    <ChannelIndex />
    <ListenerContainer />
    <ChatroomContainer />
  </div>
)

export default App;
