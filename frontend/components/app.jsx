import React from 'react';
import NavContainer from './nav/nav_container';
import ModalContainer from './modal/modal_container';
import ChatroomContainer from './chat/chatroomContainer';
import ListenerContainer from './chat/listenerContainer';
import { AuthRoute } from '../util/route_utils'
import Workspace from '../components/chat/workspaces/workspace';
import { Route } from 'react-router-dom';
import Main from '../components/main';
import ChatWidget from '../components/chat/workspaces/chatWidget';

const App = () => (
  <div>
    <ModalContainer />
    <div className='app-container' > 
      <div className='side-nav' >
        <NavContainer className='nav-container' />
        <div className='inner-side-nav' >
          <div>
            <ListenerContainer />
            {/* <Route path="/workspaces/:workspaceId/channels/:channelId" component={ListenerContainer} /> */}
            <AuthRoute path="/" component={Main}/>
            <Route path="/workspaces/:workspaceId" component={Workspace} />
          </div>

          <ChatWidget />
        </div>
      </div>

      <Route path="/workspaces/:workspaceId/channels/:channelId" component={ChatroomContainer} />
    </div>
  </div>
)

export default App;
