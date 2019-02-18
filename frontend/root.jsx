import React from 'react';
import App from './components/app';
import { Provider } from 'react-redux';

const Root = ({store}) => {
  return (
    <div>
      <Provider store={store}>
        <div>
          <h2>I am gRoooooooot</h2>
          <App />
        </div>
      </Provider>
    </div>
  )
}

export default Root;
