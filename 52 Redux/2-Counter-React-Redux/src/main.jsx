import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// import { Provider }
import { Provider } from "react-redux";
// import counterStore
import counterStore from "../store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* // STEP2  : 15.57.47 */}
    {/* provider tag hum main.jsx me dete h  */}
    <Provider store={counterStore}>
      <App />
    </Provider>
  </StrictMode>,
);

// Notes :
// Root level (main.jsx / index.jsx) par <Provider store="{counterStore}"> se <App/> ko wrap karna hi standard tarika hai.

// Is Setup Se Kya Hota Hai?
// Global Access: Ab aapke pooray React app (ya kisi bhi nested child component) me Redux store ka access mil gaya hai.
// Hooks Ready: Aap direct useSelector se state read kar sakte ho aur useDispatch se actions trigger kar sakte ho.
// Redux state se values nikalna
//   const counter = useSelector((state) => state.counter);
//   const privacy = useSelector((state) => state.privacy);

// const dispatch = useDispatch();
// const handleAdd = () => {
//     dispatch({
//       type: "ADD",
//       payload: { num: inputRef.current.value },
//     });
//     inputRef.current.value = "";
//   };
