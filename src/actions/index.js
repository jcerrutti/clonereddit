import { getTopPosts } from '../services/post';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const POST_SELECTED = 'POST_SELECTED';

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit,
  };
}

function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json.data.children.map((child) => ({ ...child.data, visited: false })),
  };
}

export function fetchPosts(subreddit) {
  return (dispatch) => {
    dispatch(requestPosts(subreddit));
    return getTopPosts(subreddit).then((json) => dispatch(receivePosts(json)));
  };
}

export function selectPost(post) {
  return {
    type: POST_SELECTED,
    postSelected: post,
  };
}
