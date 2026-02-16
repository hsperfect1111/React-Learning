// import styles from "./FoodInput.module.css";

// const FoodInput = () => {
//   return (
//     <input
//       type="text"
//       placeholder="Enter Food Item here"
//       className={styles.foodInput}
//       //IMP : 5:21 min
//       onChange={(event) => console.log(event.target.value)}
//     />
//   );
// };

// export default FoodInput;

// 5:23 onChange ko method ki form me kaise likhege
import styles from "./FoodInput.module.css";

const FoodInput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      //IMP : 5:21 min
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
