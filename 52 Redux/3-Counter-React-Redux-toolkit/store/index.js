// import { createStore } from "redux";

// const INITIAL_VALUE = {
//   counter: 0,
//   privacy: false,
// };

// const counterReducer = (store = INITIAL_VALUE, action) => {
//   if (action.type === "INCREMENT") {
//     // privacy: store.privacy
//     return { counter: store.counter + 1, privacy: store.privacy };
//   } else if (action.type === "DECREMENT") {
//     return { counter: store.counter - 1, privacy: store.privacy };
//   } else if (action.type === "ADD") {
//     {
//       return {
//         counter: store.counter + Number(action.payload.num),
//         privacy: store.privacy,
//       };
//     }
//   } else if (action.type === "SUBTRACT") {
//     {
//       return {
//         counter: store.counter - Number(action.payload.num),
//         privacy: store.privacy,
//       };
//     }
//   } else if (action.type === "PRIVACY_TOGGLE") {
//     {
//       // pass this with privacy : counter: store.counter
//       return { counter: store.counter, privacy: !store.privacy };
//     }
//   }
//   return store;
// };

// const counterStore = createStore(counterReducer);
// export default counterStore;

// 16.45.30
// 58 working with redux toolkit
// STEP 1: Redux Toolkit se zaroori functions import kiye
// import { configureStore, createSlice } from "@reduxjs/toolkit";

// // STEP 2: createSlice - State, Reducers aur Actions ko ek jagah define karne ke liye
// // createSlice Redux Toolkit ka sabse mukhya function hai. Yeh Redux ke actions aur reducers ko ek saath define karne ka kaam karta hai.
// // method createSlice call kiya h : jo store ka slice create karega
// // Q. createSlice automatic 2 sabse mukhya cheezein banata hai. Ek hota hai counterSlice.actions, dusra kya hota hai jo hum configureStore ko dete hain?
// // A. counterSlice.reducer jo hum configureStore ko dete hain
// const counterSlice = createSlice({
//   // name: "counter"
//   // Kyu: Is slice ko ek unique naam dene ke liye.
//   // Kya kar raha hai: Redux internal level par action types banane ke liye (e.g., "counter/increment") use karta hai.
//   name: "counter",
//   // Initial State: Application start hone par default state structure aur values
//   initialState: { counterVal: 0 },
//   // Reducers: State change logic (state = current data, action = dispatched data/payload)
//   reducers: {
//     increment: (state, action) => {
//       console.log(state, action);
//     },
//     decrement: (state, action) => {
//       console.log(state, action);
//     },
//     add: (state, action) => {
//       console.log(state, action);
//     },
//     subtract: (state, action) => {
//       console.log(state, action);
//     },
//   },
// });

// // STEP 3: configureStore - Main Redux central store create karne ke liye
// const counterStore = configureStore({
//   reducer: {
//     // Aapne Main Store ko bataya ki "Counter wala sara data aur logic is slice ke paas hai.
//     // Main Store ko batane ke liye counterSlice.reducer kyu likha ?
//     // createSlice sirf ek simple object nahi banata, balki background me do alag-alag cheezein taiyar karta hai
//     // Actions (counterSlice.actions) -> Button click par call hone wale functions (jaise increment(), decrement()).
//     // Reducer (counterSlice.reducer) -> Iska seedha matlab hai ki Reducer wo Function/Code hai jo purani state ko leta hai aur decision leta hai ki nayi state kya hogi.
//     counter: counterSlice.reducer,
//   },
// });

// // STEP 4. Exports
// // Kyu: Jab aap kisi React component se dispatch karenge (jaise button click par), toh aapko action functions ki zarurat hogi.
// // createSlice automatically har reducer function ke liye ek action creator bana deta hai (counterActions.increment(), counterActions.add(5), etc.).
// export const counterActions = counterSlice.actions;
// export default counterStore;

/*

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    // ...store
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    // ...store
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    // ...store
    return {
      ...store,
      counter: store.counter + Number(action.payload.num),
    };
  } else if (action.type === "SUBTRACT") {
    // ...store
    return {
      ...store,
      counter: store.counter - Number(action.payload.num),
    };
  } else if (action.type === "PRIVACY_TOGGLE") {
    // ...store
    return { ...store, privacy: !store.privacy };
  }
  return store;
}; */

// Notes :

// Q. (Code Challenge)
// Agar aapko add reducer ke dwara state me koi custom number (jaise 5 ya 10) plus karna ho, toh Reducer ke andar action.payload ka use karke code kaise likhenge?

// add: (state, action) => {
//   // Yahan kya code aayega?
// }

// Sahi Code:
// add: (state, action) => {
//   state.counterVal += action.payload;
// }
// Yeh Kaise Kaam Karta Hai?
// Jab aap React component se dispatch karenge:

// JavaScript
// dispatch(counterActions.add(5)); // Aapne '5' pass kiya
// Redux automatic is 5 ko action.payload bana deta hai (action.payload = 5).

// Reducer me state.counterVal += action.payload chalega aur 0 + 5 = 5 ho jayega.

// Aapka concept baki sab jagah ekdam clear hai! Bas action.payload wala syntax dhyan rakhna.

// 17.03.50
// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { counterVal: 0 },
//   reducers: {
//     increment: (state) => {
//       state.counterVal++;
//     },
//     decrement: (state) => {
//       state.counterVal--;
//     },
//     add: (state, action) => {
//       // Controls component me : dispatch(counterActions.add({num: inputElement.current.value,}),);
//       // action call karte waqt bracket () ke andar jo bhi data bhejte hain, Redux usko automatically action.payload ke andar daal deta hai.
//       // state.counterVal += Number(action.payload.num);
//       // 17.07.18
//       state.counterVal += Number(action.payload);
//     },
//     subtract: (state, action) => {
//       state.counterVal -= Number(action.payload);
//     },
//   },
// });

// const counterStore = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//   },
// });

// export const counterActions = counterSlice.actions;
// export default counterStore;

// 17.08.46
// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { counterVal: 0 },
//   reducers: {
//     increment: (state) => {
//       state.counterVal++;
//     },
//     decrement: (state) => {
//       state.counterVal--;
//     },
//     add: (state, action) => {
//       state.counterVal += Number(action.payload);
//     },
//     subtract: (state, action) => {
//       state.counterVal -= Number(action.payload);
//     },
//   },
// });

// // Imp
// const privacySlice = createSlice({
//   name: privacy,
//   initialState: false,
//   reducers: {
//     toggle: (state) => {
//       return (state = !state);
//     },
//   },
// });

// const counterStore = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//     //
//     privacy: privacySlice.reducer,
//   },
// });

// export const counterActions = counterSlice.actions;
// //
// export const privacyActions = privacySlice.actions;
// export default counterStore;

// 17.11.49
// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { counterVal: 0 },
//   reducers: {
//     increment: (state) => {
//       state.counterVal++;
//     },
//     decrement: (state) => {
//       state.counterVal--;
//     },
//     add: (state, action) => {
//       state.counterVal += Number(action.payload);
//     },
//     subtract: (state, action) => {
//       state.counterVal -= Number(action.payload);
//     },
//   },
// });

// const privacySlice = createSlice({
//   name: privacy,
//   initialState: false,
//   reducers: {
//     toggle: (state) => {
//       return (state = !state);
//     },
//   },
// });

// const counterStore = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,

//     privacy: privacySlice.reducer,
//   },
// });

// export const counterActions = counterSlice.actions;

// export const privacyActions = privacySlice.actions;
// export default counterStore;

// 17.13.42
import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySlice from "./privacy";

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,

    privacy: privacySlice.reducer,
  },
});

export default counterStore;
