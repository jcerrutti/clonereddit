import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import RedditApp from './containers';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <RedditApp />
    </Provider>
  );
}

export default App;
