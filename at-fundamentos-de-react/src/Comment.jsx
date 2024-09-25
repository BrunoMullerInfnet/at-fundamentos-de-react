import "./Comments.css";

const Comment = ({ comment, onDelete }) => {
  const firstLastName = comment.name.split(" ");
  const fullName = `${firstLastName[0]} ${
    firstLastName[firstLastName.length - 1]
  }`;
  const email = `@${comment.email.split("@")[0].toLowerCase()}`;
  const body =
    comment.body.length > 140
      ? comment.body.slice(0, 140) + "..."
      : comment.body;

  const handleDelete = () => {
    if (window.confirm("Você realmente deseja excluir esse comentário?")) {
      onDelete(comment.id);
    }
  };

  return (
    <div className="comment">
      <h4>
        {fullName} {email}
      </h4>
      <p>{body}</p>
      <button onClick={handleDelete}>
        <span role="img" aria-label="Deletar comentário">
          🗑️
        </span>
      </button>
    </div>
  );
};

export default Comment;
