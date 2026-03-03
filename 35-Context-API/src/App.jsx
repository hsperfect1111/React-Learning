// 8:38:35 // direct 8:43
// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import { useState } from "react";
// import WelcomeMessage from "./components/WelcomeMessage";

// function App() {
//   const [todoItems, setTodoItems] = useState([]);

//   const handleNewItem = (itemName, itemDueDate) => {
//     setTodoItems((currValue) => [
//       ...currValue,
//       {
//         name: itemName,
//         dueDate: itemDueDate,
//       },
//     ]);
//   };

//   const handleDeleteItem = (todoItemName) => {
//     const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
//     setTodoItems(newTodoItems);
//   };

//   return (
//     <center className="todo-container">
//       <AppName />
//       <AddTodo onNewItem={handleNewItem} />
//       {/* Step 1 */}
//       {/* todoItems ko welcome msg me daal diya  */}
//       {/* aur ab WelcomeMessage component me jakr isko prop ki tarha use kr lege  */}
//       <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
//       <TodoItems
//         todoItems={todoItems}
//         onDeleteClick={handleDeleteItem}
//       ></TodoItems>
//     </center>
//   );
// }

// export default App;

// Part 2 after 8:47:03
// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import { useState } from "react";
// import WelcomeMessage from "./components/WelcomeMessage";

// function App() {
//   const [todoItems, setTodoItems] = useState([]);

//   const handleNewItem = (itemName, itemDueDate) => {
//     setTodoItems((currValue) => [
//       ...currValue,
//       {
//         name: itemName,
//         dueDate: itemDueDate,
//       },
//     ]);
//   };

//   const handleDeleteItem = (todoItemName) => {
//     const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
//     setTodoItems(newTodoItems);
//   };

//   return (
//     // step 3
//     // Context ko poori application me available banane ke liye
//     // hume TodoItemsContext.Provider ka use karna hota hai
//     <TodoItemsContext.Provider>
//       <center className="todo-container">
//         <AppName />
//         <AddTodo onNewItem={handleNewItem} />
//         <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
//         <TodoItems
//           todoItems={todoItems}
//           onDeleteClick={handleDeleteItem}
//         ></TodoItems>
//       </center>
//     </TodoItemsContext.Provider>
//   );
// }

// export default App;

// Part 3 after 8:52:52
// Ab dekhege ki useContext ko use kaise karege
// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import { useState } from "react";
// import WelcomeMessage from "./components/WelcomeMessage";
// import TodoItemsContext from "./store/todo-items-store";
// function App() {
//   const [todoItems, setTodoItems] = useState([]);

//   const handleNewItem = (itemName, itemDueDate) => {
//     setTodoItems((currValue) => [
//       ...currValue,
//       {
//         name: itemName,
//         dueDate: itemDueDate,
//       },
//     ]);
//   };

//   const handleDeleteItem = (todoItemName) => {
//     const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
//     setTodoItems(newTodoItems);
//   };

//   return (
//     <TodoItemsContext.Provider>
//       <center className="todo-container">
//         <AppName />
//         <AddTodo onNewItem={handleNewItem} />
//         <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
//         {/* step 1 */}
//         {/* Ab dekhege ki useContext ko use kaise karege  */}
//         {/* sbse zyda use useContext ka use TodoItems component me hoga   */}
//         <TodoItems
//           todoItems={todoItems}
//           onDeleteClick={handleDeleteItem}
//         ></TodoItems>
//       </center>
//     </TodoItemsContext.Provider>
//   );
// }

// export default App;

// part 4 after 8.54.50
// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import { useState } from "react";
// import WelcomeMessage from "./components/WelcomeMessage";
// import { TodoItemsContext } from "./store/todo-items-store";

// function App() {
//   const [todoItems, setTodoItems] = useState([]);

//   const handleNewItem = (itemName, itemDueDate) => {
//     setTodoItems((currValue) => [
//       ...currValue,
//       {
//         name: itemName,
//         dueDate: itemDueDate,
//       },
//     ]);
//   };

//   const handleDeleteItem = (todoItemName) => {
//     const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
//     setTodoItems(newTodoItems);
//   };

//   return (
//     <TodoItemsContext.Provider value={[]}>
//       <center className="todo-container">
//         <AppName />
//         <AddTodo onNewItem={handleNewItem} />
//         <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
//         <TodoItems
//           todoItems={todoItems}
//           onDeleteClick={handleDeleteItem}
//         ></TodoItems>
//       </center>
//     </TodoItemsContext.Provider>
//   );
// }

// export default App;

// part 5 after 8.56.16
// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import { useState } from "react";
// import WelcomeMessage from "./components/WelcomeMessage";
// import { TodoItemsContext } from "./store/todo-items-store";

// function App() {
//   const [todoItems, setTodoItems] = useState([]);

//   const handleNewItem = (itemName, itemDueDate) => {
//     setTodoItems((currValue) => [
//       ...currValue,
//       {
//         name: itemName,
//         dueDate: itemDueDate,
//       },
//     ]);
//   };

//   const handleDeleteItem = (todoItemName) => {
//     const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
//     setTodoItems(newTodoItems);
//   };

//   const defaultTodoItems = [{ name: "Buy Ghee", dueDate: "Today" }];

//   return (
//     // <TodoItemsContext.Provider value={[]}></TodoItemsContext.Provider>
//     <TodoItemsContext.Provider value={defaultTodoItems}>
//       <center className="todo-container">
//         <AppName />
//         <AddTodo onNewItem={handleNewItem} />
//         <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
//         <TodoItems
//           todoItems={todoItems}
//           onDeleteClick={handleDeleteItem}
//         ></TodoItems>
//       </center>
//     </TodoItemsContext.Provider>
//   );
// }

// export default App;

// part 6 9:00:00
// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import { useState } from "react";
// import WelcomeMessage from "./components/WelcomeMessage";
// import { TodoItemsContext } from "./store/todo-items-store";

// function App() {
//   const [todoItems, setTodoItems] = useState([]);

//   const handleNewItem = (itemName, itemDueDate) => {
//     setTodoItems((currValue) => [
//       ...currValue,
//       {
//         name: itemName,
//         dueDate: itemDueDate,
//       },
//     ]);
//   };

//   const handleDeleteItem = (todoItemName) => {
//     const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
//     setTodoItems(newTodoItems);
//   };

//   // const defaultTodoItems = [{ name: "Buy Ghee", dueDate: "Today" }];
//   const defaultTodoItems = [];

//   return (
//     <TodoItemsContext.Provider value={defaultTodoItems}>
//       <center className="todo-container">
//         <AppName />
//         <AddTodo onNewItem={handleNewItem} />
//         {/* <WelcomeMessage todoItems={todoItems}></WelcomeMessage> */}
//         {/* Ab welcome msg me mein todoItems={todoItems} ko hata skta hu kyuki maine useContext aur context ApI ka use kr liya hai  */} */}
//         <WelcomeMessage></WelcomeMessage>
//         {/* <TodoItems onDeleteClick={handleDeleteItem} todoItems={todoItems}></TodoItems> */}
//         {/* TodoItems se bhi todoItems={todoItems} prop ko hata dege */}
//         <TodoItems onDeleteClick={handleDeleteItem}></TodoItems>
//       </center>
//     </TodoItemsContext.Provider>
//   );
// }

// export default App;

// part 10 9:01
// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import { useState } from "react";
// import WelcomeMessage from "./components/WelcomeMessage";
// import { TodoItemsContext } from "./store/todo-items-store";

// function App() {
//   const [todoItems, setTodoItems] = useState([]);

//   const handleNewItem = (itemName, itemDueDate) => {
//     setTodoItems((currValue) => [
//       ...currValue,
//       {
//         name: itemName,
//         dueDate: itemDueDate,
//       },
//     ]);
//   };

//   const handleDeleteItem = (todoItemName) => {
//     const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
//     setTodoItems(newTodoItems);
//   };

//   return (
//     /*
//       Pehle hum state ko props ke through pass kar rahe the (props drilling).
//       Ab hum state ko Context Provider ke through share kar rahe hain.

//       Jo bhi component ko data chahiye,
//       woh directly Context se useContext ke through le sakta hai.

//       Context.Provider ke andar jo bhi value pass ki jaati hai,
//       agar woh value change hoti hai,
//       to Provider ke andar ke sabhi components re-render ho jaate hain.
//     */
//     <TodoItemsContext.Provider value={todoItems}>
//       <center className="todo-container">
//         <AppName />
//         {/*
//           AddTodo component naya item add karta hai.
//           onNewItem function setTodoItems ko use karta hai,
//           jo todoItems state ko update karta hai.

//           Jab todoItems state change hoti hai,
//           to Context Provider ki value bhi update hoti hai,
//           aur updated data sabhi components ko mil jaata hai.
//         */}
//         <AddTodo onNewItem={handleNewItem} />
//         <WelcomeMessage></WelcomeMessage>
//         <TodoItems onDeleteClick={handleDeleteItem}></TodoItems>
//       </center>
//     </TodoItemsContext.Provider>
//   );
// }

// export default App;

// part 9:03:25
// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import { useState } from "react";
// import WelcomeMessage from "./components/WelcomeMessage";
// import { TodoItemsContext } from "./store/todo-items-store";

// function App() {
//   const [todoItems, setTodoItems] = useState([]);

//   // iska naam kya hona chahiye addNewItem
//   const addNewItem = (itemName, itemDueDate) => {
//     setTodoItems((currValue) => [
//       ...currValue,
//       {
//         name: itemName,
//         dueDate: itemDueDate,
//       },
//     ]);
//   };

//   // iska naam kya hona chahiye deleteItem
//   const deleteItem = (todoItemName) => {
//     const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
//     setTodoItems(newTodoItems);
//   };

//   return (
//     // 9.05.08
//     // <TodoItemsContext.Provider value={todoItems}>
//     // value ko object bana diya taki method bhi paas krdu
//     <TodoItemsContext.Provider
//       value={{
//         items: todoItems,
//         addNewItem: addNewItem,
//         deleteItem: deleteItem,
//       }}
//     >
//       <center className="todo-container">
//         <AppName />
//         {/* step 1 */}
//         {/* <AddTodo onNewItem={handleNewItem} /> */}
//         {/* mein AddTodo aur TodoItems me kuch bhi paas nhi karunga
//         jisko item add krni hai delete krni hai apne aap context provider se nikal le
//         aur access krle  */}
//         <AddTodo />
//         <WelcomeMessage></WelcomeMessage>
//         {/* <TodoItems onDeleteClick={handleDeleteItem}></TodoItems> */}
//         <TodoItems></TodoItems>
//       </center>
//     </TodoItemsContext.Provider>
//   );
// }

// export default App;

// 9:05.47
// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import { useState } from "react";
// import WelcomeMessage from "./components/WelcomeMessage";
// import { TodoItemsContext } from "./store/todo-items-store";

// function App() {
//   const [todoItems, setTodoItems] = useState([]);

//   const addNewItem = (itemName, itemDueDate) => {
//     setTodoItems((currValue) => [
//       ...currValue,
//       {
//         name: itemName,
//         dueDate: itemDueDate,
//       },
//     ]);
//   };

//   const deleteItem = (todoItemName) => {
//     const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
//     setTodoItems(newTodoItems);
//   };

//   return (
//     // value ka structure change kr diya hai isse kya hoga
//     // WelcomeMessage.jsx me ab todoItems nhi niklega kyu kyuki yaha pr ab ek object nikal raha hai
//     // jiske andar 3 alag alag item hai todoitems, addNewItem, deleteItem
//     <TodoItemsContext.Provider
//       value={{
//         todoItems: todoItems,
//         addNewItem: addNewItem,
//         deleteItem: deleteItem,
//       }}
//     >
//       <center className="todo-container">
//         <AppName />
//         {/* step 1 */}
//         {/* <AddTodo onNewItem={handleNewItem} /> */}
//         {/* mein AddTodo aur TodoItems me kuch bhi paas nhi karunga
//         jisko item add krni hai delete krni hai apne aap context provider se nikal le
//         aur access krle  */}
//         <AddTodo />
//         <WelcomeMessage></WelcomeMessage>
//         {/* <TodoItems onDeleteClick={handleDeleteItem}></TodoItems> */}
//         <TodoItems></TodoItems>
//       </center>
//     </TodoItemsContext.Provider>
//   );
// }

// export default App;

// 9.07.23 // 9.07.23
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      /*
        Yahan hum Context API ka use kar rahe hain.
        todoItems, addNewItem aur deleteItem ko ek jagah se 
        sab components tak pahucha rahe hain.

        Kyunki key aur value ka naam same hai,
        isliye object shorthand syntax use kiya gaya hai.
      */
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        {/*
          Yahan humne props drilling avoid ki hai.
          Data aur methods ko context ke through share kiya gaya hai.
          
          Jis component ko jo data chahiye,
          woh directly context se access kar sakta hai.
        */}
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
