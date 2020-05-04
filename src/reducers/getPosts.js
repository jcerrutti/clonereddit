import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  POST_SELECTED,
  POST_DISMISSED,
  DISMISS_ALL,
} from '../actions';

import { dismissPost, selectPost } from './utils/modifyPosts';

function posts(state = { isFetching: false, items: [], postSelected: null }, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      action.posts[0].visited = true;
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
        postSelected: action.posts[0],
      });
    case REQUEST_POSTS:
      return Object.assign(
        {},
        state,
        {
          isFetching: true,
          subreddit: action.subreddit,
        },
        action
      );
    case DISMISS_ALL:
      return Object.assign(
        {},
        state,
        {
          items: [],
          postSelected: null,
        },
        action
      );
    case POST_SELECTED:
      return selectPost(state, action.postSelected);
    case POST_DISMISSED:
      return dismissPost(state, action.postIdDismissed);
    default:
      return state;
  }
}

export default posts;
