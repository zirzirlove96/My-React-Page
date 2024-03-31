import { useEffect, useState } from "react";
import ResultInput from "./ResultInput";

const Button = ({ event, value }) => {
  const [state, setState] = useState();
  const [state2, setState2] = useState([]);
  const onClick = (event) => {
    setState(event.target.value);
  };
  setState2((currentArray) => [state, ...currentArray]);
  ResultInput(state2);
  return (
    <button value={value} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
