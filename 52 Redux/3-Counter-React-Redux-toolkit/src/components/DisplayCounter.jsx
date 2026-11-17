// const DisplayCounter = () => {
//   return <p className="lead mb-4">Counter current value</p>;
// };

// export default DisplayCounter;

// // STEP3 : 16.0.34
// import { useSelector } from "react-redux";

// // 6. Using the store
// //   1. useSelector hook gets a slice of the store.
// //   Const counter = useSelector(state => state.counter);
// //   2. Subscription is already setup and only will re-execute
// //   when only your slice is changed. Subscription is
// //   automatically cleared also.
// const DisplayCounter = () => {
//   // useSelector ki help se hum store se apne kaam ki cheej le skte hai
//   // store me se value of "counter" hume yaha chahiye to hum useSelector use kr lege

//   // ❓ Q: useSelector((store) => store.counter) me 'store' kaha se aa raha hai?
//   // 1. Root Setup: main.jsx me <Provider store={counterStore}> Redux Store ko
//   //    React Context API ke zariye pure App tree me available karata hai.
//   // 2. Internal Access: useSelector() Hook internal React Context se current state
//   //    fetch karta hai aur use aapke arrow function ke parameter (is case me 'store')
//   //    me pass kar deta hai
//   const counter = useSelector((store) => store.counter);

//   return <p className="lead mb-4">Counter current value: {counter}</p>;
// };

// export default DisplayCounter;

// note :
// useSelector((store) => store.counter) : store Aapke Arrow Function ka Parameter (Argument Name) hai!
// Aap Is Parameter Ka Naam Kuch Bhi Rakh Sakte Hain
// useSelector((state) => state.counter)
// useSelector((store) => store.counter)
// useSelector((s) => s.counter)

// 16.56.52
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  // Redux store se 'counter' slice aur uski 'counterVal' property nikali
  const { counterVal } = useSelector((store) => store.counter);
  return <p className="lead mb-4">Counter current value: {counterVal}</p>;
};

export default DisplayCounter;
