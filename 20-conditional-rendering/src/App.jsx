// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// function App() {
//   // let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];

//   let foodItems = [];

//   if (foodItems.length === 0) {
//     return <h3>I am still hungry.</h3>;
//   }

//   return (
//     <>
//       <h1>Healthy Food</h1>
//       <ul className="list-group">
//         {foodItems.map((item) => (
//           <li key={item} className="list-group-item">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;

// 3:27 min ---

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// function App() {
//   // let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];

//   let foodItems = [];

//   return (
//     <>
//       <h1>Healthy Food</h1>
//       {foodItems.length === 0 ? <h3>I am still hungry.</h3> :
//       null}
//       <ul className="list-group">
//         {foodItems.map((item) => (
//           <li key={item} className="list-group-item">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;

// 3:28 min ---

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// function App() {
//   let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];

//   // let foodItems = [];
//   let emptyMessage =
//     foodItems.length === 0 ? <h3>I am still hungry.</h3> : null;

//   return (
//     <>
//       <h1>Healthy Food</h1>
//       {emptyMessage}
//       <ul className="list-group">
//         {foodItems.map((item) => (
//           <li key={item} className="list-group-item">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;

// --- 3:28min ---

// Note : falsy value - null undefined empty 0 NAN

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];
  let foodItems = [];

  return (
    <>
      <h1>Healthy Food</h1>
      {foodItems.length === 0 && <h3>I am still hungry.</h3>}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
