// import Display from "./components/Display";
// import ButtonsContainer from "./components/ButtonsContainer";
// import styles from "./App.module.css";
// import { useState } from "react";

// function App() {
//   let [calVal, setCalVal] = useState("");

//   return (
//     <div className={styles.calculator}>
//       <Display displayValue={calVal}></Display>
//       <ButtonsContainer></ButtonsContainer>
//     </div>
//   );
// }

// export default App;

// after 6:30
// import Display from "./components/Display";
// import ButtonsContainer from "./components/ButtonsContainer";
// import styles from "./App.module.css";
// import { useState } from "react";

// function App() {
//   const [calVal, setCalVal] = useState("");

//   // const onButtonClick = (event) => console.log(event);

//   return (
//     <div className={styles.calculator}>
//       <Display displayValue={calVal}></Display>
//       <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
//     </div>
//   );
// }

// export default App;

// after 6:35
// import Display from "./components/Display";
// import ButtonsContainer from "./components/ButtonsContainer";
// import styles from "./App.module.css";
// import { useState } from "react";

// function App() {
//   const [calVal, setCalVal] = useState("");

//   // mujhe event nhi chahiye mujhe chahiye buttonText

//   // ButtonContainer.jsx me onButtonClick(buttonName) paas ho raha hai but yaha buttonText variable le rahe hai aisa kyu ?
//   // Ye JavaScript ka parameter naming concept hai.
//   // Function me parameter ka naam kuch bhi ho sakta hai.
//   const onButtonClick = (buttonText) => console.log(buttonText);

//   return (
//     <div className={styles.calculator}>
//       <Display displayValue={calVal}></Display>
//       <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
//     </div>
//   );
// }

// export default App;

// after 6:37
// import Display from "./components/Display";
// import ButtonsContainer from "./components/ButtonsContainer";
// import styles from "./App.module.css";
// import { useState } from "react";

// function App() {
//   const [calVal, setCalVal] = useState("");

//   const onButtonClick = (buttonText) => {
//     if (buttonText === "C") {
//     } else if (buttonText === "=") {
//     } else {
//       const newDisplayValue = calVal + buttonText;
//       setCalVal(newDisplayValue);
//     }
//   };

//   return (
//     <div className={styles.calculator}>
//       <Display displayValue={calVal}></Display>
//       <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
//     </div>
//   );
// }

// export default App;

// after 6:39
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      // eval mathematical expression ko evaluate krke de deta hai
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
