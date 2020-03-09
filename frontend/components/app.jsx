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
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {listening: true};
    this.closeListener = this.closeListener.bind(this);
  }

  closeListener(e) {
    this.setState({listening: !this.state.listening})
  }

  render() {
    return (
      <div>
        <ModalContainer />
        <div className='app-container' > 
          <div className='side-nav' >
            <NavContainer className='nav-container' />
            <div className='inner-side-nav' >
              <div>
                {this.state.listening ? <ListenerContainer /> : null}
                {/* <Route path="/workspaces/:workspaceId/channels/:channelId" component={ListenerContainer} /> */}
                <AuthRoute path="/" component={Main}/>
                <Route path="/workspaces/:workspaceId" component={Workspace} />
                <button onClick={this.closeListener}>Toggle Listener</button>
              </div>
    
              <ChatWidget />
            </div>
          </div>
    
          <Route path="/workspaces/:workspaceId/channels/:channelId" component={ChatroomContainer} />
        </div>
      </div>
    )
  }
}

export default App;
