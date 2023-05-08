import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem/FriendListItem';
import { FriendListContainer } from './FriendList.styled';

const marcupItems = ({ avatar, name, isOnline, id }) => (
  <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
);

export const FriendList = ({ friends }) => {
  return <FriendListContainer>{friends.map(marcupItems)}</FriendListContainer>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
