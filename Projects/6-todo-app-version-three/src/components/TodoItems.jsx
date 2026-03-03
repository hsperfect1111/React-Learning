// after 6:41
// import TodoItem from "./TodoItem";
// import styles from "./TodoItems.module.css";

// const TodoItems = ({ todoItems }) => {
//   return (
//     <div className={styles.itemsContainer}>
//       {todoItems.map((item) => (
//         <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
//       ))}
//     </div>
//   );
// };

// export default TodoItems;

// after 7:09
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
