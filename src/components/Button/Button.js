import "./Button.css";

const Button = ({ text, onclick, ...props }) => {
  return (
    <main>
      <div>
        <button className="button-form" type={props.type} onClick={(event) => {
            event.preventDefault();
            onclick();
          }}>{text}</button>
      </div>
    </main>
  );
};

export default Button;