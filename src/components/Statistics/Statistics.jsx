import PropTypes from 'prop-types';

const marcup = ({ id, label, percentage }) => (
  <li key={id} className="item">
    <span className="label">{label}</span>
    <span className="percentage">{`${percentage}%`}</span>
  </li>
);

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">{stats.map(marcup)}</ul>
    </section>
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
