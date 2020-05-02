import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import './style.css';

import Sidebar from './sidebar';
import HomePost from './home-post';

class RedditApp extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts('node'));
  }

  render() {
    const { posts, postSelected, isFetching, lastUpdated } = this.props;

    return (
      <div className="main-container">
        <Sidebar posts={posts} />
        <div>
          <h1>CloneReddit</h1>
          <HomePost post={postSelected} />
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
