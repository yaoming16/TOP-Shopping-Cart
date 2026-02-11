function Button({ text, manageClick }) {
  return <button onClick={() => manageClick()}>{text}</button>;
}

export default Button;
