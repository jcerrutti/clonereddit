export function getTopPosts(subreddit) {
  return fetch(`https://www.reddit.com/r/${subreddit}/top.json?limit=50`).then((response) =>
    response.json()
  );
}
