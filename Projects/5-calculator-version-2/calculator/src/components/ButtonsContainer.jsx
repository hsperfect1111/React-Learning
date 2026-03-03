// import styles from "./ButtonsContainer.module.css";

// const ButtonsContainer = () => {
//   const buttonNames = [
//     "C",
//     "1",
//     "2",
//     "+",
//     "3",
//     "4",
//     "-",
//     "5",
//     "6",
//     "*",
//     "7",
//     "8",
//     "/",
//     "=",
//     "9",
//     "0",
//     ".",
//   ];
//   return (
//     <div className={styles.buttonsContainer}>
//       {buttonNames.map((buttonName) => (
//         <button className={styles.button}>{buttonName}</button>
//       ))}
//     </div>
//   );
// };

// export default ButtonsContainer;

// after 6:30
// import styles from "./ButtonsContainer.module.css";

// const ButtonsContainer = ({ onButtonClick }) => {
//   const buttonNames = [
//     "C",
//     "1",
//     "2",
//     "+",
//     "3",
//     "4",
//     "-",
//     "5",
//     "6",
//     "*",
//     "7",
//     "8",
//     "/",
//     "=",
//     "9",
//     "0",
//     ".",
//   ];
//   return (
//     <div className={styles.buttonsContainer}>
//       {buttonNames.map((buttonName) => (
//         <button className={styles.button} onClick={onButtonClick}>
//           {buttonName}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default ButtonsContainer;

// after 6:35
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        // refrence paas krne ki jagha anonymous function paas kr dege
        <button
          className={styles.button}
          // buttonName humne App.jsx me buttonText kr diya hai
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
