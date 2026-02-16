// import FoodItems from "./components/FoodItems";
// import ErrorMessage from "./components/ErrorMessage";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Container from "./components/Container";
// import FoodInput from "./components/FoodInput";

// function App() {
//   let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

//   const handleOnChange = (event) => {
//     console.log(event.target.value);
//   };

//   return (
//     <>
//       <Container>
//         <h1 className="food-heading">Healthy Food</h1>
//         <ErrorMessage items={foodItems}></ErrorMessage>
//         <FoodInput handleOnChange={handleOnChange}></FoodInput>
//         <FoodItems items={foodItems}></FoodItems>
//       </Container>
//     </>
//   );
// }

// export default App;

// 5:34 min : Yaha Ui re-render nhi ho raha hai woh dekhege hum next topic me 5:38:49 min (26. Managing State me)
// import FoodItems from "./components/FoodItems";
// import ErrorMessage from "./components/ErrorMessage";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Container from "./components/Container";
// import FoodInput from "./components/FoodInput";

// function App() {
//   let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
//   let textToShow = "Food Item Entered by user";

//   const handleOnChange = (event) => {
//     console.log(event.target.value);
//     textToShow = event.target.value;
//   };

//   return (
//     <>
//       <Container>
//         <h1 className="food-heading">Healthy Food</h1>
//         <ErrorMessage items={foodItems}></ErrorMessage>
//         <FoodInput handleOnChange={handleOnChange}></FoodInput>
//         <FoodItems items={foodItems}></FoodItems>
//       </Container>
//     </>
//   );
// }

// export default App;

// Note :

// Samajhne wali baat

// React UI ko dobara render tab karta hai jab:

// ✅ State change hoti hai

// ✅ Props change hote hain

// Lekin…

// ❌ Normal variable change hone par React ko pata hi nahi chalta.

// ❌ Tumhare case me kya ho raha hai?
// let textToShow = "Food Item Entered by user";

// Yeh sirf ek normal JavaScript variable hai.

// Jab tum likhte ho:

// textToShow = event.target.value;

// Toh:

// Variable ki value change ho jaati hai

// Lekin React ko signal nahi milta ki UI re-render kare

// Isliye screen par kuch update nahi hota

// 🧠 React ka simple rule

// React kehta hai:

// “Agar tum chahte ho ki UI update ho, toh state use karo.”

// ✅ Sahi tarika (State use karke)
// const [textToShow, setTextToShow] = useState("Food Item Entered by user");

// const handleOnChange = (event) => {
//   setTextToShow(event.target.value);
// };

// Ab kya hoga?

// 1. setTextToShow() call hoga
// 2. React samjhega state change hui hai
// 3. Component dobara render hoga
// 4. Nayi value screen par paint ho jayegi 🎉
