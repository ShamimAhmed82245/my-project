import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const price = `$${props.price}`;
  return (
    <li className="border-b-4 border-indigo-500 flex flex-row justify-between	">
      <div>
        <h3>{props.name}</h3>
        <span>{price}</span>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
