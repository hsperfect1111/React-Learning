// import { useDispatch } from "react-redux";

// // 16.3.50
// // STEP4 : store ko update karana h to uske liye use karege useDispatch hook
// // useDispatch return krta h method
// // useDispatch ko use kr skte h action ko dispact krne ke liye
// const Controls = () => {
//   // useDispatch hook se hume dispatch function milta hai.
//   const dispatch = useDispatch();

//   const handleIncrement = () => {
//     // Dispatch kr rahe h action object, store ko
//     // jo caught karega counterReducer, jo index.js file me h
//     dispatch({ type: "INCREMENT" });
//   };

//   const handleDecrement = () => {
//     dispatch({ type: "DECREMENT" });
//   };

//   return (
//     <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
//       <button
//         type="button"
//         className="btn btn-primary"
//         onClick={handleIncrement}
//       >
//         +1
//       </button>

//       <button
//         type="button"
//         className="btn btn-success"
//         onClick={handleDecrement}
//       >
//         -1
//       </button>
//     </div>
//   );
// };

// export default Controls;

// 16.13.51
// import { useDispatch } from "react-redux";
// import { useRef } from "react";

// const Controls = () => {
//   const dispatch = useDispatch();
//   // input ki value read krni h to uske liye use kr lege useRef
//   const inputElement = useRef();

//   // Counter ko 1 se badhane ke liye handler
//   const handleIncrement = () => {
//     dispatch({ type: "INCREMENT" });
//   };

//   // Counter ko 1 se ghataane ke liye handler
//   const handleDecrement = () => {
//     dispatch({ type: "DECREMENT" });
//   };

//   // Privacy hide/show toggle karne ke liye handler
//   const handlePrivacyToggle = () => {
//     dispatch({ type: "PRIVACY_TOGGLE" });
//   };

//   // IMP : Input number ko counter me add karne ke liye handler
//   const handleAdd = () => {
//     dispatch({
//       type: "ADD",
//       payload: {
//         // Input ki current text value ko payload me pass kar rahe hain
//         num: inputElement.current.value,
//       },
//     });
//     // Action dispatch karne ke baad input field ko clear kar dete hain
//     inputElement.current.value = "";
//   };

//   // Input number ko counter se subtract karne ke liye handler
//   const handleSubtract = () => {
//     dispatch({
//       type: "SUBTRACT",
//       payload: {
//         // Action dispatch karne ke baad input field ko clear kar dete hain
//         num: inputElement.current.value,
//       },
//     });
//     inputElement.current.value = "";
//   };

//   return (
//     <>
//       <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={handleIncrement}
//         >
//           +1
//         </button>

//         <button
//           type="button"
//           className="btn btn-success"
//           onClick={handleDecrement}
//         >
//           -1
//         </button>
//         {/* cmt */}
//         <button
//           type="button"
//           className="btn btn-warning"
//           //
//           onClick={handlePrivacyToggle}
//         >
//           Privacy Toggle
//         </button>
//       </div>
//       {/* add className : control-row */}
//       <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
//         {/* change button into input : User input lene ke liye  */}
//         <input
//           // type kr diya text
//           type="text"
//           placeholder="Enter number"
//           className="number-input"
//           ref={inputElement}
//         />

//         <button
//           type="button"
//           // add className btn-info
//           className="btn btn-info"
//           onClick={handleAdd}
//         >
//           Add
//         </button>
//         <button
//           type="button"
//           // add className btn-danger
//           className="btn btn-danger"
//           onClick={handleSubtract}
//         >
//           Subtract
//         </button>
//       </div>
//     </>
//   );
// };

// export default Controls;

// 16.58.59
// import { useDispatch } from "react-redux";
// import { useRef } from "react";
// import { counterActions } from "../../store";
// const Controls = () => {
//   const dispatch = useDispatch();
//   const inputElement = useRef();

//   // const handleIncrement = () => {
//   //   console.log("increment called");
//   //   //
//   //   counterActions.increment();
//   // };
//   // 17.02.03
//   // const handleIncrement = () => {
//   //   console.log("increment called", counterActions.increment());
//   // };
//   const handleIncrement = () => {
//     dispatch(counterActions.increment());
//   };

//   // const handleDecrement = () => {
//   //   console.log("decrement called");
//   //   //
//   //   counterActions.decrement();
//   // };
//   const handleDecrement = () => {
//     dispatch(counterActions.decrement());
//   };

//   const handlePrivacyToggle = () => {
//     dispatch({ type: "PRIVACY_TOGGLE" });
//   };

//   const handleAdd = () => {
//     dispatch({
//       type: "ADD",
//       payload: {
//         num: inputElement.current.value,
//       },
//     });
//     inputElement.current.value = "";
//   };

//   const handleSubtract = () => {
//     dispatch({
//       type: "SUBTRACT",
//       payload: {
//         num: inputElement.current.value,
//       },
//     });
//     inputElement.current.value = "";
//   };

//   return (
//     <>
//       <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={handleIncrement}
//         >
//           +1
//         </button>

//         <button
//           type="button"
//           className="btn btn-success"
//           onClick={handleDecrement}
//         >
//           -1
//         </button>
//         <button
//           type="button"
//           className="btn btn-warning"
//           onClick={handlePrivacyToggle}
//         >
//           Privacy Toggle
//         </button>
//       </div>
//       <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
//         <input
//           type="text"
//           placeholder="Enter number"
//           className="number-input"
//           ref={inputElement}
//         />

//         <button type="button" className="btn btn-info" onClick={handleAdd}>
//           Add
//         </button>
//         <button
//           type="button"
//           className="btn btn-danger"
//           onClick={handleSubtract}
//         >
//           Subtract
//         </button>
//       </div>
//     </>
//   );
// };

// export default Controls;

// 17.05.42
// import { useDispatch } from "react-redux";
// import { act, useRef } from "react";
// import { counterActions } from "../../store";
// const Controls = () => {
//   const dispatch = useDispatch();
//   const inputElement = useRef();

//   const handleIncrement = () => {
//     dispatch(counterActions.increment());
//   };

//   const handleDecrement = () => {
//     dispatch(counterActions.decrement());
//   };

//   const handlePrivacyToggle = () => {
//     dispatch({ type: "PRIVACY_TOGGLE" });
//   };

//   // IMp: 17.05.42
//   // const handleAdd = () => {
//   //   dispatch(
//   //     // action call karte waqt bracket () ke andar jo bhi data bhejte hain, Redux usko automatically action.payload ke andar daal deta hai.
//   //     counterActions.add({
//   //       num: inputElement.current.value,
//   //     }),
//   //   );
//   // };
//   // 17.07.08
//   const handleAdd = () => {
//     // input ka value direct daal diya
//     dispatch(counterActions.add(inputElement.current.value));
//     inputElement.current.value = "";
//   };

//   const handleSubtract = () => {
//     dispatch(counterActions.subtract(inputElement.current.value));
//     inputElement.current.value = "";
//   };

//   return (
//     <>
//       <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={handleIncrement}
//         >
//           +1
//         </button>

//         <button
//           type="button"
//           className="btn btn-success"
//           onClick={handleDecrement}
//         >
//           -1
//         </button>
//         <button
//           type="button"
//           className="btn btn-warning"
//           onClick={handlePrivacyToggle}
//         >
//           Privacy Toggle
//         </button>
//       </div>
//       <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
//         <input
//           type="text"
//           placeholder="Enter number"
//           className="number-input"
//           ref={inputElement}
//         />

//         <button type="button" className="btn btn-info" onClick={handleAdd}>
//           Add
//         </button>
//         <button
//           type="button"
//           className="btn btn-danger"
//           onClick={handleSubtract}
//         >
//           Subtract
//         </button>
//       </div>
//     </>
//   );
// };

// export default Controls;

// 17.12.31
// import { useDispatch } from "react-redux";
// import { useRef } from "react";
// import { counterActions } from "../../store";
// const Controls = () => {
//   const dispatch = useDispatch();
//   const inputElement = useRef();

//   const handleIncrement = () => {
//     dispatch(counterActions.increment());
//   };

//   const handleDecrement = () => {
//     dispatch(counterActions.decrement());
//   };

//   const handlePrivacyToggle = () => {
//     dispatch({ type: "PRIVACY_TOGGLE" });
//   };

//   const handleAdd = () => {
//     dispatch(counterActions.add(inputElement.current.value));
//     inputElement.current.value = "";
//   };

//   const handleSubtract = () => {
//     dispatch(counterActions.subtract(inputElement.current.value));
//     inputElement.current.value = "";
//   };

//   return (
//     <>
//       <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={handleIncrement}
//         >
//           +1
//         </button>

//         <button
//           type="button"
//           className="btn btn-success"
//           onClick={handleDecrement}
//         >
//           -1
//         </button>
//         <button
//           type="button"
//           className="btn btn-warning"
//           onClick={handlePrivacyToggle}
//         >
//           Privacy Toggle
//         </button>
//       </div>
//       <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
//         <input
//           type="text"
//           placeholder="Enter number"
//           className="number-input"
//           ref={inputElement}
//         />

//         <button type="button" className="btn btn-info" onClick={handleAdd}>
//           Add
//         </button>
//         <button
//           type="button"
//           className="btn btn-danger"
//           onClick={handleSubtract}
//         >
//           Subtract
//         </button>
//       </div>
//     </>
//   );
// };

// export default Controls;

// 17.17.35
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "../../store/counter";
import { privacyActions } from "../../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };

  const handleAdd = () => {
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(counterActions.subtract(inputElement.current.value));
    inputElement.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter number"
          className="number-input"
          ref={inputElement}
        />

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
