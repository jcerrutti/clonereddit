import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PostList from '../../components/post-list';
import LoadingSpinner from '../../components/loading-spinner';
import { selectPost } from '../../actions';
import './style.css';

function Sidebar({ posts, dispatch, postSelected, isFetching }) {
  function postClicked(post) {
    dispatch(selectPost(post));
  }

  return (
    <aside>
      {!isFetching ? (
        posts.map((post) => (
          <PostList
            isSelected={postSelected.id === post.id}
            onClickHandler={postClicked}
            key={post.id}
            post={post}
          />
        ))
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
  const { postSelected } = state;

  return {
    postSelected: postSelected,
  };
}

export default connect(mapStateToProps)(Sidebar);
