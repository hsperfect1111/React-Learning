// 55 working with Redux
// 1. ńpm init -y
// 2. npm install redux
// 3. import in node Const redux = require('redux');
// 4. We need to setup all 4 basic things:
//     1. Reducer
//     2. Store
//     3. Subscriber
//     4. Actions
// 5. Node redux-demo.js command to run node server

// 15.17.58
// require("redux"): Node.js ko keh raha hai ki node_modules folder ke andar jo redux package installed hai, use load/import kare.
// const redux = require("redux");

// // Dummy reducer: action chahe koi bhi ho, store same rahega
// const reducer = (store, action) => {
//   return store;
// };

// // Redux store create kar rahe hain reducer logic ke sath
// // Global store setup - ye poore app ki state manage karega
// // Redux store initialize ho raha hai jo reducer se initial state aur updates lega
// const store = redux.createStore(reducer);

// // Current state ko fetch karke console par print karne ke liye subscriber function
// // Jab bhi store update hoga, ye subscriber store.getState() se latest data read karke log karega
// const subscriber = () => {
//   const state = store.getState();
//   console.log(state);
// };

// // Store me koi bhi change/update aane par Subscriber run hoga

// // store = YouTube Channel (jahan saara data/state rakha hai).
// // Subscriber = Aapka Notification Bell (ek function jo alert/log karta hai).
// // store.subscribe(...) = Subscribe Button dabaana.

// // subscribe or Subscriber alag alag h naa ?
// // Ek Function hai aur doosra Redux ka In-built Method hai.

// // Is ek line ka matlab hai: "Store aur Subscriber function ke beech connection (link) banana.
// store.subscribe(subscriber);

// 15.25.46
// const redux = require("redux");

// //
// const INITIAL_VALUE = {
//   counter: 0,
// };

// // store = INITIAL_VALUE
// // counter: store.counter + 1
// // State update karne wala reducer function: har action par counter ko +1 karta hai
// const reducer = (store = INITIAL_VALUE, action) => {
//   console.log("Reducer called", action);
//   return { counter: store.counter + 1 };
// };

// const store = redux.createStore(reducer);

// const subscriber = () => {
//   const state = store.getState();
//   console.log(state);
// };

// store.subscribe(subscriber);

// // action use krna hai to dispatch
// store.dispatch({ type: "INCREMENT" });

// 15.30.58
// const redux = require("redux");

// const INITIAL_VALUE = {
//   counter: 0,
// };

// // let newStore = store
// // if(){}
// // return newStore

// // state/store Direct Change (Mutation) Kyun Nahi Karte?
// // Agar aap direct purani state/store ke properties ko change karoge:
// // Toh Redux ko pata hi nahi chalega ki data change hua hai! Redux memory reference check karta hai. Agar reference same hai, toh React/Redux UI ko re-render (update) nahi karega.
// const reducer = (store = INITIAL_VALUE, action) => {
//   let newStore = store;
//   if (action.type === "INCREMENT") {
//     newStore = { counter: store.counter + 1 };
//   }
//   return newStore;
// };

// const store = redux.createStore(reducer);

// const subscriber = () => {
//   const state = store.getState();
//   console.log(state);
// };

// store.subscribe(subscriber);

// store.dispatch({ type: "INCREMENT" });

// 15.32.00
// const redux = require("redux");

// const INITIAL_VALUE = {
//   counter: 0,
// };

// const reducer = (store = INITIAL_VALUE, action) => {
//   let newStore = store;
//   if (action.type === "INCREMENT") {
//     newStore = { counter: store.counter + 1 };
//   }
//   return newStore;
// };

// const store = redux.createStore(reducer);

// const subscriber = () => {
//   const state = store.getState();
//   console.log(state);
// };

// store.subscribe(subscriber);

// dispatch 4 times
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });

// o/p
// { counter: 1 }
// { counter: 2 }
// { counter: 3 }
// { counter: 4 }

// 15.32.46
// const redux = require("redux");

// const INITIAL_VALUE = {
//   counter: 0,
// };

// const reducer = (store = INITIAL_VALUE, action) => {
//   let newStore = store;
//   if (action.type === "INCREMENT") {
//     newStore = { counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     // if action.type === "DECREMENT" do this
//     newStore = { counter: store.counter - 1 };
//   }
//   return newStore;
// };

// const store = redux.createStore(reducer);

// const subscriber = () => {
//   const state = store.getState();
//   console.log(state);
// };

// store.subscribe(subscriber);

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });

// o/p
// { counter: 1 }
// { counter: 0 }
// { counter: 1 }
// { counter: 2 }

// 15.34.11
const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0,
};

const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    // if action.type === "ADDITION" to payload se number lo aur add krdo
    newStore = { counter: store.counter + action.payload.number };
  }
  return newStore;
};

const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT" });
// agar type "ADDITION" h to payload se number uthao aur add krdo
store.dispatch({ type: "ADDITION", payload: { number: 7 } });
store.dispatch({ type: "DECREMENT" });

// o/p
// { counter: 1 }
// { counter: 0 }
// { counter: 1 }
// { counter: 8 }
// { counter: 7 }
