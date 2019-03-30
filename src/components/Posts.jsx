import React from 'react'
import Post from './Post';
import AddPost from './AddPost';

const Posts = ({ posts, user }) => {
  console.log('current user', user);
  return (
    <section className="Posts">
      <AddPost user={user} />
      {posts.map(post => <Post currentUser={user} {...post} key={post.id} />)}
    </section>
  )
}

export default Posts;
