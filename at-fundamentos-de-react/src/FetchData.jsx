import { useState, useEffect } from "react";
import "./FetchData.css";
import User from "./User";
import Post from "./Post";
import Comment from "./Comment";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [userId, setUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [displayGrid, setDisplayGrid] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Erro ao buscar a API de usuários: ", error);
      }
    };
    fetchUsers();
  }, []);

  const fetchPosts = async (userId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/?userId=${userId}`
      );
      const data = await response.json();
      setPosts(data);
      setSelectedPost(null);
    } catch (error) {
      console.error("Error ao buscar os posts pela API: ", error);
    }
  };

  const fetchComments = async (postId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      const data = await response.json();
      setComments(data);
      setSelectedPost(postId);
    } catch (error) {
      console.error("Error ao buscas os comentários pela API: ", error);
    }
  };

  const handleUserClick = (user) => {
    setUserId(user.id);
    setSelectedUser(user);
    fetchPosts(user.id);
    setSelectedPost(null);
  };

  const handlePostClick = (postId) => {
    fetchComments(postId);
    setSelectedPost(postId);
  };

  const handleVoltarUsers = () => {
    setUserId(null);
    setPosts([]);
    setSelectedUser(null);
    setComments([]);
    setSelectedPost(null);
  };

  const handleVoltarPosts = () => {
    setSelectedPost(null);
    setComments([]);
  };

  const toggleFlexGrid = () => {
    setDisplayGrid((displayGrid) => !displayGrid);
  };

  const handleDeletePost = (commentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );
  };

  return (
    <div className="data-container">
      {userId === null ? (
        <div className={`user-container ${displayGrid ? "grid" : "flex"}`}>
          <button
            onClick={toggleFlexGrid}
            className={displayGrid ? "grid" : "flex"}
          >
            {displayGrid ? "Vizualizar em lista" : "Vizualizar em grade"}
          </button>
          {users.map((user) => (
            <User
              key={user.id}
              user={user}
              onClick={() => handleUserClick(user)}
            />
          ))}
        </div>
      ) : selectedPost === null ? (
        <div className="post-container">
          <button onClick={handleVoltarUsers}>Voltar</button>
          <h2>Postagens de {selectedUser.name}</h2>
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              onClick={() => handlePostClick(post.id)}
            />
          ))}
        </div>
      ) : (
        <div className="comment-container">
          <button onClick={handleVoltarPosts}>Voltar para Postagens</button>
          <h2>Comentários</h2>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              onDelete={handleDeletePost}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchData;
