// import styles from "./Item.module.css";

// const Item = ({ foodItem }) => {
//   const handleBuyButtonClicked = (foodItem) => {
//     console.log(`${foodItem} being bought`);
//   };

//   return (
//     <li className={`${styles["kg-item"]} list-group-item`}>
//       <span className={styles["kg-span"]}>{foodItem}</span>
//       {/* IMP : 5:09 min */}
//       <button
//         className={`${styles.button} btn btn-info`}
//         // anonymous method bana rahe the taki immediately call naa ho jaye
//         onClick={() => handleBuyButtonClicked(foodItem)}
//       >
//         Buy
//       </button>
//     </li>
//   );
// };

// export default Item;

// 5:13:27
// import styles from "./Item.module.css";

// const Item = ({ foodItem }) => {
//   const handleBuyButtonClicked = () => {
//     console.log(`${foodItem} being bought`);
//   };

//   return (
//     <li className={`${styles["kg-item"]} list-group-item`}>
//       <span className={styles["kg-span"]}>{foodItem}</span>
//       {/* IMP : 5:09 min */}
//       <button
//         className={`${styles.button} btn btn-info`}
//         onClick={handleBuyButtonClicked}
//       >
//         Buy
//       </button>
//     </li>
//   );
// };

// export default Item;

// 5:14:05
import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} being bought`);
  };

  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      {/* IMP : 5:09 min */}
      <button
        className={`${styles.button} btn btn-info`}
        // jb bhi aap onClick method likhte hai to event bhi apko paas hota hai
        onClick={(event) => handleBuyButtonClicked(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
