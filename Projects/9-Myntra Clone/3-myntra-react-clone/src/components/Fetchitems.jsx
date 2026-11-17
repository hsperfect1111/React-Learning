// 18.56.08
// jo humne fetchStatusSlice banaya hai woh hum HomeItem me use karege items ke base pe
// Humne items ko home ke andar nikala hai
// home hi woh component hoga jo make sure karega ki mereko items mile hai ki nii mile hai
// us bases pr fetching ko start karu
// 18.57.27
// import { useSelector } from "react-redux";
// // React component ka naam hamesha Capital letter se shuru hona chahiye (FetchItems)
// const FetchItems = () => {
//   // Yaha par Redux Store se state fetchStatus state extract ho rahi hai useSelector hook ka use karke.
//   // Is component (FetchItems) mein Redux store se fetchStatus slice ki current value li ja rahi hai taaki UI par show kiya ja sake ki data fetch ho gaya hai ya abhi fetch ho raha hai.
//   const fetchStatus = useSelector((store) => store.fetchStatus);
//   return (
//     <>
//       <div>
//         Fetch Done : {fetchStatus.fetchDone}
//         currently Fetching: {fetchStatus.currentlyFetching}
//       </div>
//     </>
//   );
// };

// export default FetchItems;

// 18.58.34
// FetchItems ko kaha use kr skte hai ?
// Home component ke andar use kr skte hai mere kyuki items ko fetch (kyuki items ko fetch home me kiya h useSelector hook se) krne sbse phele home me aate hai
// to item ko fetch krne ki jimmedari kiski hai home ki
// but agar koi directly app kholta hai aur bag page pr jata hai to kya hoga ?
// tb to items hi fetch nhi hua hoge
// to fir FetchItems ko hum kaha rakhte hai ?
// App component ke andar rakhte hai
// kyuki dono cases me App load humesha hota hai to hum isko App me render kr dege

// 19.00
// NOTE : backend start krne ke liye watch timestamp this: 17.27.54-28.51
// PS C:\Users\Himanshu\OneDrive\Documents\prashant-react\Projects\9-Myntra Clone\3-myntra-react-clone> cd ../2-actual-backend
// PS C:\Users\Himanshu\OneDrive\Documents\prashant-react\Projects\9-Myntra Clone\2-actual-backend> npm install
// PS C:\Users\Himanshu\OneDrive\Documents\prashant-react\Projects\9-Myntra Clone\2-actual-backend> npm start
// npm install : Kiske liye: Backend ke saare zaroori packages aur dependencies ko install karne ke liye.
// npm start : Kiske liye: Backend server ko start (run) karne ke liye.

// Ye React component server se items fetch karne ka kaam kar raha hai Redux ke sath.
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const FetchItems = () => {
//   // State read karna: useSelector se Redux store se fetchStatus nikala ja raha hai taaki pata chale ki items pehle hi fetch ho chuke hain ya nahi (fetchDone).
//   const fetchStatus = useSelector((store) => store.fetchStatus);
//   const dispatch = useDispatch();

//   // Conditional fetching: useEffect mein check hota hai ki agar fetchStatus.fetchDone true hai, toh code yahin return ho jaata hai aur dubara fetch nahi hota.
//   useEffect(() => {
//     if (fetchStatus.fetchDone) return;

//     // AbortController: Agar fetch karna baaki hai, toh ek AbortController banta hai. Yeh ensure karta hai ki agar component unmount ho jaye, toh ongoing network request cancel ho jaye taaki memory leak ya state update error na aaye.
//     const controller = new AbortController(); // Yeh ek aisa object banata hai jisse aap kisi bhi chal rahe asynchronous task (jaise fetch request) ko beech mein hi rok (abort) sakte ho.
//     const signal = controller.signal; // Yeh signal object ko hum fetch request ke andar pass karte hain (fetch(url, { signal })). Isse fetch ko pata chalta hai ki is request par is controller ki nazar hai.

//     // API call: http://localhost:8080/items par GET request jaati hai, response ko JSON mein convert karke console par log kiya ja raha hai.
//     fetch("http://localhost:8080/items", { signal })
//       .then((res) => res.json())
//       .then(({ items }) => {
//         console.log("Items fetched", items);
//       });

//     // Yeh useEffect ka cleanup function hai. Jab component unmount hota hai (screen se hat jata hai) ya dubara render hone se pehle purana effect clean hota hai, toh yeh function call ho jata hai. Yeh chal rahi API request ko turant cancel kar deta hai.
//     // {Aise samjho bhai—maan lo tumne ek dukaan wale ko order diya (API call ki) aur woh samaan pack kar hi raha tha ki tumne dukaan hi chhod di (component unmount ho gaya).
//     // Ab agar woh samaan bhejta rahega toh kachra hoga. Toh tumne pehle hi ek 'remote' (AbortController) apne paas rakh liya. Jaise hi tum wahan se hate, tumne remote ka button daba diya (controller.abort()), aur dukaan wale ne kaam wahin rok diya.}
//     return () => {
//       controller.abort();
//     };
//   }, [fetchStatus]);

//   return (
//     <>
//       <div>
//         Fetch Done : {fetchStatus.fetchDone}
//         currently Fetching: {fetchStatus.currentlyFetching}
//       </div>
//     </>
//   );
// };

// export default FetchItems;

// 19.04.56
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { itemsActions } from "../store/itemsSlice";

// const FetchItems = () => {
//   const fetchStatus = useSelector((store) => store.fetchStatus);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (fetchStatus.fetchDone) return;

//     const controller = new AbortController();
//     const signal = controller.signal;

//     fetch("http://localhost:8080/items", { signal })
//       .then((res) => res.json())
//       .then(({ items }) => {
//         // yaha backend se data fetch karke Redux store mein save kiya ja raha hai.
//         // Fetched items ko Redux store mein save karne ke liye
//         // itemsSlice ke reducer action (addInitialItems) ko dispatch kar rahe hain

//         // itemsActions (itemsSlice.actions) Redux ko yeh batata hai ki Store mein kaunsa function chalana hai aur uske saath kaunsa data bhejna hai.
//         dispatch(itemsActions.addInitialItems(items[0])); // Redux action trigger kar raha hai taaki yeh saare fetched items Redux store mein save ho jayein aur app ke baaki components unhe use kar sakein. (Dhyan de: yahan ek closing bracket ) missing hai code mein!)

//         console.log("Items fetched", items);
//       });

//     return () => {
//       controller.abort();
//     };
//   }, [fetchStatus]);

//   return (
//     <>
//       <div>
//         Fetch Done : {fetchStatus.fetchDone}
//         currently Fetching: {fetchStatus.currentlyFetching}
//       </div>
//     </>
//   );
// };

// export default FetchItems;

// Unhandled AbortError + React Strict Mode
// React 18 me Strict Mode enabled rehta hai. Iski wajah se React development mode me
// aapke component ko do baar mount aur unmount karta hai:

// 1. Pehli baar Mount hua: fetch() request start hui.

// 2. Turant Unmount hua: useEffect ka cleanup function chala aur controller.abort()
// ne chal rahi request ko beech me hi cancel (abort) kar diya.

// 3. Dusri baar Mount hua: Nayi request start hui.

// Jab JavaScript me koi fetch request AbortController se cancel hoti hai, toh woh ek
// AbortError phenkti hai. Pehle aapke code me .catch() block nahi laga tha, isiliye woh error
// catch nahi ho payi aur browser console me Uncaught (in promise) AbortError bankar dikh rahi thi.

// NOTE :
// Asal mein, addInitialItems: (state, action) mein jo do arguments (state aur action) hain, unhe Redux khud internally (automatically) pass karta hai, aapko manually pass nahi karna padta.

// 1. Aap kya pass karte hain? (dispatch ke time)
// Jab aap component mein likhte hain:

// JavaScript
// dispatch(itemsActions.addInitialItems(items));

// Aap yahan sirf items (data) pass kar rahe hain.

// Redux Toolkit is items ko uthakar ek Action Object ke payload property mein daal deta hai. Wo object kuch aisa dikhta hai:

// JavaScript
// // Redux dwara banaya gaya Action Object:
// {
//   type: "items/addInitialItems",
//   payload: items // <--- Yeh aapka bheja hua argument hai
// }

// 2. Reducer ko dono arguments kaise milte hain?

// Jab dispatch hota hai, toh Redux Store aapke reducer function ko khud hi 2 arguments dekar call karta hai:

// 1. Pehla Argument (state): Redux Store Redux ki current (existing) state ko khud pass karta hai.

// 2. Dusra Argument (action): Redux Store upar banaye gaye Action Object ko pass karta hai (jisme action.payload ke andar aapka bheja hua items hota hai).

// Visual Comparison (Peeche Kya Ho Raha Hai)
// Aap Kya Likhte Hain (Component mein)          Redux Internally Kya Karta Hai (Store mein)
// ------------------------------------          -------------------------------------------
// itemsActions.addInitialItems(items)           Redux call karta hai:
//                                               addInitialItems(currentState, { type: "items/addInitialItems", payload: items })

// 19.08.35
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  console.log(fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        //
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items[0])); // Redux action trigger kar raha hai taaki yeh saare fetched items Redux store mein save ho jayein aur app ke baaki components unhe use kar sakein. (Dhyan de: yahan ek closing bracket ) missing hai code mein!)

        console.log("Items fetched", items);
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
      <div>
        Fetch Done : {fetchStatus.fetchDone}
        currently Fetching: {fetchStatus.currentlyFetching}
      </div>
    </>
  );
};

export default FetchItems;

// 19.11.00
