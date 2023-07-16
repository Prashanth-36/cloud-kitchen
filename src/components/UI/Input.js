import "./Input.css";
const Input = (props) => {
  return (
    <>
      <label htmlFor={props.attr.id}>
        <b>{props.label}</b>
      </label>
      <input {...props.attr} />
    </>
  );
};

export default Input;
