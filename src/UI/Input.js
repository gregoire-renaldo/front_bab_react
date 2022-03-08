const Input = (props) => {
  return (
    <div className="input">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input} type="text" />
{/* {type: text} */}
    </div>
  );
};

export default Input;
