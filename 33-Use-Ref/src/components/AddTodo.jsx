// after 8:16:43
// import { useRef } from "react";
// import { useState } from "react";
// import { IoIosAddCircleOutline } from "react-icons/io";

// function AddTodo({ onNewItem }) {
//   const [todoName, setTodoName] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   // Agar aapko value store karni ho lekin UI ko re-render (repaint) nahi karwana ho,
//   // to aap useState ki jagah useRef ka use kar sakte hain.

//   // interview-ready English comment
//   // useRef is used to store a mutable value without triggering a re-render.
//   const noOfUpdates = useRef(0);

//   const handleNameChange = (event) => {
//     setTodoName(event.target.value);
//     noOfUpdates.current += 1;
//   };

//   const handleDateChange = (event) => {
//     setDueDate(event.target.value);
//     console.log(`noOfUpdates are : ${noOfUpdates.current}`);
//   };

//   const handleAddButtonClicked = (event) => {
//     event.preventDefault();
//     onNewItem(todoName, dueDate);
//     setDueDate("");
//     setTodoName("");
//   };

//   return (
//     <div className="container text-center">
//       <form className="row kg-row" onSubmit={handleAddButtonClicked}>
//         <div className="col-6">
//           <input
//             type="text"
//             placeholder="Enter Todo Here"
//             value={todoName}
//             onChange={handleNameChange}
//           />
//         </div>
//         <div className="col-4">
//           <input type="date" onChange={handleDateChange} value={dueDate} />
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

// after 822.26
import { useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
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
