import Input from "../UI/Input";
const MealItemForm = () => {
  return (
    <form action="">
      <Input label="Amount" input={{ type: "Number", value: 1 }} />
      <button className="bg-orange-700	rounded-lg px-8">add</button>
    </form>
  );
};

export default MealItemForm;
