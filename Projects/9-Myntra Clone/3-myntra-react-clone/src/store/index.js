// 18.32 // 18.33
// Yahan aap Redux Toolkit ki madad se itemsSlice naam ka ek State Slice bana rahe hain
// import { createSlice, configureStore } from "@reactjs/toolkit";

// // createSlice({...}): Ye Redux Toolkit ka ek helper function hai jo Redux ki State, Reducers, aur Actions ko ek hi jagah define karne mein madad karta hai.
// const itemsSlice = createSlice({
//   name: "items", // slice ka naam 'items'
//   initialState: [], // state
//   // Ye ek reducer function hai jo state ko update karne ke liye use hota hai
//   // reducer ek obj hota hai
//   //   jisme hota hai ek arrow function, woh function leta h do argument store and action aur return krta hai store
//   reducers: {
//     addInitialItems: (store, action) => {
//       return store;
//     },
//   },
// });

// // Yahan aap Redux Toolkit ki madad se Redux Store create kar rahe hain
// // configureStore({...}): Ye function Redux store ko create karta hai. Redux store wo central jagah hoti hai jahan aapki poori application ka state (data) store hota hai.
// const myntraStore = configureStore({
//   // reducer: { ... }: Store ke andar ek reducer object hota hai jo ye define karta hai ki aapki app mein kaun-kaun se slices hain aur unka data kaise manage hoga.
//   // items: itemsSlice.reducer: Iska matlab hai ki aapne apne store ke andar ek hissa (items naam se) bana diya hai, jiska data manage karne ki zimmedari itemsSlice ki hai jo aapne pichle step mein banaya tha.
//   reducer: {
//     items: itemSlice.reducer,
//   },
// });

// export default myntraStore;

// 18.37.00
// import { configureStore } from "@reduxjs/toolkit";
// import itemsSlice from "./itemsSlice";
// const myntraStore = configureStore({
//   reducer: {
//     items: itemsSlice.reducer,
//   },
// });

// export default myntraStore;

// 18.55.39
// import { configureStore } from "@reduxjs/toolkit";
// import itemsSlice from "./itemsSlice";
// import fetchStatusSlice from "./fetchStatusSlice";
// import bagSlice, { bagActions } from "./bagSlice";
// const myntraStore = configureStore({
//   reducer: {
//     items: itemsSlice.reducer,
//     // add second slice called fetchStatus
//     fetchStatus: fetchStatusSlice.reducer,
//   },
// });

// export default myntraStore;

// 19.20.54
import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice, { bagActions } from "./bagSlice";
const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    // Is line ka matlab yeh hai ki aapne Redux Store ko yeh bata diya hai ki aapki poori app mein bag
    // naam ka ek section (slice) hoga, aur us section ka data kaise manage hoga, yeh bagSlice.reducer sambhalega.
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
