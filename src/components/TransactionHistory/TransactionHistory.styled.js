import styled from '@emotion/styled';

const TransactionHistoryTable = styled.table`
  width: 700px;
  margin: 0 auto;

  border: 1px solid #000;
  text-align: center;
  border-collapse: collapse;
`;

const TableHeadData = styled.th`
  padding: 10px 0;

  border: 1px solid #4b4d4b;
`;

const TableHeadRow = styled.tr`
  text-transform: uppercase;

  color: #000;
  background-color: #00f3d2;
`;

const TableTuple = styled.tr`
  &:nth-child(2n + 2) {
    background-color: #c4c4c4;
  }
`;

const TableData = styled.td`
  padding: 3px 0;

  font-weight: 500;

  border: 1px solid #4b4d4b;
`;

export {
  TransactionHistoryTable,
  TableHeadRow,
  TableTuple,
  TableData,
  TableHeadData,
};
