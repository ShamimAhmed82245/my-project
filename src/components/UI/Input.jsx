const Input = (props) => {
  return (
    <div>
      <label htmlFor="">{props.label} : </label>
      <input type={props.input.type} value={props.input.value} />
    </div>
  );
};

export default Input;
