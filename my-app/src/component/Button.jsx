import { useEffect, useRef, useState } from "react";
import ResultInput from "./ResultInput";
import CommonFunction from "./CommonFunction";

const Button = (props) => {
  const [state, setState] = useState("");
  const [state2, setState2] = useState([]);
  const [buttonText, setButtonText] = useState([]);

  if (props.siteCode !== "") {
    /*axios.get("/common/getRegisterList").then((value) => {
    setOption((currentArray) => [value, ...currentArray]);
  });*/
  }

  const onClick = (e) => {
    const target_name = e.target.value;
    if (target_name === "DEL") {
      setState("");
      setState2([]);
    } else if (target_name === "AC") {
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

  useEffect(() => {
    props.onClick(state);
  }, [state]);
  //<CommonFunction ref={childRef} />
  return (
    <>
      <button value={"AC"} className={props.style} onClick={onClick}>
        AC
      </button>
      <button value={"DEL"} className={props.style} onClick={onClick}>
        DEL
      </button>
      <button value={"÷"} className={props.style} onClick={onClick}>
        +
      </button>
      <button value={"-"} className={props.style} onClick={onClick}>
        -
      </button>
      <button value={"+"} className={props.style} onClick={onClick}>
        +
      </button>
      <button value={"*"} className={props.style} onClick={onClick}>
        *
      </button>
      <button value={"("} className={props.style} onClick={onClick}>
        (
      </button>
      <button value={")"} className={props.style} onClick={onClick}>
        )
      </button>
      <button value={"5"} className={props.style} onClick={onClick}>
        5
      </button>
      <button value={"6"} className={props.style} onClick={onClick}>
        6
      </button>
      <button value={"-"} className={props.style} onClick={onClick}>
        -
      </button>
      <button value={"1"} className={props.style} onClick={onClick}>
        1
      </button>
      <button value={"2"} className={props.style} onClick={onClick}>
        2
      </button>
      <button value={"3"} className={props.style} onClick={onClick}>
        3
      </button>
      <button value={"="} className={props.style} onClick={onClick}>
        =
      </button>
      <button value={"0"} className={props.style} onClick={onClick}>
        0
      </button>
      <button value={"0"} className={props.style} onClick={onClick}>
        0
      </button>
      <button value={"0"} className={props.style} onClick={onClick}>
        0
      </button>
      <button value={"0"} className={props.style} onClick={onClick}>
        0
      </button>
    </>
  );
};

/**      <button value={"save"} onClick={onClick2}>
        save
      </button>
      <ul>{state2 == "" ? "" : state2.map((value) => <li>{value}</li>)}</ul> */

export default Button;
