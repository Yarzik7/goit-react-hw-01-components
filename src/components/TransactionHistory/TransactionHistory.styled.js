import styled from '@emotion/styled';

const TransactionHistoryTable = styled.table`
  width: 700px;
  margin: 0 auto;

  border: 1px solid #000;
  text-align: center;
  border-collapse: collapse;
`;

const TableHeadRow = styled.tr`
  color: #4e4f4e;
  background-color: #00f3d2;
`;

const TableTuple = styled.tr`
  &:nth-child(2n + 2) {
    background-color: #7b7d7b;
  }
`;

const TableData = styled.th`
  border: 1px solid #4b4d4b;
`;

export { TransactionHistoryTable, TableHeadRow, TableTuple, TableData };
