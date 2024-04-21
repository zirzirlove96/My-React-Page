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
  const [siteCode, setSiteCode] = useState([]);

  const [orderinfo, setOrderinfo] = useState();
  const [speialCodeList, setSpeialCodeList] = useState();

  //계정정보
  async function getUserInfo() {
    try {
      const response = await axios.post("http://localhost:4000/common", {
        ampCode: "amp_engine",
      });
      setSiteCode(response.data);

      return response;
    } catch (e) {
      console.error(e);
    }
  }

  //특별처리 적용한 사항 리스트
  async function getSpecialEffectList() {
    try {
      const response = await axios.get(
        "http://localhost:4000/common/list?ampCode=amp_engine&siteCode=A077"
      );
      console.log(response.data);
      setSpeialCodeList(response.data);
      return response;
    } catch (e) {
      console.error(e);
    }
  }

  //특별처리 저장하기
  async function insertOrderSpecial(ampCode, siteCode, specialCode) {
    try {
      //console.log(ampCode);
      const response = await axios.post("http://localhost:4000/common/save", {
        ampCode: ampCode,
        siteCode: siteCode,
        specialCode: specialCode,
      });
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getUserInfo(); //사이트 코드 가져오기

    //버튼에 넣어줄 주문 데이터
    /*const func1 = async function () {
      const response2 = await axios.get("localhost:4000/common?siteCode=");
      setOrderinfo(response2);
    };*/
    //자주쓰는 특별처리 리스트
    /*const func2 = async function () {
      const response2 = await axios.get("localhost:4000/common?1");
    }*/
    //func1();
  }, []);

  useEffect(() => {
    getSpecialEffectList(); //선택한 쇼핑몰코드에 적용된 특별처리 가져오기
  }, [code]);

  useEffect(() => {
    console.log(arr);
  }, [arr]);

  const updateInput = (value) => {
    console.log(value);
    setInput(value);
  };
  const onClick = (e) => {
    if (e.target.value === "save") {
      //console.log("amp_engine", code, input);
      insertOrderSpecial("amp_engine", code, input);
      setArr((currentArray) => [input, ...currentArray]);
    }
  };
  const siteCodeChange = (e) => {
    const siteCode = e.target.value;
    setCode(siteCode);
  };
  return (
    <>
      <div>
        <div>
          <select onChange={siteCodeChange}>
            <option>사이트코드</option>

            {siteCode == ""
              ? "등록된 쇼핑몰이 없습니다."
              : siteCode.map((value) => (
                  <option value={value.siteCode}>{value.siteCode}</option>
                ))}
          </select>
        </div>
        {code == "" ? (
          "사이트 코드를 선택해주세요."
        ) : (
          <>
            <div>
              <details>
                <summary>{code} 쇼핑몰에 적용된 특별처리 내역</summary>
                <ul>
                  {speialCodeList == ""
                    ? "적용된 특별처리가 없습니다"
                    : speialCodeList.map((list) =>
                        list.specialCode
                          .split("\n")
                          .map((list2) => <li>{list2}</li>)
                      )}
                </ul>
              </details>
            </div>
            <div>
              <details>
                <summary>계산기식 특별처리</summary>
                <div className={style.div}>
                  <input type="text" value={input}></input>
                  <DIV2 columns="8">
                    <Button
                      style={style.button}
                      onClick={updateInput}
                      siteCode={code}
                      orderinfo={orderinfo}
                    ></Button>
                  </DIV2>
                  <SAVEBUTTON onClick={onClick} value="save">
                    save
                  </SAVEBUTTON>
                </div>
              </details>
            </div>
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
