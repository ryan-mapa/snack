import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './root';

document.addEventListener('DOMContentLoaded', () => {
  
  const user = window.currentUser;
  window.currentUser = undefined;
  
  let preloadedState;
  if (user) {
    preloadedState = {
      entities: {
        users: {
          [user.id]: user
        }
      },
      session: {currentUser: user.id}
    };
  } else {
    preloadedState = {};
  }

  const store = configureStore(preloadedState);
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

})
