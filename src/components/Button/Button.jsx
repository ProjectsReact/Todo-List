import "./Button.css";

const Button = ({ text, onClick, ...props }) => {
  return (
    <main>

      <div>
        <button className='button-form' type={props.type} onClick={(event) => 
          {event.preventDefault(); 

          onClick()}}>{text}</button>
      </div>
    </main>
  );
};

export default Button;
