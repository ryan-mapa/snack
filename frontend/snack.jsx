import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './root';

document.addEventListener('DOMContentLoaded', () => {
  
  const userInfo = window.currentUser;
  window.currentUser = undefined;
  
  let preloadedState;
  if (userInfo) {
    preloadedState = {
      entities: {
        users: userInfo.users,
        channelUsers: userInfo.channelUsers
      },
      session: { currentUser: Object.keys(userInfo.users)[0]}
    };
  } else {
    preloadedState = {};
  }

  const store = configureStore(preloadedState);
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

})
