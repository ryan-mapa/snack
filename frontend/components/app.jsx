import React from 'react';
import NavContainer from './nav/nav_container';
import ModalContainer from './modal/modal_container';
import ChatroomContainer from './chat/chatroomContainer';
import ListenerContainer from './chat/listenerContainer';

const App = () => (
  <div>
    <NavContainer />
    <br/>
    <ModalContainer />

    <ListenerContainer />
    <ChatroomContainer />
  </div>
)

export default App;
