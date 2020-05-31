import { observable, action } from 'mobx';
import { returnPostSelected, returnPostDismissed } from './modifyPosts';
import { getTopPosts } from '../services/post';

export default class PostStore {
  @observable posts = [];
  @observable postSelected = null;
  @observable isFetching = false;
  @observable subreddit = 'reactjs';

  @action
  async getPosts(subreddit) {
    try {
      this.isFetching = true;
      this.subreddit = subreddit;
      const data = await getTopPosts(this.subreddit);

      this.posts = data;
      this.selectPost(data[0]);
    } catch (e) {
      this.cleanPostList();
    } finally {
      this.isFetching = false;
    }
  }

  @action
  selectPost(post) {
    const { posts, postSelected } = returnPostSelected(this.posts, post);
    this.posts = posts;
    this.postSelected = postSelected;
  }

  @action
  dismissPost(post) {
    const { posts, postSelected } = returnPostDismissed(this.posts, this.postSelected, post.id);
    this.posts = posts;
    this.postSelected = postSelected;
  }

  @action
  cleanPostList() {
    this.posts = [];
    this.postSelected = null;
  }
}
