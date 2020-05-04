export function dismissPost(state, postIdToDismiss) {
  const newItems = state.items.filter((item) => item.id !== postIdToDismiss);
  return Object.assign({}, state, {
    items: newItems,
    postSelected: state.postSelected.id === postIdToDismiss ? newItems[0] : state.postSelected,
  });
}

export function selectPost(state, postSelected) {
  return Object.assign({}, state, {
    items: modifyKeyFromPost(state, postSelected.id, { visited: true }),
    postSelected: postSelected,
  });
}

function modifyKeyFromPost({ items }, postId, postMutation) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === postId) {
      items[i] = Object.assign(items[i], postMutation);
      break;
    }
  }
  return items;
}
