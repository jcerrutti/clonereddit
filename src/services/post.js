export function getTopPosts(subreddit) {
  let url = `${process.env.REACT_APP_URL}/api/v1/posts`;
  url += subreddit ? `?subreddit=${subreddit}` : '';
  return fetch(url).then((response) => response.json());
}
