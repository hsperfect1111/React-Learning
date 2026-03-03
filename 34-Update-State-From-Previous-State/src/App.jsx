// 8:30:17 34-Update-state-from-previous-state , direct 8:35.32

// after 8:30:17 neeche wale code me changes krke ye code optimize kiya hai

// var arr1 = [1, 2, 3]
// arr1
// o/p : (3) [1, 2, 3]

// var arr2 = [arr1, 4, 5]
// arr2
// o/p : (3) [Array(3), 4, 5]

// Imp : Spread krne se kya hua arr1 ke jo actual elements the usko yaha pr insert kr diya hai
// arr3 = [...arr1, 4, 5]
// o/p : (5) [1, 2, 3, 4, 5]

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // Agar humari (Update state from previous state) value kisi previous value pr depend krti hai to hume
    // functional updates use krna chahiye
    setTodoItems((currValue) => [
      ...currValue,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
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

// Ye 33 file wala code hai jisme changes kiya gaye hai aur woh changes upar hai
// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import { useState } from "react";
// import WelcomeMessage from "./components/WelcomeMessage";

// function App() {
//   const [todoItems, setTodoItems] = useState([]);

//   const handleNewItem = (itemName, itemDueDate) => {
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
//     const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
//     setTodoItems(newTodoItems);
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
