import "./Button.css";

const Button = ({ text, onClick, ...props }) => {
  return (
    <>
      <button className='button-form' type={props.type} onClick={(event) => 
        {event.preventDefault(); 

        onClick()}}>{text}</button>
    </>
  );
};

export default Button;
