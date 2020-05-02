import React from 'react';
import './style.css';
import moment from 'moment';

export default function PostList({ post, onClickHandler, isSelected }) {
  const className = `post-list${isSelected ? ' selected' : ''}`;
  return (
    <div className={className} onClick={() => onClickHandler(post)}>
      <h6 className="title">{post.title}</h6>
      <span className="author">by {post.author}</span>
      <span>{moment(post.created).fromNow()}</span>
    </div>
  );
}
