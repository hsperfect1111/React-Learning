// 1. Creating the store using
// Import {createStore} from redux.
// 2. Create Reducer

// 1. Npm install redux
// 2. Npm install react-redux
// 3. Create store folder with Index.js file
// 4. Creating the store using
//    Import {createStore} from redux.
// 5. Providing the store with react / 15.57.47 ye provider wala kaam hum main.jsx me krte h
//   1. Provider from react-redux
//   2. <Provider store={store}><App /></Provider>
// 6. Using the store
//   1. useSelector hook gets a slice of the store.
//   Const counter = useSelector(state => state.counter);
//   2. Subscription is already setup and only will re-execute
//   when only your slice is changed. Subscription is
//   automatically cleared also.
// 7. Dispatch Actions using the useDispatch hook.

// 15.54.57
// import { createStore } from "redux";

// const counterReducer = (store, action) => {
//   // Reducer ko state return karni hoti hai, na ki poora store.
//   return store;
// };

// const counterStore = createStore(counterReducer);
// export default counterStore;

// STEP1 : 15.59.17 how to use useSelecter
// import { createStore } from "redux";

// //
// const INITIAL_VALUE = {
//   counter: 0,
// };

// // store = INITIAL_VALUE
// const counterReducer = (store = INITIAL_VALUE, action) => {
//   // 16.8.14
//   if (action.type === "INCREMENT") {
//     return { counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     return { counter: store.counter - 1 };
//   }
//   // console.log("Action Received", action);
//   return store;
// };

// const counterStore = createStore(counterReducer);
// export default counterStore;

// 16.19.14
// import { createStore } from "redux";

// //
// const INITIAL_VALUE = {
//   counter: 0,
//   //
//   privacy: false,
// };

// const counterReducer = (store = INITIAL_VALUE, action) => {
//   // action.type se humara type milega hume
//   if (action.type === "INCREMENT") {
//     return { counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     return { counter: store.counter - 1 };
//   } else if (action.type === "ADD") {
//     // action.payload.num likhna padega payload me se value nikalne ke liye
//     {
//       return { counter: store.counter + Number(action.payload.num) };
//     }
//   } else if (action.type === "SUBTRACT") {
//     {
//       return { counter: store.counter - Number(action.payload.num) };
//     }
//   } else if (action.type === "PRIVACY_TOGGLE") {
//     {
//       //
//       return { privacy: !store.privacy };
//     }
//   }
//   return store;
// };

// const counterStore = createStore(counterReducer);
// export default counterStore;

// 16.28.57
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

// 16.30.59
import { createStore } from "redux";

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
};

const counterStore = createStore(counterReducer);
export default counterStore;
