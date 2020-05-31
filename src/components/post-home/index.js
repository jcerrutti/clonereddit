import React from 'react';

import './style.css';

import PostThumbnail from '../post-thumbnail';

import { thumbnailExists } from '../../utils';

export default function PostHome({ post }) {
  return (
    <div className="post-home">
      <h3>{post.title}</h3>
      {thumbnailExists(post.thumbnail) && (
        <PostThumbnail thumbnail={post.thumbnail} interactive={true} />
      )}
      <a className="post-link" href={post.url} target="_blank" rel="noopener noreferrer">
        Go To Post Link
      </a>
    </div>
  );
}
