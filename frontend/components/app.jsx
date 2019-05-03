import React from 'react';
import NavContainer from './nav/nav_container';
import ModalContainer from './modal/modal_container';
import ChatroomContainer from './chat/chatroomContainer';

const App = () => (
  <div>
    <NavContainer />
    <br/>
    <ModalContainer />

    <ChatroomContainer />
  </div>
)

export default App;
