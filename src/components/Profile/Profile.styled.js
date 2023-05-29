import styled from '@emotion/styled';

const ProfileContainer = styled.div`
  margin: 0 auto;
  max-width: 300px;

  text-align: center;

  border: 1px solid #000;
  border-radius: 5px;
`;

const Description = styled.div`
  padding: 10px;
  padding-top: 50px;
`;

const Avatar = styled.img`
  margin: 0 auto;
  margin-bottom: 20px;

  border: 1px solid #000;
  border-radius: 50%;
`;

const Name = styled.p`
  margin-bottom: 10px;

  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
`

const Tag = styled.p`
  margin-bottom: 10px;

  font-size: 18px;
  line-height: 1.2;
  color: #686662;
`

const Location = styled.p`
  font-size: 18px;
  line-height: 1.2;
  color: #686662;
`

const StatsList = styled.ul`
  display: flex;

  border-top: 1px solid #000;
`;

const StatsListItem = styled.li`
  padding: 15px 0;
  flex-basis: calc((100% - 2 * 0px) / 3);

  &:not(:last-child) {
    border-right: 1px solid #000;
  }
`;

const StatsCaption = styled.span`
  display: block;
`;


export {
  ProfileContainer,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsListItem,
  StatsCaption,
};