import "./Post.css";

const Post = ({ posts, onClick }) => {
  return (
    <div className="post-card" onClick={onClick}>
      <h3>{posts.title}</h3>
      <p>{posts.body}</p>
    </div>
  );
};

export default Post;
