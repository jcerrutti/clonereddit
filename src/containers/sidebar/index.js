import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import PostList from '../../components/post-list';
import LoadingSpinner from '../../components/loading-spinner';
import './style.css';

function Sidebar({ postStore }) {
  const { posts, isFetching, postSelected, subreddit } = postStore;

  function postClicked(post) {
    postStore.selectPost(post);
  }

  function postDismissed(post) {
    postStore.dismissPost(post);
  }

  function onRefreshAllClick() {
    postStore.getPosts(subreddit);
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
  postStore: PropTypes.object,
};

export default inject(({ postStore }) => ({ postStore }))(observer(Sidebar));
