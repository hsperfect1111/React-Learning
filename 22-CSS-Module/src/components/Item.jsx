import styles from "./Item.modules.css";

const Item = ({ foodItem }) => {
  return (
    // Imp 4:05 : class ko prefrence de raha hai
    // Imp ${style["kg-item"]}
    <li className={`${style["kg-item"]}`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
    </li>
  );
};

export default Item;
