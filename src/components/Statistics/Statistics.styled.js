import styled from '@emotion/styled';

const StatisticsContainer = styled.section`
  width: 300px;
  margin: 0 auto;
  padding-top: 20px;
  border: 1px solid #000;
  border-radius: 10px;

  text-align: center;
  overflow: hidden;
`;

const Title = styled.h2`
  color: #67686c;
  text-transform: uppercase;
`;

const StatList = styled.ul`
  margin-top: 20px;
  display: flex;
`;

function color({label}) {
    switch (label) {
        case '.docx': return '#0d12cb';
        case '.pdf': return '#d60e0e';
        case '.mp3': return '#199ca8';
        case '.psd': return '#0a1848';
        default: return '#000000';
    }
}

const StatListItem = styled.li`
  padding: 5px;
  flex-basis: calc((100% - 4 * 0px) / 5);

  color: #fff;

  background-color: ${color};
`;

export { StatisticsContainer, Title, StatList, StatListItem};
