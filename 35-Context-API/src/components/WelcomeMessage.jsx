// import styles from "./WelcomeMessage.module.css";
// // step 2 Yaha pr todoItems as a prop paas kr diya
// const WelcomeMessage = ({ todoItems }) => {
//   // step 2
//   // Hum ye msg tb print krva rahe hai jb humara todoItems khali ho
//   // yaha pr not operator ka use nhi kr sakte kyuki khali todoItems bhi ek array hai
//   // joki truthly hota hai ,
//   // isiliye hume .lenght ka use karege msg print krvane ke liye
//   return (
//     todoItems.length === 0 && <p className={styles.welcome}>Enjoy your day</p>
//   );
// };

// export default WelcomeMessage;

// Part 2 after 8:47:03
// step 1
// Ab hum dekhenge ki useState ki jagah Context API kaise create kar sakte hain
// aur usse kaise use kar sakte hain.

// Hum apna data ek alag folder me rakhenge: src -> store
// Store folder me sirf state, business logic aur related data rakha jata hai.
// import styles from "./WelcomeMessage.module.css";
// const WelcomeMessage = ({ todoItems }) => {
//   return (
//     todoItems.length === 0 && <p className={styles.welcome}>Enjoy your day</p>
//   );
// };

// export default WelcomeMessage;

// part after 9:00:00
// import styles from "./WelcomeMessage.module.css";
// import { TodoItemsContext } from "../store/todo-items-store";
// import { useContext } from "react";

// // const WelcomeMessage = ({ todoItems }) => {
// const WelcomeMessage = () => {
//   // useContext ka use krke todoItems prop ko hata dege
//   const todoItems = useContext(TodoItemsContext);
//   return (
//     todoItems.length === 0 && <p className={styles.welcome}>Enjoy your day</p>
//   );
// };

// export default WelcomeMessage;

// 9:05.47 // 9.06.22
// import styles from "./WelcomeMessage.module.css";
// import { TodoItemsContext } from "../store/todo-items-store";
// import { useContext } from "react";

// const WelcomeMessage = () => {
//   // step 3
//   // contextObj ek obj hai uske andar se item nikal rahe hai
//   const contextObj = useContext(TodoItemsContext);
//   const todoItems = contextObj.todoitems;
//   return (
//     todoItems.length === 0 && <p className={styles.welcome}>Enjoy your day</p>
//   );
// };

// export default WelcomeMessage;

// 9.07.23
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const WelcomeMessage = () => {
  // destructuring krke bhi nikal skta hu
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy your day</p>
  );
};

export default WelcomeMessage;
