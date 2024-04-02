import { forwardRef, useImperativeHandle, useState } from "react";

const ResultInput = forwardRef((props, ref) => {
  const [text, setText] = useState("");
  useImperativeHandle(ref, () => ({
    InputText(value) {
      console.log(value);
    },
  }));
  //const ff = ({ state }) => {};
  //return <input value={state}>{state}</input>;
});

export default ResultInput;
