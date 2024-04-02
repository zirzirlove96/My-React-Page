import { useEffect, useRef, useState } from "react";
import ResultInput from "./ResultInput";

const Button = ({ value }) => {
  const [state, setState] = useState("");
  const [state2, setState2] = useState([]);
  const childRef = useRef(null);
  const onClick = (event) => {
    setState(event.target.value);
    //console.log(childRef);
  };

  useEffect(() => {
    if (state != "") {
      childRef.current.InputText(state);
    }
  }, [state]);
  return (
    <>
      <ResultInput ref={childRef}></ResultInput>
      <button value={value} onClick={onClick}>
        {value}
      </button>
    </>
  );
};

export default Button;
