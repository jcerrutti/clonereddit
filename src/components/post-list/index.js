import React from 'react';
import './style.css';
import moment from 'moment';

import commentIcon from '../../assets/comment.svg';
import AlertCircle from '../alert-circle';
import PostThumbnail from '../post-thumbnail';

import { thumbnailExists } from '../../utils';

export default function PostList({ post, onClickHandler, onDismissPost, isSelected }) {
  const dateLabel = moment.unix(post.created_utc).utc().fromNow();
  const className = `post-list${isSelected ? ' selected' : ''}`;

  function dismissPost(event, post) {
    event.stopPropagation();
    onDismissPost(post);
  }
  return (
    <div className={className} onClick={() => onClickHandler(post)}>
      <h4 className="title">
        {!post.visited && <AlertCircle />}
        {post.title}
      </h4>
      <p className="author">by {post.author}</p>
      <div>
        {thumbnailExists(post.thumbnail) && <PostThumbnail thumbnail={post.thumbnail} interactive={false} />}
      </div>
      <p className="comments">
        <img className="comment-icon" alt="comment-icon" src={commentIcon} />
        {post.num_comments} comments
      </p>
      <p className="date-created">Created: {dateLabel}</p>
      <button onClick={(e) => dismissPost(e, post)} className="dismiss-button">
        Dismiss
      </button>
    </div>
  );
}
