// import styles from "./FoodInput.module.css";

// const FoodInput = ({ handleOnChange }) => {
//   return (
//     <input
//       type="text"
//       placeholder="Enter Food Item here"
//       className={styles.foodInput}
//       onChange={handleOnChange}
//     />
//   );
// };

// export default FoodInput;

// after 5:55 min

import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      // event listener onKeyDown
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
