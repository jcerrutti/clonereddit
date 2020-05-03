import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import './style.css';

import Sidebar from './sidebar';
import Home from './home';

class RedditApp extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts('reactjs'));
  }

  render() {
    const { posts, postSelected, isFetching } = this.props;

    return (
      <div className="main-container">
        <Sidebar posts={posts} isFetching={isFetching} />
        <div>
          <h1 className="app-title">CloneReddit</h1>
          {postSelected && <Home post={postSelected} />}
        </div>
      </div>
    );
  }
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
