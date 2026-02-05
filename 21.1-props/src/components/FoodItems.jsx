// Imp 3:46min
import Item from "./Item";
const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {/* Imp  */}
      {items.map((item) => (
        // Imp
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
