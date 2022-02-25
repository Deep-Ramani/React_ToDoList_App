import "./Button.css";

function Button(props) {
  if (props.hideButton) {
    return null;
  }

  return (
    <div className="button">
      <button className="buttonplus" onClick={() => props.toggleHideButton()}>
        +
      </button>
    </div>
  );
}

export default Button;
