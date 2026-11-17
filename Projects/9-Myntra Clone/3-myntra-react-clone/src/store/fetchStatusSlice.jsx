// 18.50.02
// @reduxjs/toolkit package ke andar bohot saare functions hote hain (jaise configureStore, createSlice, createAsyncThunk, etc.).
// { createSlice } likhne se JS compiler ko pata chalta hai ki hum @reduxjs/toolkit me se sirf createSlice naam ke specific function ko nikal rahe hain.
// import { createSlice } from "@reduxjs/toolkit";

// const fetchStatusSlice = createSlice({
//   name: "fetchStatus",
//   // jab aapka app ya component pehli baar load hota hai, toh ye variables (flags) kis state mein rahenge, ye batata hai.
//   initialState: {
//     fetchDone: false, // false: "PENDING" and true: "DONE" // Matlab abhi tak data server se fetch nahi hua hai.
//     currentlyFetching: false, // Matlab abhi background mein koi data fetch hone ki process nahi chal rahi hai.
//   },
//   reducers: {
//     // markFetchDone (Pehli Baar Ka Fetching Process Poora Ho Chuka Hai)
//     markFetchDone: (store, action) => {
//       return store;
//     },
//     // markFetchingStarted (Fetching Shuru Ho Gayi)
//     markFetchingStarted: (store, action) => {
//       return store;
//     },
//     // markFetchingFinished (Fetching Khatam Ho Gayi)
//     markFetchingFinished: (store, action) => {
//       return store;
//     },
//   },
// });

// // fetchStatusActions: Isse aap in actions (markFetchDone, etc.) ko apne components mein useDispatch ke zariye call kar paayenge.
// export const fetchStatusActions = fetchStatusSlice.actions;

// export default fetchStatusSlice;

// NOTES:
// markFetchDone, markFetchingStarted, aur markFetchingFinished ye teeno Redux Actions / Reducers hain.
// Inka kaam Redux store ke andar fetchStatus ki state (values) ko update/change karna hota hai jab API call ka different stage chal raha hota hai.

// 18.54.41
import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      // yaha se return hata diya kyuki : Error tab aata hai jab aap mutate bhi karein aur return bhi karein
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      //
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      //
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;

// NOte :
// Aapne slice banate waqt name: "fetchStatus" diya hai, aur uske andar initialState mein currentlyFetching: false rakha hai.
// Jab aapne is slice ko apne main Redux store (configureStore) mein register kiya hoga (aam taur par iska naam fetchStatus rakha gaya hoga), toh Redux ne iska naam wahi set kar diya.
// Jab aap useSelector((store) => store.fetchStatus) likhte hain, toh Redux aapko wahi object deta hai jo aapne slice ki initialState mein banaya hai. Isliye store.fetchStatus.currentlyFetching likhte hi aapko true ya false milne lagta hai.

// NOTE :
// markFetchDone, markFetchingStarted, markFetchingFinished kya hai ?
// Reducer Functions hai , Ye aapki application ke state me ye track karne ke liye use hote hain ki API se data fetch hone ka status kya hai

// fetchStatusSlice.actions kya h aur kaha se aa raha hai
// fetchStatusSlice.actions Redux Toolkit dwara automatically generate kiya hua ek object hai

// 1. Ye kahan se aa raha hai?
// Jab aap Redux Toolkit ka createSlice() function call karte hain, toh Redux aapke diye hue reducers object ko dekhta hai aur background mein do cheezein automatically bana deta hai:

// 1. Reducer function (jo state ko change karta hai)
// 2. Action Creators (functions jo action objects return karte hain)

// Redux Toolkit in sabhi action creators ko ek object mein pack karke fetchStatusSlice.actions property ke andar rakh deta hai.

// 2. Ye kya hai aur isme kya hota hai?
// fetchStatusSlice.actions ke andar aapke reducers ke naam se bane hue functions hote hain:

// JavaScript
// fetchStatusSlice.actions = {
//   markFetchDone: () => ({ type: "fetchStatus/markFetchDone" }),
//   markFetchingStarted: () => ({ type: "fetchStatus/markFetchingStarted" }),
//   markFetchingFinished: () => ({ type: "fetchStatus/markFetchingFinished" }),
// };

// Aapko manual action types (jaise "FETCH_DONE") likhne ki zarurat nahi padti. createSlice
// khud slice ka name ("fetchStatus") aur reducer ka naam combine karke type bana leta hai
// (jaise "fetchStatus/markFetchDone").

// 3. Iska istemal kyu aur kahan karte hain?
// Jab aap kisi React component ya thunk function se koi state change karna chahte hain, toh aap inhi action functions ko dispatch karte hain:
// dispatch(fetchStatusActions.markFetchingStarted());
