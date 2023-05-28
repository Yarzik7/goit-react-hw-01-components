import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsListItem,
  StatsCaption,
} from './Profile.styled';

export const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt={username} width="100" height="100" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatsListItem>
          <StatsCaption>Followers</StatsCaption>
          <StatsCaption>{stats.followers}</StatsCaption>
        </StatsListItem>
        <StatsListItem>
          <StatsCaption>Views</StatsCaption>
          <StatsCaption>{stats.views}</StatsCaption>
        </StatsListItem>
        <StatsListItem>
          <StatsCaption>Likes</StatsCaption>
          <StatsCaption>{stats.likes}</StatsCaption>
        </StatsListItem>
      </StatsList>
    </ProfileContainer>
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
