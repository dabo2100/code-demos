import { useState } from 'react';
import Post from '../components/Post';

export default function PostsPage() {
  const [posts, setPosts] = useState([
    { content: 'Today this is first Post', likes: 5 },
    { content: 'Today this is 2 Post', likes: 10 },
    { content: 'Today this is 7 Post', likes: 20 },
  ]);

  return (
    <div className="container flex flex-col gap-3">
      {posts.map((el, index) => {
        return <Post key={index} post={el} />;
      })}
    </div>
  );
}
