import "./User.css";

const User = ({ user, onClick }) => {
  return (
    <div className="user-card" onClick={onClick}>
      <h2> {user.name}</h2>
      <p className="captchphrase">{user.company.catchPhrase}</p>
    </div>
  );
};

export default User;
