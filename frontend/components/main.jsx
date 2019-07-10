import React from 'react';
import {Route} from 'react-router-dom';
import Workspace from '../components/chat/workspaces/workspace';
import ChatroomContainer from '../components/chat/chatroomContainer';
import WorkspaceIndex from './chat/workspaces/workspace_index_container';

const Main = (props) => (
    <div>
        Main
        <WorkspaceIndex />
        
    </div>
)

export default Main;