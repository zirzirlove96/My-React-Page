import { useState } from "react";

const ResultInput = ({ state }) => {
  console.log(state);
  const [text, setText] = useState("");
  /*if(state != "") {
    
  }*/
  return <input value={state}>{state}</input>;
};

export default ResultInput;
