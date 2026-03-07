// import { useRef } from "react";
// import { IoIosAddCircleOutline } from "react-icons/io";

// function AddTodo({ onNewItem }) {
//   const todoNameElement = useRef();
//   const dueDateElement = useRef();

//   const handleAddButtonClicked = (event) => {
//     event.preventDefault();
//     const todoName = todoNameElement.current.value;
//     const dueDate = dueDateElement.current.value;
//     todoNameElement.current.value = "";
//     dueDateElement.current.value = "";
//     onNewItem(todoName, dueDate);
//   };

//   return (
//     <div className="container text-center">
//       <form className="row kg-row" onSubmit={handleAddButtonClicked}>
//         <div className="col-6">
//           <input
//             type="text"
//             ref={todoNameElement}
//             placeholder="Enter Todo Here"
//           />
//         </div>
//         <div className="col-4">
//           <input type="date" ref={dueDateElement} />
//         </div>
//         <div className="col-2">
//           <button type="submit" className="btn btn-success kg-button">
//             <IoIosAddCircleOutline />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddTodo;

// 9.07.23 // 9.08.52
import { useContext, useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";
function AddTodo() {
  // Context se addNewItem function le liya
  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <IoIosAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
