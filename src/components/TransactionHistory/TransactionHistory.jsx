import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const marcupTuple = ({ id, type, amount, currency }) => (
  <tr key={id} className={css.tableTuple}>
    <td className={css.tableData}>{type}</td>
    <td className={css.tableData}>{amount}</td>
    <td className={css.tableData}>{currency}</td>
  </tr>
);

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.tableHeadRow}>
          <th className={css.tableData}>Type</th>
          <th className={css.tableData}>Amount</th>
          <th className={css.tableData}>Currency</th>
        </tr>
      </thead>

      <tbody>{items.map(marcupTuple)}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
