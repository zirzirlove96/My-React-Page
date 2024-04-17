import { useEffect, useImperativeHandle, useState } from "react";
import style from "../src/style/main.module.css";
import Button from "./component/Button";
import styled from "styled-components";
import Select from "./component/Select";
import ResultInput from "./component/ResultInput";
import axios from "axios";

function App() {
  /*useImperativeHandle(ref, () => ({
    inputText2(value) {
      console.log(value);
    },
  }));*/
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);
  const [code, setCode] = useState("");

  /*async function getUserInfo() {
    try {
      const response = await axios.post("localhost:4000/common", {
        ampCode: "amp_engine",
      });

      return response;
    } catch (e) {
      console.error(e);
    }
  }*/

  useEffect(() => {
    //const response = getUserInfo(); //사이트 코드 가져오기
    //버튼에 넣어줄 주문 데이터
    /*const func1 = async function () {
      const response2 = await axios.get("localhost:4000/common?1");
    };*/
    //자주쓰는 특별처리 리스트
    /*const func2 = async function () {
      const response2 = await axios.get("localhost:4000/common?1");
    }*/
    //func();
  }, []);

  const updateInput = (value) => {
    setInput(value);
  };
  const onClick = (e) => {
    if (e.target.value === "save") {
      setArr((currentArray) => [input, ...currentArray]);
    }
  };
  const siteCodeChange = (e) => {
    const siteCode = e.target.value;
    console.log(e.target.value);
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
            <details>
              <summary>계산기식 특별처리</summary>
              <div className={style.div}>
                <input type="text" readOnly value={input}></input>
                <DIV2 columns="8">
                  <Button
                    style={style.button}
                    onClick={updateInput}
                    siteCode={code}
                  ></Button>
                </DIV2>
                <SAVEBUTTON onClick={onClick} value="save">
                  save
                </SAVEBUTTON>
                <ul>{arr == "" ? "" : arr.map((value) => <li>{value}</li>)}</ul>
              </div>
            </details>
            <div>
              <details>
                <summary>선택형 특별처리</summary>
                <Select siteCode={code}></Select>
              </details>
            </div>
            <div>
              <details>
                <summary>조건문 특별처리</summary>
                <ResultInput siteCode={code}></ResultInput>
              </details>
            </div>
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
  width: 50%;
  max-width: 700px;
  height: 25%;
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
