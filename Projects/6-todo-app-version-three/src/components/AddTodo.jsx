// after 6:41
// function AddTodo({ onNewItem }) {
//   return (
//     <div className="container text-center">
//       <div className="row kg-row">
//         <div className="col-6">
//           {/* value={} tb likhte hai jb (user value deta hai) parent ke through as a prop to there children*/}
//           {/* Imp : Yaha pr value={} kr dege */}
//           <input type="text" placeholder="Enter Todo Here" />
//         </div>
//         <div className="col-4">
//           <input type="date" />
//         </div>
//         <div className="col-2">
//           <button
//             type="button"
//             className="btn btn-success kg-button"
//             onClick={() => onNewItem("a", "b")}
//           >
//             Add
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

// export default AddTodo;

// after 6:51
function AddTodo({ onNewItem }) {
  // Dono input se value kaise nikalunga ?
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  // Ab todoName aur dueDate ki value upar ke dono function update kardege usko parent ko kaise send karege ?
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            // value={todoName} ka matlab hai:
            // 👉 Input box ka jo current text hai,
            // woh React ke state variable todoName se control ho raha hai.
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={dueDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
