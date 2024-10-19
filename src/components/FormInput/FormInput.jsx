import "./FormInput.css";

const FormInput = ({ inputName, onChange, ...props }) => {
  return (
    <>
      <label htmlFor={props.id}>{inputName}</label>
      <input type={props.type} onChange={onChange} {...props}></input>
    </>
  );
};

export default FormInput;
