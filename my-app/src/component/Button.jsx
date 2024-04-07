import { useEffect, useRef, useState } from "react";
import ResultInput from "./ResultInput";
import CommonFunction from "./CommonFunction";

const Button = (props) => {
  const [state, setState] = useState("");
  const [state2, setState2] = useState([]);
  const childRef = useRef(null);
  const onClick = (e) => {
    const target_name = e.target.value;
    if (target_name == "DEL") {
      setState("");
      setState2([]);
    } else if (target_name == "AC") {
      let str = String(state).slice(0, -1);
      setState((prev) => str);
    } else {
      let str2 = String(state);
      if (str2.length == 1 && target_name != "=") {
        alert("변경할 값이 정해지지 않았습니다. 예시 ) 판매가 = 판매가 * 수량");
      } else {
        setState((prev) => prev + e.target.value);
      }
    }
  };

  const onClick2 = (e) => {
    if (e.target.value == "save") {
      setState2((currentArray) => [state, ...currentArray]);
    }
  };

  /*useEffect(() => {
    if (state != "") {
      console.log(state);
    }
  }, [state]);*/
  //<CommonFunction ref={childRef} />
  return (
    <>
      <input type="text" value={state} readOnly></input>

      <button value={"AC"} onClick={onClick}>
        AC
      </button>
      <button value={"DEL"} onClick={onClick}>
        DEL
      </button>
      <button value={"÷"} onClick={onClick}>
        +
      </button>
      <button value={"7"} onClick={onClick}>
        9
      </button>
      <button value={"8"} onClick={onClick}>
        7
      </button>
      <button value={"9"} onClick={onClick}>
        8
      </button>
      <button value={"*"} onClick={onClick}>
        *
      </button>
      <button value={"4"} onClick={onClick}>
        4
      </button>
      <button value={"5"} onClick={onClick}>
        5
      </button>
      <button value={"6"} onClick={onClick}>
        6
      </button>
      <button value={"-"} onClick={onClick}>
        -
      </button>
      <button value={"1"} onClick={onClick}>
        1
      </button>
      <button value={"2"} onClick={onClick}>
        2
      </button>
      <button value={"3"} onClick={onClick}>
        3
      </button>
      <button value={"="} onClick={onClick}>
        =
      </button>
      <button value={"0"} onClick={onClick}>
        0
      </button>
      <hr></hr>
      <button value={"save"} onClick={onClick2}>
        save
      </button>
      <ul>{state2 == "" ? "" : state2.map((value) => <li>{value}</li>)}</ul>
    </>
  );
};

export default Button;
