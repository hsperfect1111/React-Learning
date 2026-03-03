// after 6:41
// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import { useState } from "react";

// function App() {
//   const initalTodoItems = [
//     {
//       name: "Buy Milk",
//       dueDate: "4/10/2023",
//     },
//     {
//       name: "Go to College",
//       dueDate: "4/10/2023",
//     },
//     {
//       name: "Like this video",
//       dueDate: "right now",
//     },
//   ];

//   const [todoItems, setTodoItems] = useState(initalTodoItems);

//   const handleNewItem = (itemName, itemDueDate) => {
//     console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
//   };

//   return (
//     <center className="todo-container">
//       <AppName />
//       <AddTodo onNewItem={handleNewItem} />
//       <TodoItems todoItems={todoItems}></TodoItems>
//     </center>
//   );
// }

// export default App;

// after 6:51
// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import { useState } from "react";

// function App() {
//   const initalTodoItems = [
//     {
//       name: "Buy Milk",
//       dueDate: "4/10/2023",
//     },
//     {
//       name: "Go to College",
//       dueDate: "4/10/2023",
//     },
//     {
//       name: "Like this video",
//       dueDate: "right now",
//     },
//   ];

//   const [todoItems, setTodoItems] = useState(initalTodoItems);

//   const handleNewItem = (itemName, itemDueDate) => {
//     console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);

//   };

//   return (
//     <center className="todo-container">
//       <AppName />
//       <AddTodo onNewItem={handleNewItem} />
//       <TodoItems todoItems={todoItems}></TodoItems>
//     </center>
//   );
// }

// export default App;

// after 7:00
// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import { useState } from "react";

// function App() {
//   const initalTodoItems = [
//     {
//       name: "Buy Milk",
//       dueDate: "4/10/2023",
//     },
//     {
//       name: "Go to College",
//       dueDate: "4/10/2023",
//     },
//     {
//       name: "Like this video",
//       dueDate: "right now",
//     },
//   ];

//   const [todoItems, setTodoItems] = useState(initalTodoItems);

//   const handleNewItem = (itemName, itemDueDate) => {
//     console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
//     // kaise naya todo add hoga ?
//     // jisme name aur dueDate hai
//     const newTodoItems = [
//       ...todoItems,
//       {
//         name: itemName,
//         dueDate: itemDueDate,
//       },
//     ];
//     setTodoItems(newTodoItems);
//   };

//   return (
//     <center className="todo-container">
//       <AppName />
//       <AddTodo onNewItem={handleNewItem} />
//       <TodoItems todoItems={todoItems}></TodoItems>
//     </center>
//   );
// }

// export default App;

// after 7:02
// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import { useState } from "react";
// import WelcomeMessage from "./components/WelcomeMessage";

// function App() {
//   const initalTodoItems = [
//     {
//       name: "Buy Milk",
//       dueDate: "4/10/2023",
//     },
//     {
//       name: "Go to College",
//       dueDate: "4/10/2023",
//     },
//     {
//       name: "Like this video",
//       dueDate: "right now",
//     },
//   ];

//   const [todoItems, setTodoItems] = useState(initalTodoItems);

//   const handleNewItem = (itemName, itemDueDate) => {
//     console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);

//     const newTodoItems = [
//       ...todoItems,
//       {
//         name: itemName,
//         dueDate: itemDueDate,
//       },
//     ];
//     setTodoItems(newTodoItems);
//   };

//   return (
//     <center className="todo-container">
//       <AppName />
//       <AddTodo onNewItem={handleNewItem} />
//       {/* Welcome component kb dikhana hai jb todoItems.length === 0 ho */}
//       {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
//       <TodoItems todoItems={todoItems}></TodoItems>
//     </center>
//   );
// }

// export default App;

// after 7:06
// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import { useState } from "react";
// import WelcomeMessage from "./components/WelcomeMessage";

// function App() {
//   // Agar humari initial value de deta hu blank to Welcome component chalega aur Enjoy your de aa jayega
//   const [todoItems, setTodoItems] = useState([]);

//   const handleNewItem = (itemName, itemDueDate) => {
//     console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);

//     const newTodoItems = [
//       ...todoItems,
//       {
//         name: itemName,
//         dueDate: itemDueDate,
//       },
//     ];
//     setTodoItems(newTodoItems);
//   };

//   return (
//     <center className="todo-container">
//       <AppName />
//       <AddTodo onNewItem={handleNewItem} />
//       {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
//       <TodoItems todoItems={todoItems}></TodoItems>
//     </center>
//   );
// }

// export default App;

// after 7:09
// Todo list ka state App component ke paas hai

// Structure kuch aisa hai:
// App
//   └── TodoItems
//         └── TodoItem
//               └── Delete Button

// Delete button TodoItem ke andar hai,
// lekin list ko update karne ka power sirf App ke paas hai

// Isliye delete karne ka method (function)
// App component me hi define hoga

// Fir us function ko props ke through
// App → TodoItems → TodoItem tak pass kiya jayega

// Jab delete button click hoga,
// tab woh App wala delete function call karega

// Final baat:
// 👉 List App ke paas hai
// 👉 Isliye delete method bhi App ke paas hi hoga
// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import { useState } from "react";
// import WelcomeMessage from "./components/WelcomeMessage";

// function App() {
//   const [todoItems, setTodoItems] = useState([]);

//   const handleNewItem = (itemName, itemDueDate) => {
//     console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);

//     const newTodoItems = [
//       ...todoItems,
//       {
//         name: itemName,
//         dueDate: itemDueDate,
//       },
//     ];
//     setTodoItems(newTodoItems);
//   };

//   const handleDeleteItem = (todoItemName) => {
//     console.log(`Item Delete: ${todoItemName}`);
//     // todoItems.filter(todoItems !== todoItem.name);
//   };

//   return (
//     <center className="todo-container">
//       <AppName />
//       <AddTodo onNewItem={handleNewItem} />
//       {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
//       <TodoItems
//         todoItems={todoItems}
//         onDeleteClick={handleDeleteItem}
//       ></TodoItems>
//     </center>
//   );
// }

// export default App;

// after 7:15
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);

    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    // Delete button click hone par item delete karne ke liye filter() method use kar rahe hain

    // filter() hamesha ek naya array return karta hai (original array change nahi hoti)

    // filter() list ke har ek item par chalega
    // Har item ek object hai (line 304-307) (jisme name aur dueDate hai)

    // Jo naam Delete button se mila hai (todoItemName),
    // us naam wale item ko list se hata diya jayega

    // Baaki saare items new array me store ho jayenge

    // {No use samjh ne liye likha hai
    // todoItems ek array hai jo App ke state me hai:
    // const [todoItems, setTodoItems] = useState([]);

    // Example todoItems:
    // [
    //   { name: "Buy Milk", dueDate: "4/10/2023" },
    //   { name: "Go to College", dueDate: "4/10/2023" }
    // ]

    // Jab hum todoItems.filter(...) likhte hain, filter method array ke har element par function call karta hai.
    // Filter ke callback function ka parameter item har iteration me array ka ek element represent karta hai.

    // Iteration Samjho
    // todoItems.filter((item) => item.name !== todoItemName)
    // Pehli iteration: item = { name: "Buy Milk", dueDate: "4/10/2023" }
    // Dusri iteration: item = { name: "Go to College", dueDate: "4/10/2023" }
    // Har item ka name check hota hai: item.name !== todoItemName
    // Agar true → item new array me include hoga
    // Agar false → item remove ho jayega
    // }
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    // console.log(`Item Delete: ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
