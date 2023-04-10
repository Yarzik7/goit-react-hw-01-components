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

import user from '../data/user.json';
import { Description } from 'components/Description/Description';
import { Stats } from 'components/Stats/Stats';
import { Items } from 'components/Items/Items';

export const App = () => {
  return (
    <div className="profile">
      <Description />
      <Stats>
        <Items />
      </Stats>
    </div>
  );
};
