// after 7:21
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        // ⚠ Error: Each child in a list should have a unique "key" prop
        // ✅ Solution: Added key={item.name}

        // TodoItems me list kaha pr render ho rahi hai
        // Har item ke liye ek <TodoItem /> component bana raha hai.
        // Yehi actual list rendering hai.
        <TodoItem
          // Inside TodoItems, you're rendering a list with .map() but not giving each child a unique key prop.
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
