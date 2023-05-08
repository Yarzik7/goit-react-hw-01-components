import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  StatisticsCaption,
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

      <Stats>
        <StatsItem>
          <StatisticsCaption>Followers</StatisticsCaption>
          <StatisticsCaption>{stats.followers}</StatisticsCaption>
        </StatsItem>
        <StatsItem>
          <StatisticsCaption>Views</StatisticsCaption>
          <StatisticsCaption>{stats.views}</StatisticsCaption>
        </StatsItem>
        <StatsItem>
          <StatisticsCaption>Likes</StatisticsCaption>
          <StatisticsCaption>{stats.likes}</StatisticsCaption>
        </StatsItem>
      </Stats>
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
