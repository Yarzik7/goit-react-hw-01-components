
export const Description = props => {
  const { avatar, username, location, tag } = props;
  return (
    <div className="description">
      <img
        src={avatar}
        alt={username}
        className="avatar"
        width="100"
        height="100"
      />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};
