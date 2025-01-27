import Card from "../UI/Card";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const mealItems = DUMMY_MEALS.map((meal) => {
  return <MealItem name={meal.name} price={meal.price} />;
});
console.log(mealItems);
const Meals = () => {
  return (
    <Card>
      <h1>welcome</h1>
      <ul>{mealItems}</ul>
    </Card>
  );
};

export default Meals;
