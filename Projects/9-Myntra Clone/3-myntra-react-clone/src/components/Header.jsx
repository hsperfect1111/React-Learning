// import { IoPersonOutline } from "react-icons/io5";
// import { FaHeart, FaShoppingBag } from "react-icons/fa";

// const Header = () => {
//   return (
//     <header>
//       <div className="logo_container">
//         <a href="#">
//           <img
//             className="myntra_home"
//             src="images/myntra_logo.webp"
//             alt="Myntra Home"
//           />
//         </a>
//       </div>
//       <nav className="nav_bar">
//         <a href="#">Men</a>
//         <a href="#">Women</a>
//         <a href="#">Kids</a>
//         <a href="#">Home & Living</a>
//         <a href="#">Beauty</a>
//         <a href="#">
//           Studio <sup>New</sup>
//         </a>
//       </nav>
//       <div className="search_bar">
//         <span className="material-symbols-outlined search_icon">search</span>
//         <input
//           className="search_input"
//           placeholder="Search for products, brands and more"
//         />
//       </div>
//       <div className="action_bar">
//         <div className="action_container">
//           {/* 18.07.46 */}
//           <IoPersonOutline />
//           <span className="action_name">Profile</span>
//         </div>

//         <div className="action_container">
//           <FaHeart />
//           <span className="action_name">Wishlist</span>
//         </div>

//         <a className="action_container" href="pages/bag.html">
//           <FaShoppingBag />
//           <span className="action_name">Bag</span>
//           {/* <span className="bag-item-count">0</span> */}
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Header;

// 18.19.32
// import { IoPersonOutline } from "react-icons/io5";
// import { FaHeart, FaShoppingBag } from "react-icons/fa";
// import { Link } from "react-router-dom";
// const Header = () => {
//   return (
//     <header>
//       <div className="logo_container">
//         {/* use Link with to
//          instead of a tag  */}
//         <Link to="/">
//           <img
//             className="myntra_home"
//             src="images/myntra_logo.webp"
//             alt="Myntra Home"
//           />
//         </Link>
//       </div>
//       <nav className="nav_bar">
//         <a href="#">Men</a>
//         <a href="#">Women</a>
//         <a href="#">Kids</a>
//         <a href="#">Home & Living</a>
//         <a href="#">Beauty</a>
//         <a href="#">
//           Studio <sup>New</sup>
//         </a>
//       </nav>
//       <div className="search_bar">
//         <span className="material-symbols-outlined search_icon">search</span>
//         <input
//           className="search_input"
//           placeholder="Search for products, brands and more"
//         />
//       </div>
//       <div className="action_bar">
//         <div className="action_container">
//           {/* 18.07.46 */}
//           <IoPersonOutline />
//           <span className="action_name">Profile</span>
//         </div>

//         <div className="action_container">
//           <FaHeart />
//           <span className="action_name">Wishlist</span>
//         </div>
//         {/* 18.20.48 */}
//         {/* React single-page applications (SPAs) me hum .html extension wale static files (woh traditional, readymade HTML web pages jo aapke system/server par pehle se bane rakhe hote hain) par navigate nahi karte. Route path simple /bag hona chahiye, na ki /pages/bag.html. */}
//         <Link className="action_container" to="/bag">
//           <FaShoppingBag />
//           <span className="action_name">Bag</span>
//           {/* <span className="bag-item-count">0</span> */}
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;

// 19.24.30
import { IoPersonOutline } from "react-icons/io5";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  // store.js mein bagSlice.reducer ko 'bag' naam diya tha,
  // isiliye store.bag likh kar hum current bag items ko yahan access kar rahe hain

  // Yeh line hum isliye likh rahe hain taaki hum Redux store ke andar jo bag ka data (jaise aapka initial state ["002"] ya naye add kiye gaye items) pada hai, use apne React component ke andar nikal sakein
  const bag = useSelector((store) => store.bag);
  // console.log("bag contains", bag);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <IoPersonOutline />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <FaHeart />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <FaShoppingBag />
          <span className="action_name">Bag</span>
          {/* {bag.length} likhne se bag ke andar maujood total items ki ginti (count) automatically screen par dikhne lagegi aur woh live update hoti rahegi. */}
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
