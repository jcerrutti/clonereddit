import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import './style.css';
import Sidebar from './sidebar';
import Home from './home';

function RedditApp({ postStore }) {
  const { postSelected, posts, subreddit } = postStore;
  const [selectedSubreddit, setSelectedSubreddit] = useState(subreddit);
  useEffect(() => {
    searchPosts();
  }, [postStore]);

  function onDismissAllClick() {
    postStore.cleanPostList();
  }

  function searchPosts() {
    postStore.getPosts(selectedSubreddit);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    searchPosts();
  }

  return (
    <div className="main-container">
      <Sidebar />
      <div>
        <nav className="navbar">
          {!!posts.length && (
            <button onClick={onDismissAllClick} className="dismiss-all-button">
              Dismiss All
            </button>
          )}
          <form onSubmit={onFormSubmit}>
            <label htmlFor="subreddit">Subreddit</label>
            <input
              name="subreddit"
              id="subreddit"
              value={selectedSubreddit}
              type="text"
              onChange={(event) => setSelectedSubreddit(event.target.value.trim())}
            />
            <input type="submit" value="Search!" />
          </form>
        </nav>
        <h1 className="app-title">CloneReddit</h1>
        {postSelected && <Home post={postSelected} />}
      </div>
    </div>
  );
}

RedditApp.propTypes = {
  postStore: PropTypes.object,
};

export default inject(({ postStore }) => ({ postStore }))(observer(RedditApp));
