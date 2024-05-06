import { useEffect, useImperativeHandle, useState } from "react";
import style from "../src/style/main.module.css";
import Button from "./component/Button";
import styled from "styled-components";
import ResultInput from "./component/ResultInput";
import axios from "axios";
import SelectToOption from "./component/SelectToOption";

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

  const [selectTcode, setSelectTcode] = useState("");

  //계정정보
  async function getUserInfo() {
    try {
      const response = await axios.post("http://localhost:4000/common", {
        ampCode: "amp_engine",
      });
      setSiteCode(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  //특별처리 적용한 사항 리스트(초기화 => 업체의 모든 특별처리 가져오기)
  async function getSpecialEffectList() {
    try {
      const response = await axios.get("http://localhost:4000/common/list");
      setSpeialCodeList(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  //쇼핑몰코드의 중복기준 및 이름 및 기본 주문 정보들 가져오기
  async function getAutoOrderInfo() {
    try {
      await console.log(siteCode);
      const response = await axios.get(
        "http://localhost:4000/common?siteCode=" + siteCode
      );
    } catch (e) {
      console.error(e);
    }
  }

  //특별처리 및 특별처리 로그 저장하기
  async function insertOrderSpecial(ampCode, siteCode, specialCode) {
    try {
      const response = await axios.post("http://localhost:4000/common/save", {
        ampCode: ampCode,
        siteCode: siteCode,
        specialCode: specialCode,
      });
      const response2 = await axios.post(
        "http://localhost:4000/common/saveLog",
        {
          wdate: Date,
          siteCode: siteCode,
          logProcess: specialCode,
        }
      );
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getUserInfo(); //사이트 코드 가져오기
    getAutoOrderInfo();
    getSpecialEffectList(); //선택한 쇼핑몰코드에 적용된 특별처리 가져오기
  }, []);

  const updateInput = (value) => {
    setInput(value);
  };

  const onClick = (e) => {
    if (e.target.value === "save") {
      insertOrderSpecial("amp_engine", code, input);
      setArr((currentArray) => [input, ...currentArray]);
    }
  };

  //선택형 특별처리
  const SelectMethod = (e) => {
    setSelectTcode(e.target.value);
  };

  //쇼핑몰 변경될때
  const siteCodeChange = (e) => {
    const siteCode = e.target.value;
    setCode(siteCode);
    //getAutoOrderInfo(siteCode); //사이트 코드의 이름 및 order 정보들
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
                  <option key={value.siteCode}>{value.siteCode}</option>
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
                        list.siteCode === code
                          ? list.specialCode
                              .split("\n")
                              .map((list2) => <li>{list2}</li>)
                          : ""
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
                <select onChange={SelectMethod}>
                  <option>선택해주세요.</option>
                  <option value={"deliv_method"}>배송방법</option>
                  <option value={"order_info"}>주문자정보</option>
                </select>
                <br></br>
                {selectTcode === "" ? (
                  ""
                ) : (
                  <SelectToOption props={selectTcode}></SelectToOption>
                )}
              </details>
            </div>
            <div>
              <details>
                <summary>조건문 특별처리</summary>
                <ResultInput siteCode={code}></ResultInput>
                <br></br>
                <SAVEBUTTON onClick={onClick} value="save">
                  save
                </SAVEBUTTON>
              </details>
            </div>
          </>
        )}
      </div>
    </>
  );
}

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
