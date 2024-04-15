import { useState } from "react";
import axios from "axios";

const Select = () => {
  const [option, setOption] = useState([]);
  /*axios.get("/common/getRegisterList").then((value) => {
    setOption((currentArray) => [value, ...currentArray]);
  });*/

  return (
    <select>
      <option value={option}>{option}</option>
    </select>
  );
};

export default Select;
