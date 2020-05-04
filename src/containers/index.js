import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, dismissAll } from '../actions';
import './style.css';

import Sidebar from './sidebar';
import Home from './home';

function RedditApp(props) {
  const { posts, postSelected, isFetching, dispatch } = props;
  useEffect(() => {
    dispatch(fetchPosts('reactjs'));
  }, []);

  function onDismissAllClick() {
    dispatch(dismissAll());
  }

  return (
    <div className="main-container">
      <Sidebar posts={posts} isFetching={isFetching} />
      <div>
        {!!posts.length && (
          <button onClick={onDismissAllClick} className="dismiss-all-button">
            Dismiss All
          </button>
        )}
        <h1 className="app-title">CloneReddit</h1>
        {postSelected && <Home post={postSelected} />}
      </div>
    </div>
  );
}

RedditApp.propTypes = {
  posts: PropTypes.array.isRequired,
  postSelected: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { isFetching, lastUpdated, items: posts, postSelected } = state;

  return {
    posts: posts || [],
    isFetching: isFetching || false,
    postSelected: postSelected || null,
    lastUpdated,
  };
}

export default connect(mapStateToProps)(RedditApp);
