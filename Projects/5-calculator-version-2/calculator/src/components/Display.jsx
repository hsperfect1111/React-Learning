// import styles from "./Display.module.css";

// const Display = ({ displayValue }) => {
//   return (
//     <input
//       className={styles.display}
//       type="text"
//       // value={displayValue} dene se kya hota hai?
//       // User jo type karega wo direct input me save nahi hoga.
//       // React decide karega kya show karna hai.
//       value={displayValue}
//       readOnly
//     />
//   );
// };

// export default Display;

// after 6:30
import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayValue}
      readOnly
    />
  );
};

export default Display;
