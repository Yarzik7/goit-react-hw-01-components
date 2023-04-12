import PropTypes from 'prop-types';
// import { Description } from 'components/Description/Description';
// import { Stats } from 'components/Stats/Stats';
// import { Items } from 'components/Items/Items';

// export const Profile = props => {
//   const { username, tag, location, avatar, stats } = props;
//   return (
//     <div className="profile">
//       <Description
//         username={username}
//         tag={tag}
//         location={location}
//         avatar={avatar}
//       />
//       <Stats>
//         {Object.entries(stats).map(prop => (
//           <Items key={prop[0]} props={prop} />
//         ))}
//       </Stats>
//     </div>
//   );
// };

export const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
  return (
    <div className="profile">
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

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
