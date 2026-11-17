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
import { useDispatch } from "react-redux";
import { useRef } from "react";

const Controls = () => {
  const dispatch = useDispatch();
  // input ki value read krni h to uske liye use kr lege useRef
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  //
  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  //
  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        // inputElement ki value bhi pass kr dege payload me
        num: inputElement.current.value,
      },
    });
    // use krne ke baad idki value ko kr dege blank
    inputElement.current.value = "";
  };

  //
  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: inputElement.current.value,
      },
    });
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
        {/* cmt */}
        <button
          type="button"
          class="btn btn-warning"
          //
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      {/* add className : control-row */}
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        {/* change button into input  */}
        <input
          // type kr diya text
          type="text"
          placeholder="Enter number"
          className="number-input"
          ref={inputElement}
        />

        <button
          type="button"
          // add className btn-info
          className="btn btn-info"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          // add className btn-danger
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
