import styled from '@emotion/styled';

const StatisticsContainer = styled.section`
  width: 300px;
  margin: 0 auto;
  border: 1px solid #000;
  border-radius: 10px;

  text-align: center;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  margin: 20px auto;

  color: #67686c;
  text-transform: uppercase;
`;

const StatList = styled.ul`
  display: flex;
`;

const StatListItem = styled.li`
  padding: 5px;
  flex-basis: calc((100% - 4 * 0px) / 5);

  color: #fff;
`;

export { StatisticsContainer, Title, StatList, StatListItem };
