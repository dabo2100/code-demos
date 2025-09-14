export default function Post({post}) {
  return (
    <div className="bg-white rounded shadow border p-4 flex flex-col">
      <h1>{post.content}</h1>
      <p>Likes : {post.likes}</p>
    </div>
  );
}
