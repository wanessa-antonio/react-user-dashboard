import './UserCard.css';

function UserCard({ user }) {
  return (
    <div className="user-card">
      <h3 className="user-name">{user.name}</h3>
      <p className="user-email">{user.email}</p>
    </div>
  );
}

export default UserCard;