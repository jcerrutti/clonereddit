import { REQUEST_POSTS, RECEIVE_POSTS, POST_SELECTED } from '../actions';

function modifyKeyFromPost({ items }, { id }, postMutation) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      items[i] = Object.assign(items[i], postMutation);
      break;
    }
  }
  return items;
}

function topPosts(state = { isFetching: false, items: [], postSelected: null }, action) {
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
        },
        action
      );
    case POST_SELECTED:
      const items = modifyKeyFromPost(state, action.postSelected, { visited: true });
      return Object.assign({}, state, {
        items,
        postSelected: action.postSelected,
      });
    default:
      return state;
  }
}

export default topPosts;
