// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

///////////////////////////////////////////////

import { teamMembers } from 'teamMembers';
import { Profile } from './Profile';

const createProfile = member => {
  return (<Profile info={member} />);
};

export const App = () => {
  return <ul key="ul-id" class="team list">{teamMembers.map(createProfile)}</ul>;
};
