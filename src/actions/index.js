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
    posts: json.data.children.map((child) => child.data),
    receivedAt: Date.now(),
  };
}

export function fetchPosts(subreddit = 'node') {
  return (dispatch) => {
    dispatch(requestPosts(subreddit));
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((response) => response.json())
      .then((json) => dispatch(receivePosts(json)));
  };
}

export function selectPost(post) {
  return {
    type: POST_SELECTED,
    postSelected: post,
  };
}
