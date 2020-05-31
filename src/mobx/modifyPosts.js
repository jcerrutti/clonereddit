export function returnPostDismissed(postList, postSelected, postIdToDismiss) {
  const posts = postList.filter((item) => item.id !== postIdToDismiss);
  return {
    posts,
    postSelected: postSelected.id === postIdToDismiss ? posts[0] : postSelected,
  };
}

export function returnPostSelected(postList, postSelected) {
  return {
    posts: modifyKeyFromPost(postList, postSelected.id, { visited: true }),
    postSelected: postSelected,
  };
}

function modifyKeyFromPost(postList, postId, postMutation) {
  for (let i = 0; i < postList.length; i++) {
    if (postList[i].id === postId) {
      postList[i] = Object.assign(postList[i], postMutation);
      break;
    }
  }
  return postList;
}
