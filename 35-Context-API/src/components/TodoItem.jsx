// import { MdDelete } from "react-icons/md";

// function TodoItem({ todoName, todoDate, onDeleteClick }) {
//   return (
//     <div className="container">
//       <div className="row kg-row">
//         <div className="col-6">{todoName}</div>
//         <div className="col-4">{todoDate}</div>
//         <div className="col-2">
//           <button
//             type="button"
//             className="btn btn-danger kg-button"
//             onClick={() => onDeleteClick(todoName)}
//           >
//             <MdDelete />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TodoItem;

// 9.11.04
// step 4
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

// function TodoItem({ todoName, todoDate, onDeleteClick }) {
// Ab onDeleteClick prop ki zarurat nahi hai,
// kyunki deleteItem ko Context se directly le rahe hain
function TodoItem({ todoName, todoDate }) {
  // Context se deleteItem function access kar liya
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            // Button click par context wala deleteItem call hoga
            onClick={() => deleteItem(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
