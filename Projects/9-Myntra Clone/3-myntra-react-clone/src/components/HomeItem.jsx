// 17.51.29 // 17.52.50
// const HomeItem = ({ item }) => {
//   return (
//     <div className="item-container">
//       <img className="item-image" src={item.image} alt="item image" />
//       <div className="rating">
//         {item.rating.stars} ⭐ | {item.rating.count}
//       </div>
//       <div className="company-name">{item.company}</div>
//       <div className="item-name">{item.item_name}</div>
//       <div className="price">
//         <span className="current-price">Rs {item.current_price}</span>
//         <span className="original-price">Rs {item.original_price}</span>
//         <span className="discount">({item.discount_percentage}% OFF)</span>
//       </div>
//       <button
//         className="btn-add-bag"
//         onclick={() => console.log("item was clicked")}
//       >
//         Add to Bag
//       </button>
//     </div>
//   );
// };

// export default HomeItem;

// 17.58.16
// yXy : image dalne ka ye tareeka hum use nhi krte
// image kaise import karege ?
// kuch b naam de dege import krte waqt jaise "itemImage" aur fir use kr lenge in line 37
// import itemImage from "../images/1.jpg";
// const HomeItem = ({ item }) => {
//   return (
//     <div className="item-container">
//       <img className="item-image" src={itemImage} alt="item image" />
//       <div className="rating">
//         {item.rating.stars} ⭐ | {item.rating.count}
//       </div>
//       <div className="company-name">{item.company}</div>
//       <div className="item-name">{item.item_name}</div>
//       <div className="price">
//         <span className="current-price">Rs {item.current_price}</span>
//         <span className="original-price">Rs {item.original_price}</span>
//         <span className="discount">({item.discount_percentage}% OFF)</span>
//       </div>
//       <button
//         className="btn-add-bag"
//         onclick={() => console.log("item was clicked")}
//       >
//         Add to Bag
//       </button>
//     </div>
//   );
// };

// export default HomeItem;

// 17.59.40
// const HomeItem = ({ item }) => {
//   return (
//     <div className="item-container">
//       <img className="item-image" src={item.image} alt="item image" />
//       <div className="rating">
//         {item.rating.stars} ⭐ | {item.rating.count}
//       </div>
//       <div className="company-name">{item.company}</div>
//       <div className="item-name">{item.item_name}</div>
//       <div className="price">
//         <span className="current-price">Rs {item.current_price}</span>
//         <span className="original-price">Rs {item.original_price}</span>
//         <span className="discount">({item.discount_percentage}% OFF)</span>
//       </div>
//       <button
//         className="btn-add-bag"
//         onClick={() => console.log("item was clicked")}
//       >
//         Add to Bag
//       </button>
//     </div>
//   );
// };

// export default HomeItem;

// 19.26.38
// import { useDispatch } from "react-redux";
// import { bagActions } from "../store/bagSlice";
// const HomeItem = ({ item }) => {
//   // const dispatch = useDispatch(); likhne se humein ek dispatch function mil jata hai, jiska use karke hum Redux store ko batate hain ki state mein koi badlav (change) karna hai.
//   const dispatch = useDispatch();
//   // Yeh ek arrow function hai jiska naam humne handleAddToBag rakha hai. Yeh function tabhi execute hoga jab isko call kiya jayega
//   const handleAddToBag = () => {
//     // bagActions.addToBag(item.id)
//     // Yeh Redux ka action creator hai.
//     // Yeh us specific product ki item.id ko leta hai (jo is component ko props ke zariye mili hai) aur ek action object banata hai jiska payload wahi item.id hoti hai.

//     // dispatch(...)
//     // Yeh wahi "waiter" hai jiske baare mein humne baat ki thi! Yeh is action ko pakadta hai aur seedha Redux store ke paas bhej deta hai.
//     dispatch(bagActions.addToBag(item.id));
//   };
//   return (
//     <div className="item-container">
//       <img className="item-image" src={item.image} alt="item image" />
//       <div className="rating">
//         {item.rating.stars} ⭐ | {item.rating.count}
//       </div>
//       <div className="company-name">{item.company}</div>
//       <div className="item-name">{item.item_name}</div>
//       <div className="price">
//         <span className="current-price">Rs {item.current_price}</span>
//         <span className="original-price">Rs {item.original_price}</span>
//         <span className="discount">({item.discount_percentage}% OFF)</span>
//       </div>
//       {/* onClick={handleAddToBag} likhne se yeh hota hai ki jab bhi user "Add to Bag" button par click karega, tab handleAddToBag function automatically run (execute) ho jayega. */}
//       <button className="btn-add-bag" onClick={handleAddToBag}>
//         Add to Bag
//       </button>

//     </div>
//   );
// };

// export default HomeItem;

// 19.28.45

// import { useDispatch } from "react-redux";
// import { bagActions } from "../store/bagSlice";
// import { IoMdAddCircle } from "react-icons/io";
// import { MdDelete } from "react-icons/md";

// const HomeItem = ({ item }) => {
//   const dispatch = useDispatch();
//   const handleAddToBag = () => {
//     dispatch(bagActions.addToBag(item.id));
//   };
//   return (
//     <div className="item-container">
//       <img className="item-image" src={item.image} alt="item image" />
//       <div className="rating">
//         {item.rating.stars} ⭐ | {item.rating.count}
//       </div>
//       <div className="company-name">{item.company}</div>
//       <div className="item-name">{item.item_name}</div>
//       <div className="price">
//         <span className="current-price">Rs {item.current_price}</span>
//         <span className="original-price">Rs {item.original_price}</span>
//         <span className="discount">({item.discount_percentage}% OFF)</span>
//       </div>
//       {/* onClick={handleAddToBag} likhne se yeh hota hai ki jab bhi user "Add to Bag" button par click karega, tab handleAddToBag function automatically run (execute) ho jayega. */}

//       {/* add kr diya className me btn-add-bag */}
//       {/* bootstrap success & Danger button */}
//       <button
//         type="button"
//         className="btn btn-add-bag btn-success"
//         onClick={handleAddToBag}
//       >
//         <IoMdAddCircle />
//         Add to bag
//       </button>
//       <button type="button" className="btn btn-add-bag btn-danger">
//         <MdDelete />
//         Remove
//       </button>
//     </div>
//   );
// };

// export default HomeItem;

// 19.32.27
// Dekhiye, bag mein kya hai? Bag mein humne ek array rakha hua hai IDs ka.
// Yaani jo-jo IDs ya items mere bag ke andar hain, un sab ki IDs wahan par dikhne lagegi.

// Toh jaise hi IDs wahan dikhne lagegi, hum yahan kya kar sakte hain?
// Main yahan yeh bol sakta hoon ki bag wale slice se saari ki saari IDs nikal kar lao.

// Aur jab aapko koi print karne ke liye bolta hai, toh aap dekho ki meri ID bag ke andar hai kya?
// Agar meri ID bag ke andar hai, toh "Remove" button dikhao.
// Agar nahi hai, toh "Add to Bag" button dikhao.

import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  // Imp
  // 1. bagItems kya hai?
  // bagItems ek array hai jiske andar un sabhi items ki IDs rakhi hain jo user ne bag mein add ki hain (jaise: ["001", "002", "005"]).

  // 2. item.id kya hai?
  // Yeh us particular item ki ID hai jise aap screen par is waqt dekh rahe hain ya render kar rahe hain (jaise: "002").

  // 3. .indexOf(...) method kya karta hai?
  // JavaScript ka .indexOf() method kisi array ke andar yeh dhoondhta hai ki aap jo cheez dhoondh rahe hain, woh us array mein kis position (index) par baithi hai:
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  // console.log(item.id, elementFound);

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  // Remove button click hone par, yeh function item ki ID ko bag se hatane ke liye action dispatch karta hai
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {elementFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleRemove}
        >
          <MdDelete />
          Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={handleAddToBag}
        >
          <IoMdAddCircle />
          Add to bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
