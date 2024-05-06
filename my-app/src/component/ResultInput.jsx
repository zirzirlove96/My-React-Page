import { forwardRef, useImperativeHandle, useState } from "react";

const ResultInput = () => {
  const [text, setText] = useState("");

  return (
    <>
      <div>
        <select>
          <option>배송비</option>
        </select>
        가(이)
        <select>
          <option>0원</option>
        </select>
        (이)라면
        <select>
          <option>배송방법</option>
        </select>
        <select>
          <option>유료</option>
        </select>
        이다.
        <button>SAVE</button>
      </div>
    </>
  );
};

export default ResultInput;
