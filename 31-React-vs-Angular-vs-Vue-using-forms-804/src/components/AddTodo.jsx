// after 8:04:26
// import { useState } from "react";
// import { IoIosAddCircleOutline } from "react-icons/io";

// function AddTodo({ onNewItem }) {
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
//       {/*
//         Agar aap form ka data server par bhejna chahte hain,
//         to aapko form ke andar `action=""` attribute me ek path (URL) define karna padta hai.

//         Ye path batata hai ki form submit hone ke baad data kis route par bhejna hai.

//         Agar `action` attribute define nahi kiya jata,
//         to by default form current URL par submit hota hai
//         (jaise: http://localhost:5173/),
//         jis se page refresh ho jata hai.
//       */}
//       <form
//         className="row kg-row"
//         // IMP : 8:11 Button ka default type "submit" hota hai.
//         // Agar aap button click se form submit karna chahte ho,
//         // to form element par onSubmit handler lagate hain.
//         // onSubmit handler me event.preventDefault() laga kar
//         // page refresh ko roka ja sakta hai aur state safely update hoti hai.
//         onSubmit={handleAddButtonClicked}
//       >
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
//             // Agar hum button ka type define nahi karte,
//             // to by default uska type "submit" hota hai.
//             // Iska matlab, button click hote hi form submit ho jayega
//             // aur page refresh ho sakta hai (data server par send ho jayega).

//             // Page refresh ho sakta hai” ka matlab:
//             // Jab form submit hota hai (aur event.preventDefault() nahi lagaya hota), to browser:
//             //   Current page ko reload karta hai
//             //   Saara JavaScript state reset ho jata hai
//             //   React ka pura component dobara render hota hai
//             //   Jo data aapne enter kiya tha woh clear ho jata hai

//             // agar nhi likhte to bhi button ka type bydefault submit hi hota
//             // Ye form ko batata hai ki aapko submit kiya jaa raha hai
//             type="submit"
//             className="btn btn-success kg-button"
//           >
//             <IoIosAddCircleOutline />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddTodo;

// after 8:12:34
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

  // 8:12:34
  // Yaha handleAddButtonClicked ek event le lega

  // aur ye event aayega kaha se ?
  // Ye event React se aata hai.
  // Jab form submit hota hai (onSubmit),
  // React automatically event object ko
  // handleAddButtonClicked function me pass karta hai.
  const handleAddButtonClicked = (event) => {
    // preventDefault() browser ka default behavior rokta hai.

    // Why do we use event.preventDefault()?
    // Normally jab form submit hota hai,
    // to page refresh ho jata hai.

    // event.preventDefault() use karke
    // hum page refresh ko stop kar dete hain.

    // Isse React app reload nahi hoti
    // aur data handle karne ka control hamare paas rehta hai.
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      {/* Form yaha submit ho raha hai: */}
      {/* // Jab button (type="submit") click hota hai
          // ya Enter press hota hai,
          // tab onSubmit trigger hota hai
          // aur form submit hota hai. 
      */}
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
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
          <button type="submit" className="btn btn-success kg-button">
            <IoIosAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
