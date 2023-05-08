import styled from '@emotion/styled';

const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  column-gap: 20px;
  border: 1px solid #000;
  border-radius: 10px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const statusColor = ({ isOnline }) => (isOnline ? '#21EE00' : '#EB0000');

const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;

  background-color: ${statusColor};
  border-radius: 50%;
`;

const Avatar = styled.img`
  border-radius: 5px;
  overflow: hidden;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export { FriendItem, Status, Avatar, Name };
