// Imp 3:46min
import Item from "./Item";
const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
