// 18.37.00
// import { createSlice } from "@reactjs/toolkit";
// const itemsSlice = createSlice({
//   name: "items",
//   initialState: [],

//   reducers: {
//     addInitialItems: (store, action) => {
//       return store;
//     },
//   },
// });

// // Yaha pr hum 2 cheej export krte hai
// // hum Redux Toolkit ke automatically generated action creators ko export kar rahe hain, taaki hum unhe apne React components ke andar use kar sakein.
// // itemsSlice.actions kya karta hai?
// // Jab aap createSlice ke andar reducers object mein koi function likhte hain (jaise addInitialItems), toh Redux Toolkit khud-ba-khud us naam ka ek Action Creator function bana deta hai.
// export const itemsActions = itemsSlice.action;
// export default itemsSlice;

// 18.38.54

// import { createSlice } from "@reactjs/toolkit";
// const itemsSlice = createSlice({
//   name: "items",
//   initialState: [
//     {
//       id: "001",
//       image: "images/1.jpg",
//       company: "Carlton London",
//       item_name: "Rhodium-Plated CZ Floral Studs",
//       original_price: 1045,
//       current_price: 606,
//       discount_percentage: 42,
//       return_period: 14,
//       delivery_date: "10 Oct 2023",
//       rating: {
//         stars: 4.5,
//         count: 1400,
//       },
//     },
//   ],

//   reducers: {
//     addInitialItems: (store, action) => {
//       return store;
//     },
//   },
// });
// export const itemsActions = itemsSlice.action;
// export default itemsSlice;

// 18.43.21
// import { createSlice } from "@reduxjs/toolkit";
// import { DEFAULT_ITEMS } from "../data/items";
// const itemsSlice = createSlice({
//   name: "items",
//   initialState: DEFAULT_ITEMS,
//   // Yahan store (ya jise kuch log state bhi kehte hain) wahan se aa raha hai jo aapne us slice ki initialState mein define kiya tha.
//   reducers: {
//     addInitialItems: (store, action) => {
//       return store;
//     },
//   },
// });
// export const itemsActions = itemsSlice.actions;
// export default itemsSlice;

// 19.05.26
// import { createSlice } from "@reduxjs/toolkit";
// import { DEFAULT_ITEMS } from "../data/items";
// const itemsSlice = createSlice({
//   name: "items",
//   initialState: DEFAULT_ITEMS,
//   reducers: {
//     addInitialItems: (store, action) => {
//       //
//       console.log("reducer", store, action);
//       return store;
//     },
//   },
// });

// export const itemsActions = itemsSlice.actions;
// export default itemsSlice;

// 19.06.07
import { createSlice } from "@reduxjs/toolkit";
const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    // Yeh wala function hi "reducer" hai!
    addInitialItems: (state, action) => {
      // Now, store ki new value return krni h
      // action.payload mein backend se aaye hue items ki list (array) hoti hai
      // Is array ko return karke hum Redux store ki state ko new items se update kar rahe hain

      // return action.payload; kyu likha hai ?
      // kyuki aap chahte hain ki initial items ki jo bhi array aaye, woh seedhe aapki store ki state ban jaye.
      return action.payload;
    },
  },
});

// itemsSlice.actions Redux Toolkit ki createSlice function dwara automatically generate karke diya jata hai.
// Yeh Redux ko yeh batata hai ki Store mein kaunsa function chalana hai aur uske saath kaunsa data bhejna hai.
export const itemsActions = itemsSlice.actions;
export default itemsSlice;

// Notes:
// Step 1
// Jab aapki app pehli baar khulti hai, toh aap API (backend server) se saare items mangwate hain. Server se aapko yeh 2 items ka array milta hai:

// JavaScript
// const serverSeAayaData = [
//   { id: 1, name: "T-Shirt", price: 500 },
//   { id: 2, name: "Jeans", price: 1200 }
// ];

// Step 2
// Ab aap is data ko Redux store mein bhejna (save karna) chahte hain. Iske liye aap component ke andar dispatch karenge:

// JavaScript
// // Aapne action dispatch kiya aur server ka data payload mein bhej diya
// dispatch(itemsActions.addInitialItems(serverSeAayaData));

// Step 3
// Yahan action.payload kya ban gaya?
// Jab yeh action Redux slice ke reducer ke paas pahuchega, toh Redux isko aise object mein wrap kar dega:

// yaha kis reducer ke pass bhejne ki baat ki jaa rahi hai
// Yahan "reducer" se matlab us function se hai jo aapne khud createSlice ke andar reducers: object ke andar banaya hai (jaise aapke code mein addInitialItems reducer hai).

// JavaScript
// {
//   type: "items/addInitialItems",
//   payload: [
//     { id: 1, name: "T-Shirt", price: 500 },
//     { id: 2, name: "Jeans", price: 1200 }
//   ]
// }

// Yahan action.payload wahi data hai jo aapne bheja tha (serverSeAayaData).

// Note2:
// yaha kis reducer ke pass bhejne ki baat ki jaa rahi hai
// Yahan "reducer" se matlab us function se hai jo aapne khud createSlice ke andar reducers: object ke andar banaya hai (jaise aapke code mein addInitialItems reducer hai).

// Beech mein kya hota hai?
// 1. Action Creator: Jab aap itemsActions.addInitialItems(serverSeAayaData) likhte hain, toh Redux ka action creator ek plain JavaScript object banata hai:

// JavaScript
// {
//   type: "items/addInitialItems",
//   payload: serverSeAayaData
// }

// 2. Dispatch: Phir yeh object dispatch ke zariye Redux store ke paas jaata hai.
// 3. Reducer Call: Redux store dekhta hai ki iska type "items/addInitialItems" hai, aur phir
// woh aapke banaye hue reducer (addInitialItems function) ko call karta hai aur us object
// ko as an action argument pass kar deta hai:

// JavaScript
// addInitialItems(state, action) // Redux yeh function khud call karta hai!
