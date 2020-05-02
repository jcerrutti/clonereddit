import { REQUEST_POSTS, RECEIVE_POSTS, POST_SELECTED } from '../actions';

function topPosts(state = { isFetching: false, items: [], postSelected: null }, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
        postSelected: state.postSelected || action.posts[0],
        lastUpdated: action.receivedAt,
      });
    case REQUEST_POSTS:
      return Object.assign(
        {},
        state,
        {
          isFetching: true,
        },
        action
      );
    case POST_SELECTED:
      return Object.assign({}, state, {
        postSelected: action.postSelected,
      });
    default:
      return state;
  }
}

export default topPosts;
