// // Part 3 after 8:52:52
// import { useContext } from "react";
// import { TodoItemsContext } from "../store/todo-items-store";
// import TodoItem from "./TodoItem";
// import styles from "./TodoItems.module.css";

// // step 2
// // TodoItems component me useContext ka use kaise karege yaha dekhege
// // sbse phele karege import TodoItemsContext ko
// // iske baad ek aur hook import krna padega useContext

// const TodoItems = ({ todoItems, onDeleteClick }) => {
//   // useContext...TodoItemsContext ka object nikalkr todoItemsFromContext ko de dega
//   // aur ab is todoItemsFromContext ko directly use kr skte hai
//   const todoItemsFromContext = useContext(TodoItemsContext);
//   return (
//     <div className={styles.itemsContainer}>
//       {todoItems.map((item) => (
//         <TodoItem
//           key={item.name}
//           todoDate={item.dueDate}
//           todoName={item.name}
//           onDeleteClick={onDeleteClick}
//         ></TodoItem>
//       ))}
//     </div>
//   );
// };

// export default TodoItems;

// part 4 after 8.54.50
// import { useContext } from "react";
// import { TodoItemsContext } from "../store/todo-items-store";
// import TodoItem from "./TodoItem";
// import styles from "./TodoItems.module.css";

// const TodoItems = ({ todoItems, onDeleteClick }) => {
//   const todoItemsFromContext = useContext(TodoItemsContext);
//   console.log(`items from context: ${todoItemsFromContext}`);

//   return (
//     <div className={styles.itemsContainer}>
//       {todoItems.map((item) => (
//         <TodoItem
//           key={item.name}
//           todoDate={item.dueDate}
//           todoName={item.name}
//           onDeleteClick={onDeleteClick}
//         ></TodoItem>
//       ))}
//     </div>
//   );
// };

// export default TodoItems;

// part 5 after 8.56.16
// import { useContext } from "react";
// import { TodoItemsContext } from "../store/todo-items-store";
// import TodoItem from "./TodoItem";
// import styles from "./TodoItems.module.css";

// // useContext ka use krke koi bhi dependency ab todoItems prop pr nhi rahegi to ab hum is prop ko hata skte hai
// // const TodoItems = ({ todoItems, onDeleteClick }) => {
// const TodoItems = ({ onDeleteClick }) => {
//   // const todoItemsFromContext = useContext(TodoItemsContext);
//   // ab hum todoItemsFromContext ka naam badalkr todoItems rakh skte hai
//   const todoItems = useContext(TodoItemsContext);
//   // console.log(`items from context: ${todoItemsFromContext}`);
//   console.log(todoItems);

//   return (
//     <div className={styles.itemsContainer}>
//       {todoItems.map((item) => (
//         <TodoItem
//           key={item.name}
//           todoDate={item.dueDate}
//           todoName={item.name}
//           onDeleteClick={onDeleteClick}
//         ></TodoItem>
//       ))}
//     </div>
//   );
// };

// export default TodoItems;

// part 6 9:00:00
// import { useContext } from "react";
// import { TodoItemsContext } from "../store/todo-items-store";
// import TodoItem from "./TodoItem";
// import styles from "./TodoItems.module.css";

// const TodoItems = ({ onDeleteClick }) => {
//   const todoItems = useContext(TodoItemsContext);
//   console.log(todoItems);

//   return (
//     <div className={styles.itemsContainer}>
//       {todoItems.map((item) => (
//         <TodoItem
//           key={item.name}
//           todoDate={item.dueDate}
//           todoName={item.name}
//           onDeleteClick={onDeleteClick}
//         ></TodoItem>
//       ))}
//     </div>
//   );
// };

// export default TodoItems;

// 9:05.47 // 9.06.22
// import { useContext } from "react";
// import { TodoItemsContext } from "../store/todo-items-store";
// import TodoItem from "./TodoItem";
// import styles from "./TodoItems.module.css";

// const TodoItems = ({ onDeleteClick }) => {
//   // step 2
//   // contextObj ek obj hai uske andar se item nikal rahe hai
//   const contextObj = useContext(TodoItemsContext);
//   const todoItems = contextObj.todoitems;

//   return (
//     <div className={styles.itemsContainer}>
//       {todoItems.map((item) => (
//         <TodoItem
//           key={item.name}
//           todoDate={item.dueDate}
//           todoName={item.name}
//           onDeleteClick={onDeleteClick}
//         ></TodoItem>
//       ))}
//     </div>
//   );
// };

// export default TodoItems;

// 9.07.23
// import { useContext } from "react";
// import { TodoItemsContext } from "../store/todo-items-store";
// import TodoItem from "./TodoItem";
// import styles from "./TodoItems.module.css";

// const TodoItems = () => {
//   // destructuring krke bhi nikal skta hu

//   // step 1
//   // 9.09.47 Ye mujhe deleteItem autoComplete suggestion nhi de raha
//   // agar me chahta hu ki mujhe autocomplete bhi mile to mein kya kr skta hu
//   // App.jsx me jakr values ko sidha provider se uthakr store me declare kr skta hu
//   // Ab me yaha pr paas kr skta hu deleteItem
//   // aur ye kaha chala jayega onDeleteClick mein
//   const { todoItems, deleteItem } = useContext(TodoItemsContext);

//   return (
//     <div className={styles.itemsContainer}>
//       {todoItems.map((item) => (
//         <TodoItem
//           key={item.name}
//           todoDate={item.dueDate}
//           todoName={item.name}
//           onDeleteClick={deleteItem}
//         ></TodoItem>
//       ))}
//     </div>
//   );
// };

// export default TodoItems;

// 9.11.04
// import { useContext } from "react";
// import { TodoItemsContext } from "../store/todo-items-store";
// import TodoItem from "./TodoItem";
// import styles from "./TodoItems.module.css";

// const TodoItems = () => {
//   // const { todoItems, deleteItem } = useContext(TodoItemsContext);
//   // step2
//   // Ab deleteItem ki zarurat yaha nahi hai,
//   // kyunki TodoItem component khud Context se le raha hai
//   const { todoItems } = useContext(TodoItemsContext);

//   return (
//     <div className={styles.itemsContainer}>
//       {todoItems.map((item) => (
//         // step 1
//         /*
//           Pehle deleteItem parent se prop ke through pass ho raha tha.
//           Ab props drilling hata di gayi hai.

//           TodoItem directly Context se deleteItem access karega.
//         */
//         <TodoItem
//           key={item.name}
//           todoDate={item.dueDate}
//           todoName={item.name}
//           // hata diya
//           // step 3
//           // ab isko sidha TodoItem ke andar access kr leta hu useContext ki help se
//           // onDeleteClick={deleteItem}
//         ></TodoItem>
//       ))}
//     </div>
//   );
// };

// export default TodoItems;

// 9.33.26 // 9.39.51
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          // key dedi
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
