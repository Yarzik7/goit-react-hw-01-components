import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TableHeadRow,
  TableTuple,
  TableData,
} from './TransactionHistory.styled';

const marcupTuple = ({ id, type, amount, currency }) => (
  <TableTuple key={id}>
    <TableData>{type}</TableData>
    <TableData>{amount}</TableData>
    <TableData>{currency}</TableData>
  </TableTuple>
);

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <thead>
        <TableHeadRow>
          <TableData>Type</TableData>
          <TableData>Amount</TableData>
          <TableData>Currency</TableData>
        </TableHeadRow>
      </thead>

      <tbody>{items.map(marcupTuple)}</tbody>
    </TransactionHistoryTable>
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
