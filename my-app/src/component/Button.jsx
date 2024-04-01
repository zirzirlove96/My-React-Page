import { useEffect, useState } from "react";
import ResultInput from "./ResultInput";

const Button = ({ value }) => {
  const [state, setState] = useState("");
  const [state2, setState2] = useState([]);
  const onClick = (event) => {
    setState(event.target.value);
  };

  useEffect(() => {
    if (state != "") {
      ResultInput({ state });
    }
  }, [state]);
  return (
    <button value={value} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
