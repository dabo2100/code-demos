export default function Post({ postContnet, likes, love }) {
  return (
    <div className="bg-white shadow rounded border d-flex flex-column p-3">
      <h1>{postContnet}</h1>
      <p>Likes No : {likes}</p>
      <p>Love No : {love}</p>
    </div>
  );
}
