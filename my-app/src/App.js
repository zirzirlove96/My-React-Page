import { useImperativeHandle, useState } from "react";
import style from "../src/style/main.module.css";
import Button from "./component/Button";
import CommonFunction from "./component/CommonFunction";
import ResultInput from "./component/ResultInput";

function App() {
  /*useImperativeHandle(ref, () => ({
    inputText2(value) {
      console.log(value);
    },
  }));*/
  const [input, setInput] = useState("");
  const updateInput = (value) => {
    setInput(value);
  };
  return (
    <>
      <input type="text" readOnly value={input}></input>
      <div className={style.div}>
        <div className={style.div2}>
          <Button style={style.button} onClick={updateInput}></Button>
        </div>
      </div>
    </>
  );
}

/**      <hr />
      <div>
        <ResultInput></ResultInput>
      </div> */

export default App;
