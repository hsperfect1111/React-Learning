// 36-Use-Reducer
// 9.19.26
// part 1

// Notes
//   // Reducer : A pure function takes current
//   // state and an action and return a new state.
//   // Action : An object describe what happened.
//   // Initialization : It's invoked as
//   // const [state, dispatch] = useReducer(reducer, initialState)

// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// // step 2
// // { hata : import { useState } from "react";
// // useState ki jagha useReducer se kr rahe hai }
// import { useState, useReducer } from "react";
// import WelcomeMessage from "./components/WelcomeMessage";
// import { TodoItemsContext } from "./store/todo-items-store";

// // step 3
// // { Generally, Reducer function ko dusri file me likha jata hai
// // isko me component ke andar kyu nhi likh raha ?
// // kyuki ideally (Reducer) ek pure function hona chahiye

// // pure function : deal with uske paas argument kya aaya hai aur return kya krna hai
// // aise functions ko pure function bolte hai

// // Reducer function :
// // action object lega
// // todoItem ki jo bhi state hogi usko return karega }
// const todoItemReducer = (action) => {
//   return [];
// }

// function App() {
//   // step 1
//   // { hata : const [todoItems, setTodoItems] = useState([]);
//   // useReducer return kr raha hai ek state aur ek dispatch
//   // useReducer ke andar 2 cheeze chahiye initialState aur reducer function
//   // Ye reducer function hum likhege , reducer action ko lega aur nayi state ko return karega }

//   // step 4
//   // { ab yaha de dege Reducer function (todoItemReducer)
//   // aur initialState }
//   // { Reducer function aur method kya hai
//   // Reducer method acton object ko leta hai aur state ko return krta hai }
//   const [newTodoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

//   // addNewItem, deleteItem samjhte hai reducer ki help se
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
//     <TodoItemsContext.Provider
//       value={{
//         todoItems,
//         addNewItem,
//         deleteItem,
//       }}
//     >
//       <center className="todo-container">
//         <AppName />
//         <AddTodo />
//         <WelcomeMessage></WelcomeMessage>
//         <TodoItems></TodoItems>
//       </center>
//     </TodoItemsContext.Provider>
//   );
// }

// export default App;

//9.22.55 part 2
/*
Notes : 
1️⃣ Final Flow (useReducer)
Component kya karega

Component ka kaam sirf action dispatch karna hota hai.

dispatch({
  type: "NEW_ITEM",
  payload: {
    itemName,
    itemDueDate
  }
});

Yaha component bas ye batata hai ki:

"NEW_ITEM action hua hai"

Component ko ye decide nahi karna hota ki state ki new value kya hogi.

Reducer kya karega

Reducer ka kaam hota hai current state aur action ke base par new state banana.

Example:

if (action.type === "NEW_ITEM") {
  return [
    ...currTodoItems,
    {
      name: action.payload.itemName,
      dueDate: action.payload.itemDueDate
    }
  ];
}
2️⃣ Simple Flow Diagram
Component
   │
   │ dispatch(action)
   ▼
Reducer
   │
   │ new state create
   ▼
React UI update
3️⃣ useState me kya hota tha

Jab hum useState use karte the, tab component ko khud new state banani padti thi.

Example:

const addNewItem = (itemName, itemDueDate) => {
  const newTodoItems = [
    ...todoItems,
    { name: itemName, dueDate: itemDueDate }
  ];

  setTodoItems(newTodoItems);
};

Yaha component khud decide kar raha hai ki:

new state kya hogi
4️⃣ useReducer me kya hota hai

useReducer me component new state nahi banata.

Component sirf batata hai:

kya action hua

Example:

dispatch({
  type: "NEW_ITEM",
  payload: {
    itemName,
    itemDueDate
  }
});

Yaha component sirf bol raha hai:

NEW_ITEM action hua hai
5️⃣ Reducer ka kaam

Reducer decide karta hai:

state ki new value kya hogi

Reducer ka basic rule:

current state + action = new state
6️⃣ Simple Formula
Current State + Action = New State
7️⃣ Real Life Example

Socho ek Restaurant 🍔

Customer (Component)

Customer bas order deta hai:

"Mujhe burger chahiye"
Kitchen (Reducer)

Kitchen decide karta hai:

burger kaise banana hai

Customer ko recipe nahi pata hoti.

8️⃣ Isliye useReducer me

Component ko puri state banana nahi padta.

Component sirf batata hai:

kya action hua

Reducer new state calculate karta hai.

9️⃣ One Line Summary
Component action dispatch karta hai,
Reducer new state banata hai.

useReducer use karne ka fayda kya hai?
1️⃣ Code zyada organized ho jata hai
useState me kya hota hai

useState use karte waqt component ke andar hi saara state logic likhna padta hai.

Example:

const addNewItem = (itemName, itemDueDate) => {
  const newTodoItems = [
    ...todoItems,
    { name: itemName, dueDate: itemDueDate }
  ];

  setTodoItems(newTodoItems);
};

Agar app me multiple actions ho jaaye jaise:

Add item

Delete item

Edit item

Mark as complete

to component ke andar bahut saara logic aa jata hai, aur code messy aur difficult to manage ho jata hai.

2️⃣ useReducer me kya hota hai

useReducer me state update ka saara logic reducer function me hota hai, component me nahi.

Example:

const todoItemReducer = (state, action) => {

  if (action.type === "NEW_ITEM") {
    // add item logic
  }

  if (action.type === "DELETE_ITEM") {
    // delete item logic
  }

};

Isse state se related saari logic ek hi jagah mil jati hai.

Component simple ho jata hai, kyunki component sirf action dispatch karta hai.

3️⃣ Component simple ho jata hai

Component me sirf ye likhna hota hai:

dispatch({
  type: "NEW_ITEM",
  payload: { itemName, itemDueDate }
});

Component ko state ka calculation nahi karna padta.

✅ Simple summary

useReducer ke fayde:

Code zyada clean aur organized ho jata hai

State logic ek jagah centralized ho jata hai

Large applications me state manage karna easy ho jata hai

Notes End */

// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import { useState, useReducer } from "react";
// import WelcomeMessage from "./components/WelcomeMessage";
// import { TodoItemsContext } from "./store/todo-items-store";

// /* step 5
// ab reducer ye dekhna hai ki, is action ke base pr
// jo item hai uski nayi value kya hone wali hai */

// /* step 6 continue
// Reducer : A pure function takes current
// state (currTodoItems) and an action and return a new state.*/
// const todoItemReducer = (currTodoItems, action) => {
//   /* 9.25.28 part 5 continue
//   is action ko handle krna start krte hai */

//   /* step 6
//   reducer function ko kya chahiye current state and action */

//   if (action.type === "New_ITEM") {
//   } else if (action.type === "DELETE_ITEM") {
//   }

//   return [];
// };

// function App() {
//   // step 1
//   // { hata : const [todoItems, setTodoItems] = useState([]);
//   // setTodoItems wagera chalna band kr dege
//   // to iske liye useReducer me jo newTodoItems likha tha uska naam todoItems kr dege
//   // taki current state har jagha use ho paye
//   // const [newTodoItems, dispatchTodoItems] = useReducer(todoItemReducer, []); }
//   const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

//   // 9.24.00
//   // step 2
//   /*Yeh function naya todo item add karne ke liye use hota hai.
//   Yeh item ka naam aur due date receive karta hai,
//   phir ek action object banakar dispatch karta hai
//   taaki naya item todo list me add ho sake. */
//   /*action object kisko bola jaa raha hai ?
//   action object isko bola jaa raha hai :
//   const newTodoItem = {};*/

//   // step5
//   // jb bhi koi dispatch hota hai to woh reducer function ke paas jata hai

//   // Ye addNewItem function App component ke andar likha hota hai.
//   const addNewItem = (itemName, itemDueDate) => {
//     // Individual components ko ab ye decide nahi karna padta
//     // ki puri state ki new value kya honi chahiye.
//     // Components sirf ye batate hain ki kya action hua hai
//     // (jaise new item add hua ya item delete hua).
//     // Phir woh ek action object banakar dispatch kar dete hain.
//     // Reducer us action ke base par new state calculate karta hai.
//     const newTodoAction = {
//       type: "NEW_ITEM",
//       payload: {
//         itemName,
//         itemDueDate,
//       },
//     };
//     dispatchTodoItems(newTodoAction);

//     // 9.23.25
//     /* const newTodoItems = [
//       ...todoItems,
//       { name: itemName, dueDate: itemDueDate},
//     ];
//     setTodoItems(newTodoItem); */

//     /*setTodoItems((currValue) => [
//       ...currValue,
//       {
//         name: itemName,
//         dueDate: itemDueDate,
//       },
//     ]);*/
//   };

//   const deleteItem = (todoItemName) => {
//     const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
//     setTodoItems(newTodoItems);
//   };

//   return (
//     <TodoItemsContext.Provider
//       value={{
//         todoItems,
//         addNewItem,
//         deleteItem,
//       }}
//     >
//       <center className="todo-container">
//         <AppName />
//         <AddTodo />
//         <WelcomeMessage></WelcomeMessage>
//         <TodoItems></TodoItems>
//       </center>
//     </TodoItemsContext.Provider>
//   );
// }

// export default App;

//9.26.37
// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import { useState, useReducer } from "react";
// import WelcomeMessage from "./components/WelcomeMessage";
// import { TodoItemsContext } from "./store/todo-items-store";

// // currTodoItems hai existing state
// const todoItemReducer = (currTodoItems, action) => {
//   // Industry ka tarika
//   let newTodoItems = currTodoItems;
//   // 9:26:39
//   if (action.type === "NEW_ITEM") {
//     // newTodoItems se meri ban jayegi nayi state
//     newTodoItems = [
//       ...currTodoItems,
//       {
//         name: action.payload.itemName,
//         dueDate: action.payload.itemDueDate,
//       },
//     ];
//   } else if (action.type === "DELETE_ITEM") {
//   }

//   return newTodoItems;
// };

// function App() {
//   const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

//   const addNewItem = (itemName, itemDueDate) => {
//     const newTodoItem = {
//       type: "NEW_ITEM",
//       payload: {
//         itemName,
//         itemDueDate,
//       },
//     };
//     dispatchTodoItems(newTodoItem);
//   };

//   const deleteItem = (todoItemName) => {
//     const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
//     setTodoItems(newTodoItems);
//   };

//   return (
//     <TodoItemsContext.Provider
//       value={{
//         todoItems,
//         addNewItem,
//         deleteItem,
//       }}
//     >
//       <center className="todo-container">
//         <AppName />
//         <AddTodo />
//         <WelcomeMessage></WelcomeMessage>
//         <TodoItems></TodoItems>
//       </center>
//     </TodoItemsContext.Provider>
//   );
// }

// export default App;

// 9.28.56
// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// // hata : import { useState, useReducer } from "react";
// import { useReducer } from "react";
// import WelcomeMessage from "./components/WelcomeMessage";
// import { TodoItemsContext } from "./store/todo-items-store";

// const todoItemReducer = (currTodoItems, action) => {
//   let newTodoItems = currTodoItems;
//   if (action.type === "NEW_ITEM") {
//     newTodoItems = [
//       ...currTodoItems,
//       {
//         name: action.payload.itemName,
//         dueDate: action.payload.itemDueDate,
//       },
//     ];
//   } else if (action.type === "DELETE_ITEM") {
//     // step2
//     newTodoItems = currTodoItems.filter(
//       // action.payload.itemName
//       (item) => item.name !== action.payload.itemName,
//     );
//   }
//   return newTodoItems;
// };

// function App() {
//   const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

//   const addNewItem = (itemName, itemDueDate) => {
//     const newTodoItem = {
//       type: "NEW_ITEM",
//       payload: {
//         itemName,
//         itemDueDate,
//       },
//     };
//     dispatchTodoItems(newTodoItem);
//   };

//   /* hata : const deleteItem = (todoItemName) => {
//     const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
//     setTodoItems(newTodoItems);
//   }; */
//   // step1
//   // deleteItem ko bhi hum edit kr lege kyuki hum useState hook ka use nhi kr rahe useReducer ka kr rahe hai
//   const deleteItem = (todoItemName) => {
//     const deleteItemAction = {
//       type: "DELETE_ITEM",
//       payload: {
//         itemName: todoItemName,
//       },
//     };
//     dispatchTodoItems(deleteItemAction);
//   };

//   return (
//     <TodoItemsContext.Provider
//       value={{
//         todoItems,
//         addNewItem,
//         deleteItem,
//       }}
//     >
//       <center className="todo-container">
//         <AppName />
//         <AddTodo />
//         <WelcomeMessage></WelcomeMessage>
//         <TodoItems></TodoItems>
//       </center>
//     </TodoItemsContext.Provider>
//   );
// }

// export default App;

// 9.32.50
// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import "./App.css";
// import TodoItems from "./components/TodoItems";
// import { useReducer } from "react";
// import WelcomeMessage from "./components/WelcomeMessage";
// import { TodoItemsContext } from "./store/todo-items-store";

// const todoItemReducer = (currTodoItems, action) => {
//   let newTodoItems = currTodoItems;
//   if (action.type === "NEW_ITEM") {
//     newTodoItems = [
//       ...currTodoItems,
//       {
//         name: action.payload.itemName,
//         dueDate: action.payload.itemDueDate,
//       },
//     ];
//   } else if (action.type === "DELETE_ITEM") {
//     newTodoItems = currTodoItems.filter(
//       (item) => item.name !== action.payload.itemName,
//     );
//   }
//   return newTodoItems;
// };

// function App() {
//   // chatgpt :
//   // todoItems → current state (yani todos ki list)
//   // dispatchTodoItems → function jo state ko update karega

//   // todoItemReducer : Yeh ek reducer function hota hai jo decide karta hai state kaise change hogi.
//   // - state → current todo list
//   // - action → kya change karna hai
//   // syntax : function todoItemReducer(state, action) {...}

//   // [] : Yeh initial state hai.
//   // Matlab starting me todo list empty hai.

//   // State kya hoti hai (React me)?
//   // React me state matlab data jo component ke andar store hota hai aur change ho sakta hai.

//   // Is line ka matlab
//   // const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);
//   // 👉 React ko bol rahe ho:
//   // Mere paas ek todo list hogi jiska naam todoItems hai.
//   // Usko change karne ke liye dispatchTodoItems function use karunga.
//   // Aur shuru me list empty ([]) hai.

//   // Ye line todo items ko store karne ke liye ek state banati hai jise todoItems kehte hain.
//   // Aur dispatchTodoItems se hum us list ko change karte hain (add/delete).

//   /* sirf samhne ke liye
//   component kaise direct dispatchTodoItems use karke action dispatch karega ?

//   1️⃣ Context se dispatch lena
//   import { useContext } from "react";
//   import { TodoContext } from "./TodoProvider";

//   function AddTodo() {

//     const { dispatchTodoItems } = useContext(TodoContext);

//     const handleAdd = () => {
//       dispatchTodoItems({
//         type: "ADD_ITEM",
//         payload: { id: Date.now(), text: "New Item" }
//       });
//     };
//     // jaise hi Add Item button click hoga turant handleAdd fuction chalega aur dispatch kr dega
//     return <button onClick={handleAdd}>Add Item</button>;
//   }

//   export default AddTodo;

//   ✅ Flow simple hai:
//   Provider se dispatchTodoItems context me milta hai
//   Component useContext se usko access karta hai
//   Fir dispatchTodoItems({ type, payload }) call karke action dispatch karta hai */
//   const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

//   const addNewItem = (itemName, itemDueDate) => {
//     const newTodoAction = {
//       type: "NEW_ITEM",
//       payload: {
//         itemName,
//         itemDueDate,
//       },
//     };
//     dispatchTodoItems(newTodoAction);
//   };

//   const deleteItem = (todoItemName) => {
//     const deleteItemAction = {
//       type: "DELETE_ITEM",
//       payload: {
//         itemName: todoItemName,
//       },
//     };
//     dispatchTodoItems(deleteItemAction);
//   };

//   return (
//     <TodoItemsContext.Provider
//       value={{
//         todoItems,
//         /* 9.33.12
//         hata : addNewItem,
//         deleteItem,
//         */

//         /* step1
//         dispatchTodoItems ko directly Context me provide kiya gaya hai.
//         Components ab apna action object bana ke isse dispatch kar sakte hain,
//         isliye alag se addNewItem ya deleteItem functions declare karna optional hai.

//         Agar dispatch already available hai, to addNewItem aur deleteItem jaise alag functions banane ki zarurat nahi hai.
//         Provider me in functions ko add karne ki jagah dispatchTodoItems pass kar dena chahiye.
//         Phir jo bhi component item add ya delete karega, woh direct dispatchTodoItems use karke action dispatch kar sakta hai.
//         Provider se sirf dispatch expose karo, aur components apne hisaab se actions dispatch karein. */
//         dispatchTodoItems,
//       }}
//     >
//       <center className="todo-container">
//         <AppName />
//         <AddTodo />
//         <WelcomeMessage></WelcomeMessage>
//         <TodoItems></TodoItems>
//       </center>
//     </TodoItemsContext.Provider>
//   );
// }

// export default App;

/* Chatgpt
Above code me addNewItem aur deleteItem functions unnecessary hain, kyunki aap dispatchTodoItems already context me pass kar rahe ho. Isliye same code ko clean karke aise likha ja sakta hai:

import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemReducer = (currTodoItems, action) => {

  if (action.type === "NEW_ITEM") {
    return [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];
  }

  if (action.type === "DELETE_ITEM") {
    return currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }

  return currTodoItems;
};

function App() {

  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        dispatchTodoItems
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
✔️ Kya change hua

addNewItem function hata diya

deleteItem function hata diya

Provider me sirf

todoItems,
dispatchTodoItems

pass kiya.

✔️ Ab components kya karenge

AddTodo ya TodoItems component direct dispatchTodoItems use karke action bhejenge:

dispatchTodoItems({
  type: "NEW_ITEM",
  payload: { itemName, itemDueDate }
});

ya

dispatchTodoItems({
  type: "DELETE_ITEM",
  payload: { itemName }
});
*/

// 9.33.26
// step 1
// addNewItem, deleteItem methods ko file ke bahar nikalkr app ka logic clear kr rahe hai
// Compoent ka kaam hota hai concentrate krna UI pr
// Bussiness logic aur UI ko separate kr dege
// toh hu pure logic ko bahar nikal lege store me
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    // step 6 isko hata kr kya paas kr dege ? wraper component paas kr dege
    // <TodoItemsContext.Provider
    //   value={{
    //     todoItems,
    //     addNewItem,
    //     deleteItem,
    //   }}
    // >
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
