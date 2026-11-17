// 17.49.46
// import Header from "./Header";
// import Footer from "./Footer";
// const Bag = () => {
//   return (
//     <>
//       <Header />
//       <main>
//         <div className="bag-page">
//           <div className="bag-items-container"></div>
//           <div className="bag-summary"></div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Bag;

// 18.18.33
// import BagSummary from "../components/BagSummary";
// import BagItem from "../components/BagItem";
// const Bag = () => {
//   const item = {
//     id: "001",
//     image: "images/1.jpg",
//     company: "Carlton London",
//     item_name: "Rhodium-Plated CZ Floral Studs",
//     original_price: 1045,
//     current_price: 606,
//     discount_percentage: 42,
//     return_period: 14,
//     delivery_date: "10 Oct 2023",
//     rating: {
//       stars: 4.5,
//       count: 1400,
//     },
//   };

//   return (
//     <main>
//       <div className="bag-page">
//         <div className="bag-items-container">
//           <BagItem item={item} />
//         </div>
//         <BagSummary />
//       </div>
//     </main>
//   );
// };

// export default Bag;

// 19.37.37
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";
const Bag = () => {
  // imp
  // Yeh code Bag (Cart) page ke andar isliye likha gaya hai taaki hum screen par sirf wahi items dikha sakein jo user ne bag mein add kiye hain, saare products nahi.

  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  // .filter ek loop chalayega
  // chalayega  kiske upar?
  // items ke upar
  // to isliye single element ko item naam diya gaya h
  // Aap iska naam kuch bhi rakh sakte hain — jaise (product) => { ... } ya (element) => { ... }
  const finalItems = items.filter((item) => {
    // imp
    // 1. .indexOf() khud ek loop aur comparison karta hai!
    // Jab aap likhte hain bagItems.indexOf(item.id), toh JavaScript background mein bagItems array ke andar ek-ek ID ko utha kar item.id ke saath === (strict comparison) karta hai!
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {/*  */}
          {finalItems.map((item) => (
            // BagItem.jsx naam ka component receive karega item prop (jaise const BagItem = ({ item }) => ...)
            <BagItem item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;

// NOTES:
// Redux store mein do alag-alag cheezein hoti hain:

// 1. bag: Isme sirf added items ki IDs hoti hain (jaise ["001", "003"]). Isme product ka naam, photo ya price nahi hota.

// 2. items: Isme saare products ki master list hoti hai (website ke saare kapde/shoes jo database mein hain).

// Toh ab sawal yeh hai ki sirf IDs (bag) ko dekh kar poori details (items) kaise nikali jayein? Isi problem ko solve karne ke liye yeh code likha gaya hai!

// 1. const bagItems = useSelector((state) => state.bag);
// Kyun likha hai: Redux store se un sabhi items ki IDs nikalne ke liye jo user ne bag mein add ki hain.

// 2. const items = useSelector((state) => state.items);
// Kyun likha hai: Website par jitne bhi total products available hain, unki poori list (jisme photo, price, naam sab hota hai) Redux store se nikalne ke liye.

// 3. const finalItems = items.filter((item) => { ... })
// Kyun likha hai: Saare products (items) par loop chala kar unhe filter karne ke liye. Hum sirf unhi items ko rakhna chahte hain jo user ke bag mein hain.

// imp 4. const itemIndex = bagItems.indexOf(item.id);
// Kyun likha hai: Yeh check karne ke liye ki current product ki ID (item.id) user ke bagItems (IDs wali array) ke andar maujood hai ya nahi.

// 5. return itemIndex >= 0;
// Kyun likha hai: Agar product ki ID bag mein mil gayi (yani index -1 se bada hai), toh yeh true return karta hai aur woh product finalItems mein shamil ho jata hai. Agar ID nahi milti, toh woh product chhoot jata hai.

// comparison chhupa hua hai
// .indexOf() khud ek loop aur comparison karta hai!
// 1. .indexOf() khud ek loop aur comparison karta hai!
// Jab aap likhte hain bagItems.indexOf(item.id), toh JavaScript background mein bagItems array ke andar ek-ek ID ko utha kar item.id ke saath === (strict comparison) karta hai!

// // JavaScript ke andar indexOf ka logic (sirf samajhne ke liye)
// for (let i = 0; i < bagItems.length; i++) {
//   if (bagItems[i] === item.id) {  // <-- YAHAN HO RAHA HAI ASLI COMPARE!
//     return i; // Agar match mil gaya, toh uski position (0, 1, 2...) wapas bhej do
//   }
// }
// return -1; // Agar kisi se bhi match nahi hua, toh -1 wapas bhej do

// to basically itemIndex ke andar kya aayega ?
// itemIndex ke andar sirf ek number (integer) aayega — jo us item ki bagItems array ke andar position (index) batata hai!

// Ismein sirf do hi tarah ke numbers aa sakte hain:

// 1. Agar item bag mein mil gaya: Toh 0 ya usse bada number aayega (jaise 0, 1, 2, 3... jitni uski position hogi).
// 2. Agar item bag mein nahi mila: Toh hamesha -1 aayega.

// finalItems ke andar ek naya Array aayega jisme sirf unhi products ke poore objects honge jo user ne apne Bag mein add kiye hain.

// finalItems ke andar kya aayega?
// Filter hone ke baad finalItems mein sirf "002" wala poora object bachega

// .filter(...) (Loop ki tarah kaam karta hai)
// Jab aap items.filter(...) likhte hain, toh JavaScript is items array ke upar ek loop chalata hai
