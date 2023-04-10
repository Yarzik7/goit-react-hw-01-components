import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const imageUrl =
//   'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640';
// const productPrice = 10.99;
// const product = (
//   <div>
//     <img src={imageUrl} alt="Tacos With Lime" width="640" />
//     <h2>Tacos With Lime</h2>
//     <p>Price: {productPrice}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// const post = (
//   <>
//     <h2>Post Header</h2>
//     <p>Post text</p>
//   </>
// );

// const Product = props => (
//   <div>
//     <img
//       src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       alt="Tacos With Lime"
//       width="640"
//     />
//     <h2>Tacos With Lime</h2>
//     <p>Price: 10.99$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// const App = () => (
//   <>
//     <h1>Best selling products</h1>
//     <Product
//       //imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       name="Tacos With Lime"
//       price='10.99' // not use number without {}
//     />
//     <Product
//       imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//       name="Fries and Burger"
//       price={14.29}
//     />
//   </>
// );

// const Product = props => (
//   <div>
//     <h2>{props.name ? props.name : 'Hello'}</h2>
//   </div>
// );

// const Product = ({
//   imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
//   name,
//   price,
// }) => (
//   <div>
//     <img src={imgUrl} alt={name} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// const usersObj = [
//   { name: 'Mango', email: 'mango@mail.com' },
//   { name: 'Poly', email: 'poly@mail.com' },
//   { name: 'Yara', email: 'yara@mail.com' },
//   { name: 'Boba', email: 'boba@mail.com' },
// ];

// const Profile = ({ name, email }) => (
//   <div>
//     <p>Name: {name}</p>
//     <p>Email: {email}</p>
//   </div>
// );

// const Panel = ({ title, children }) => (
//   <section>
//     <h2>{title}</h2>
//     {children}
//   </section>
// );

// const App = ({ prop }) => (
//   <div>
//     <Panel title="User profile">
//       <Profile name="Mango" email="mango@mail.com" />
//     </Panel>
//     <Panel title="User profile">
//       {prop.map(({ name, email }) => (
//         <Profile name={name} email={email} />
//       ))}
//     </Panel>
//   </div>
// );

// const Product = ({
//   imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
//   name,
//   price,
// }) => (
//   <div>
//     <img src={imgUrl} alt={name} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// Product.propTypes = {
//   imgUrl: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };

// const Mailbox = ({ name, unreadMessages }) => {
//   return (
//     <div>
//       <h1>Hello {name}</h1>
//       <p>
//         {unreadMessages.length > 0
//           ? `You have ${unreadMessages.length} unread messages.`
//           : 'No unread messages.'}
//       </p>
//     </div>
//   );
// };

// const favouriteBooks = [
//   { id: 'id-1', name: 'JS for beginners' },
//   { id: 'id-2', name: 'React basics' },
//   { id: 'id-3', name: 'React Router overview' },
//   { id: 'id-4', name: 'Redux in depth' },
// ];

// const BookList = ({ books }) => (
//   <ul>
//     {books.map(book => (
//       <li key={book.id}>{book.name}</li>
//     ))}
//   </ul>
// );

// const App = () => {
//   return (
//     <div>
//       <BookList books={favouriteBooks} />
//     </div>
//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
