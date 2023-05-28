import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  Title,
  StatList,
  StatListItem,
} from './Statistics.styled';
import { StatsCaption } from 'components/Profile/Profile.styled';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const marcup = ({ id, label, percentage }) => (
  <StatListItem key={id} label={label} style={{backgroundColor: getRandomHexColor()}}>
    <StatsCaption>{label}</StatsCaption>
    <StatsCaption>{`${percentage}%`}</StatsCaption>
  </StatListItem>
);

export const Statistics = ({ title = '', stats }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}

      <StatList>{stats.map(marcup)}</StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
