import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions';

function posts(
  state = {
    isFetching: false,
    items: [],
  },
  action
) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

function topPosts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, posts(state[action.subreddit], action));
    default:
      return state;
  }
}

export default topPosts;
