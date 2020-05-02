import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class RedditApp extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts('nodejs'));
  }

  render() {
    const { posts, isFetching, lastUpdated } = this.props;

    return <div>{
      posts.map(post => (
        <h4>{post.title}</h4>
      ))
    }</div>;
  }
}

RedditApp.propTypes = {
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { isFetching, lastUpdated, items: posts } = state;

  return {
    posts: posts || [],
    isFetching: isFetching || false,
    lastUpdated,
  };
}

export default connect(mapStateToProps)(RedditApp);
