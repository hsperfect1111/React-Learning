// after 5:34 min : Yaha Ui re-render nhi ho raha tha woh hum dekhege is topic me 5:39:19 min (26. Managing State me)
// import FoodItems from "./components/FoodItems";
// import ErrorMessage from "./components/ErrorMessage";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Container from "./components/Container";
// import FoodInput from "./components/FoodInput";
// import { useState } from "react";

// function App() {
//   let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
//   let [textToShow, setTextState] = useState("Food Item Entered by user");

//   console.log(`Current value of textState : ${textToShow}`);

//   const handleOnChange = (event) => {
//     console.log(event.target.value);
//     setTextState(event.target.value);
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

// after 5:52 min
// import FoodItems from "./components/FoodItems";
// import ErrorMessage from "./components/ErrorMessage";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Container from "./components/Container";
// import FoodInput from "./components/FoodInput";
// import { useState } from "react";

// function App() {
//   let [foodItems, setFoodItems] = useState(["Dal", "Green Vegetable", "Roti"]);
//   let [textToShow, setTextState] = useState("Food Item Entered by user");

//   const handleOnChange = (event) => {
//     console.log(event.target.value);
//     setTextState(event.target.value);
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

// after 5:56 min
// import FoodItems from "./components/FoodItems";
// import ErrorMessage from "./components/ErrorMessage";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import Container from "./components/Container";
// import FoodInput from "./components/FoodInput";
// import { useState } from "react";

// function App() {
//   let [foodItems, setFoodItems] = useState(["Dal", "Green Vegetable", "Roti"]);
//   let [textToShow, setTextState] = useState("Food Item Entered by user");

//   const onKeyDown = (event) => {
//     if (event.key === "Enter") {
//       let newFoodItem = event.target.value;
//       console.log("Food value entered is " + newFoodItem);
//     }
//   };

//   return (
//     <>
//       <Container>
//         <h1 className="food-heading">Healthy Food</h1>
//         <ErrorMessage items={foodItems}></ErrorMessage>
//         <FoodInput handleKeyDown={onKeyDown}></FoodInput>
//         <FoodItems items={foodItems}></FoodItems>
//       </Container>
//     </>
//   );
// }

// export default App;

// after 6:00 min
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      // Input Value Lena newFoodItem me
      let newFoodItem = event.target.value;
      // Input Value Lene ke baar empty kr dena
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;

// after 6:04 min
// When the Buy button is clicked, that specific item should change its color.
