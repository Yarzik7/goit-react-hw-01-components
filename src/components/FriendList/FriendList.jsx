import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const marcupItems = ({ avatar, name, isOnline, id }) => (
  <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
);

export const FriendList = ({ friends }) => {
  return <ul className={css.friendList}>{friends.map(marcupItems)}</ul>;
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
