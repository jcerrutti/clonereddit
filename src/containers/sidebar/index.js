import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PostList from '../../components/PostList';
import { selectPost } from '../../actions';
import './style.css';

function Sidebar({ posts, dispatch, postSelected }) {
  function postClicked(post) {
    dispatch(selectPost(post));
  }

  return (
    <aside>
      {posts.map((post) => (
        <PostList
          isSelected={postSelected.id === post.id}
          onClickHandler={postClicked}
          key={post.id}
          post={post}
        />
      ))}
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
