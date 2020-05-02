import React from 'react';

export default function HomePost({ post }) {
  return <div>{post && post.title}</div>;
}
