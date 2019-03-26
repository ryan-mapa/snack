import React from 'react';
import NavContainer from './nav/nav_container';
import ModalContainer from './modal/modal_container';
import ChatRoom from './chat/chatroom';

const App = () => (
  <div>
    <NavContainer />
    <br/>
    <ModalContainer />

    <ChatRoom />
  </div>
)

export default App;
