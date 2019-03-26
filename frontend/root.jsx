import React from 'react';
import App from './components/app';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const Root = ({store}) => {
  return (
    <div>
      <Provider store={store}>
        <HashRouter >
          <App />
        </HashRouter>
      </Provider>
    </div>
  )
}

export default Root;
