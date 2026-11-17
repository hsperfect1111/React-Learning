// 18.16.00
// Jab aap usme ./components/HomeItem.jsx likhte hain, toh Vite usse src/routes/components/HomeItem.jsx me dhoondhta hai — jo ki exist nahi karta!
// 💡 Solution (Double dot .. use karein):
// Aapko pehle routes folder se bahar aakar src me aana hoga, fir components me jaana hoga:
// import HomeItem from "../components/HomeItem.jsx";

// const Home = () => {
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
//       <div className="items-container">
//         <HomeItem item={item} />
//       </div>
//     </main>
//   );
// };

// export default Home;

// 18.44.43
// import { useSelector } from "react-redux";
// import HomeItem from "../components/HomeItem.jsx";

// const Home = () => {
//   // Data Nikalna: Ye line Redux Store ke andar jaati hai aur wahan se items ka data nikaal kar seedhe Home component ko de deti hai.
//   // Auto-Update (Re-render): Redux store mein jab bhi data badlega (jaise naye products aayenge), Home component ko automatically pata chal jayega aur bina page refresh kiye screen par naya data dikh jayega.

//   // Yahan store ka matlab myntraStore hi hai!
//   // Jab aap useSelector likhte hain, toh uske andar ka arrow function Redux store ko as an argument (parameter) khud-ba-khud deta hai. Aap is parameter ka naam apni marzi se kuch bhi rakh sakte hain.

//   // Toh phir store.items mein items kahan se aaya?
//   // Ye items wahi naam hai jo aapne configureStore banate waqt reducer ke andar diya tha:
//   const items = useSelector((store) => store.items);
//   console.log(items);

//   return (
//     <main>
//       <div className="items-container">
//         {/* HomeItem: Yeh ek child component hai jo ek single product ka card (image, company name, price, rating, "Add to Bag" button, etc.) screen par dikhata hai. */}
//         {/* items[0]: Kyunki aapne upar useSelector se Redux store se items mangwaya hai aur items ek Array ([]) hai, isliye items[0] ka matlab hai array ka pehla item (index 0 wala product). */}
//         <HomeItem item={items[0]} />
//       </div>
//     </main>
//   );
// };

// export default Home;

// 18.46.28

import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <main>
      <div className="items-container">
        {/* Redux store se aaye saare products par loop chala kar unka ek-ek karke HomeItem card render kar rahe hain. */}
        {/* <HomeItem item="{item}"/> : Har product ke liye ek naya <HomeItem/> card screen par render hoga aur us single product ka data item prop ke zariye us component ko pass ho jayega. */}
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
