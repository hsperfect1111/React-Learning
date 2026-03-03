// // after 7:21
// import { useState } from "react";

// function AddTodo({ onNewItem }) {
//   // Yaha ek warning aa rahi thi :
//   // A component is changing an uncontrolled
//   // input to be controlled. This is likely
//   // caused by the value changing from undefined
//   // to a defined value

//   // Ye error tab aata hai jab:
//   // 👉 Input pehle uncontrolled tha (value undefined)
//   // 👉 Baad me controlled ho gaya (value state se aane lagi)

//   // { no use : Ye bs samjhne ke liye hai
//   //   ❌ Galat
//   //   const [name, setName] = useState(); // undefined
//   //   ✅ Sahi
//   //   const [name, setName] = useState(""); // always controlled
//   // }
//   const [todoName, setTodoName] = useState("");
//   const [dueDate, setDueDate] = useState("");

//   const handleNameChange = (event) => {
//     setTodoName(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setDueDate(event.target.value);
//   };

//   const handleAddButtonClicked = () => {
//     onNewItem(todoName, dueDate);
//     setDueDate("");
//     setTodoName("");
//   };

//   return (
//     <div className="container text-center">
//       <div className="row kg-row">
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
//           <button
//             type="button"
//             className="btn btn-success kg-button"
//             onClick={handleAddButtonClicked}
//           >
//             Add
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddTodo;

// after 7:23
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

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
            <IoIosAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
