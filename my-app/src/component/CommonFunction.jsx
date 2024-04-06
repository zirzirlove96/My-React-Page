import { forwardRef, useImperativeHandle, useState } from "react";

const CommonFunction = forwardRef((props, ref) => {
  const [text, setText] = useState("");
  useImperativeHandle(ref, () => ({
    inputText2(value) {
      //setText(value);
      console.log(value);
    },
  }));
});

export default CommonFunction;
