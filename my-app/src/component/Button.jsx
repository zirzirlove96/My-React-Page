import { useEffect, useRef, useState } from "react";
import ResultInput from "./ResultInput";
import CommonFunction from "./CommonFunction";

const Button = ({ value }) => {
  const [state, setState] = useState("");
  const childRef = useRef(null);
  const onClick = (event) => {
    setState(event.target.value);
  };

  useEffect(() => {
    if (state != "") {
      childRef.current.inputText2(state);
    }
  }, [state]);
  return (
    <>
      <CommonFunction ref={childRef} />
      <button value={value} onClick={onClick}>
        {value}
      </button>
    </>
  );
};

export default Button;
