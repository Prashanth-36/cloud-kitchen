import classes from "./TextArea.module.css";

const TextArea = (props) => {
  const growArea = (event) => {
    event.target.style.height = event.target.scrollHeight + "px";
  };
  return (
    <>
      <label className={classes.label} htmlFor={props.label}>
        <b>{props.label}</b>
      </label>
      <textarea
        onInput={growArea}
        className={`${classes["text-area"]} ${
          props.className ? props.className : ""
        }`}
        id={props.label}
      ></textarea>
    </>
  );
};

export default TextArea;
