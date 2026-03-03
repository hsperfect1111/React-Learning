// import Item from "./Item";

// const FoodItems = ({ items }) => {
//   return (
//     <ul className="list-group">
//       {items.map((item) => (
//         <Item
//           key={item}
//           foodItem={item}
//           handleBuyButton={() => console.log(`${item} bought`)}
//         ></Item>
//       ))}
//     </ul>
//   );
// };

// export default FoodItems;

// after 6:04, 6:08
import { useState } from "react";
import Item from "./Item";

// 1️⃣ Component Render Hota Hai
// Parent component se items array aata hai.
const FoodItems = ({ items }) => {
  // 2️⃣ useState Initialize Hota Hai
  // activeItems = [] (empty array se start)
  // Matlab: abhi tak koi item buy nahi hua
  let [activeItems, setActiveItems] = useState([]);

  // 6️⃣ onBuyButton Function Execute Hota Hai
  let onBuyButton = (item, event) => {
    // Current state:
    // activeItems = []

    // Execution:
    // newItems = [...[], "Rice"]

    // Result:
    // newItems = ["Rice"]
    let newItems = [...activeItems, item];
    // setActiveItems(["Rice"])
    setActiveItems(newItems);

    // 7️⃣ State Update → Re-render
    // Jab setActiveItems() call hota hai:
    // 👉 React component ko dobara render karta hai

    // Ab:
    // activeItems = ["Rice"]

    // 8️⃣ Dobara items.map() Chalega
    // Ab check hoga:
    // activeItems.includes(item)

    // For "Rice":
    // ["Rice"].includes("Rice") → true

    // For "Dal":
    // ["Rice"].includes("Dal") → false

    // 9️⃣ Updated Props Item Component Ko Milenge

    // For Rice:
    // bought={true}

    // For Dal:
    // bought={false}

    // Ab Item component is hisaab se UI update karega
  };

  return (
    // 3️⃣ JSX Return Hota Hai
    <ul className="list-group">
      {/* 4️⃣ items.map() Execute Hota Hai */}
      {/* Har item ke liye:

      Example iteration 1:
      item = "Rice" */}
      {items.map((item) => (
        <Item
          // key="Rice"
          key={item}
          // foodItem="Rice"
          foodItem={item}
          // activeItems starting me empty hai
          // to bought={false} ho jayega
          // Kyun false?
          // Kyuki activeItems = [] hai
          // [].includes("Rice") → false
          bought={activeItems.includes(item)}
          // 5️⃣ User "Buy" Button Click Karta Hai
          // Maan lo user ne Rice ka button click kiya.

          // Ye trigger karega:
          // handleBuyButton(event)

          // Jo internally call karega:
          // onBuyButton("Rice", event)
          handleBuyButton={(event) => onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;

// 🔄 Simple Flow Summary

// 1. Component load → activeItems empty
// 2. Items list render hoti hai
// 3. User Buy click karta hai
// 4. Item activeItems me add hota hai
// 5. setState se re-render hota hai
// 6. bought prop true ho jata hai
// 7. UI update ho jata hai
