import { useImperativeHandle, useState } from "react";
import style from "../src/style/main.module.css";
import Button from "./component/Button";
import styled from "styled-components";

function App() {
  /*useImperativeHandle(ref, () => ({
    inputText2(value) {
      console.log(value);
    },
  }));*/
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);
  const [code, setCode] = useState("");
  const updateInput = (value) => {
    console.log(value);
    setInput(value);
  };
  const onClick = (e) => {
    if (e.target.value === "save") {
      console.log(arr);
      setArr((currentArray) => [input, ...currentArray]);
    }
  };
  const siteCodeChange = (e) => {
    const siteCode = e.target.value;
    console.log(siteCode);
    setCode(siteCode);
  };
  return (
    <>
      <div>
        <div>
          <select onChange={siteCodeChange}>
            <option>사이트코드</option>
            <option value="A077">A077</option>
            <option value="A522">A522</option>
            <option value="A523">A523</option>
            <option value="A525">A525</option>
          </select>
        </div>
        {code == "" ? (
          "사이트 코드를 선택해주세요."
        ) : (
          <>
            <div className={style.div}>
              <input type="text" readOnly value={input}></input>
              <DIV2 columns="4">
                <Button style={style.button} onClick={updateInput}></Button>
              </DIV2>
              <SAVEBUTTON onClick={onClick} value="save">
                save
              </SAVEBUTTON>
              <ul>{arr == "" ? "" : arr.map((value) => <li>{value}</li>)}</ul>
            </div>
            <div>
              <select>
                <option>opt</option>
              </select>
            </div>
            <div></div>
          </>
        )}
      </div>
    </>
  );
}

/**      <hr />
      <div>
        <ResultInput></ResultInput>
      </div> */

const DIV2 = styled.div`
  display: grid;
  width: 40%;
  max-width: 450px;
  height: 50%;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
`;

const SAVEBUTTON = styled.button`
  background-color: #f2f3f5;
  border: none;
  color: black;
  font-size: 2.5rem;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 3px 3px 3px lightgray;
`;

export default App;
