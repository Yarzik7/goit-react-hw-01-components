import PropTypes from 'prop-types';
import { StatisticsContainer, Title, StatList, StatListItem } from './Statistics.styled';
import { StatisticsCaption } from 'components/Profile/Profile.styled';

const marcup = ({ id, label, percentage }) => (
  <StatListItem key={id} label={label}>
    <StatisticsCaption>{label}</StatisticsCaption>
    <StatisticsCaption>{`${percentage}%`}</StatisticsCaption>
  </StatListItem>
);

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      <Title>{title}</Title>

      <StatList>{stats.map(marcup)}</StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
