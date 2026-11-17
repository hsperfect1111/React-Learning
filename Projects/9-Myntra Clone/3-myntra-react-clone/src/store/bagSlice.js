// 19.19.39
// import { createSlice } from "@reduxjs/toolkit";

// const bagSlice = createSlice({
//   name: "bag",
//   initialState: [],
//   reducers: {
//     // Yeh wala function hi "reducer" hai!
//     addToBag: (state, action) => {
//       // Yaha state ko change kr diya to return krne ki zarurat nahi h
//       state.push(action.payload);
//     },
//     removeFromBag: (state, action) => {
//       // yaha state ko modify nahi kiya hai bilki ek naya array banaya hai to us array ko kr diya hai yaha pr maine return

//       // Yeh line return state.filter((itemId) => itemId != action.payload) Redux state se kisi specific item ko bag se remove (delete) karne ke liye use hoti hai.

//       return state.filter((itemId) => itemId != action.payload);
//     },
//   },
// });

// export const bagActions = bagSlice.actions;
// export default bagSlice;

// Note:
// javascript remove an items from array

// 1. addToBag mein return kyun nahi likha?
// Kyunki state.push() existing array ko direct modify (mutate) kar deta hai. Redux Toolkit mein ImmerJS background mein hota hai jo direct mutation ko handle kar leta hai, isliye naya array return karne ki zaroorat nahi padti.

// 2. removeToBag mein return kyun likhna pada?
// Kyunki .filter() method purane array ko change nahi karta, balki ek bilkul naya array bana kar deta hai. Jab aap naya array banate hain, toh Redux ko batane ke liye ki "yeh hamari nayi state hai", aapko return keyword likhna hi padta hai.

// 1. state: jaise: ["001", "002", "003"].
// 2. .filter(...): Yeh array ke har ek element par loop chalata hai aur sirf unhi items ko naye array mein rakhta hai jo condition ko true prove karein.
// 3. itemId: item ki ID
// 4. itemId != action.payload: Yeh condition hai — "Wahi items rakhna jiski ID user dwara bheji gayi ID (action.payload) ke barabar nahi hai."

// Yeh itemId koi alag se bahar se nahi aa rahi hai, balki yeh state array ka ek ek item (element) hai jo .filter() method automatically har ek round (iteration) mein uthata hai.

// 19.23.57
// import { createSlice } from "@reduxjs/toolkit";

// const bagSlice = createSlice({
//   name: "bag",
//   initialState: ["002", "003"],
//   reducers: {
//     addToBag: (state, action) => {
//       state.push(action.payload);
//     },
//     removeFromBag: (state, action) => {
//       return state.filter((itemId) => itemId != action.payload);
//     },
//   },
// });

// export const bagActions = bagSlice.actions;
// export default bagSlice;

// 19.28.22
import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      return state.filter((itemId) => itemId != action.payload);
    },
  },
});

export const bagActions = bagSlice.actions;
export default bagSlice;
