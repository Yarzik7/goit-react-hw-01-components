import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const marcup = ({ id, label, percentage }) => (
  <li key={id} className={`${css.item} ${css[label.slice(1)]}`} >
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{`${percentage}%`}</span>
  </li>
);

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>{stats.map(marcup)}</ul>
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
