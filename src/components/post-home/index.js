import React from 'react';

import './style.css';

import PostThumbnail from '../post-thumbnail';

export default function PostHome({ post }) {
  return (
    <div className="post-home">
      <h3>{post.title}</h3>
      {post.thumbnail !== 'self' && <PostThumbnail thumbnail={post.thumbnail} interactive={true} />}
      <a className="post-link" href={post.url} target="_blank" rel="noopener noreferrer">
        Read it on Reddit
      </a>
    </div>
  );
}
