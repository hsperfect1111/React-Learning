// 3:33min
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];
  // let foodItems = [];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>
    </>
  );
}

export default App;
