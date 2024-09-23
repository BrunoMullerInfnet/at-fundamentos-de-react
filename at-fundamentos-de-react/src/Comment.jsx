const Comment = ({ comment }) => {
  const firstLastName = comment.name.split("");
  const fullName = `${firstLastName[0]} ${
    firstLastName[firstLastName.length - 1]
  }`;
  const email = `@${comment.email.split("@")[0].toLowerCase()}`;
  const body =
    comment.body.length > 140
      ? comment.body.slicce(0, 140) + "..."
      : comment.body;

  return (
    <div className="comment">
      <h4>
        {fullName} {email}
      </h4>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
