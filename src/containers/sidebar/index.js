import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PostList from '../../components/post-list';
import LoadingSpinner from '../../components/loading-spinner';
import { selectPost, dismissPost, fetchPosts } from '../../actions';
import './style.css';

function Sidebar({ posts, dispatch, postSelected, isFetching, subreddit }) {
  function postClicked(post) {
    dispatch(selectPost(post));
  }

  function postDismissed(post) {
    dispatch(dismissPost(post));
  }

  function onRefreshAllClick() {
    dispatch(fetchPosts(subreddit));
  }

  return (
    <aside>
      {!isFetching ? (
        posts.length ? (
          posts.map((post) => (
            <PostList
              isSelected={postSelected.id === post.id}
              onDismissPost={postDismissed}
              onClickHandler={postClicked}
              key={post.id}
              post={post}
            />
          ))
        ) : (
          <button onClick={onRefreshAllClick} className="refresh-button">
            Refresh List
          </button>
        )
      ) : (
        <LoadingSpinner />
      )}
    </aside>
  );
}

Sidebar.propTypes = {
  posts: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  const { postSelected, subreddit } = state;

  return {
    postSelected,
    subreddit,
  };
}

export default connect(mapStateToProps)(Sidebar);
