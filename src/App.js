import React from 'react';
import { Provider } from 'mobx-react';
import PostStore from './mobx';
import RedditApp from './containers';


function App() {
  return (
    <Provider postStore={new PostStore()}>
      <RedditApp />
    </Provider>
  );
}

export default App;
