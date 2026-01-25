import React from "react";
// 3:08 min How to import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <h1>Healthy Food</h1>
      <ul class="list-group">
        <li className="list-group-item">Dal</li>
        <li className="list-group-item">Green Vegetables</li>
        <li className="list-group-item">Roti</li>
        <li className="list-group-item">Salad</li>
        <li className="list-group-item">Milk</li>
      </ul>
    </>
  );
}

export default App;
