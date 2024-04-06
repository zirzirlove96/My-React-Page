import style from "../src/style/main.module.css";
import Button from "./component/Button";
import CommonFunction from "./component/CommonFunction";

function App() {
  return (
    <div>
      <div className={style.Div}>
        <div className={style.Div2}>
          <Button value={"AC"}></Button>
          <Button value={"DEL"}></Button>
          <Button value={"÷"}></Button>
          <Button value={"+"}></Button>
          <Button value={"7"}></Button>
          <Button value={"8"}></Button>
          <Button value={"*"}></Button>
          <Button value={"4"}></Button>
          <Button value={"5"}></Button>
          <Button value={"6"}></Button>
          <Button value={"-"}></Button>
          <Button value={"1"}></Button>
          <Button value={"2"}></Button>
          <Button value={"3"}></Button>
          <Button value={"+"}></Button>
          <Button value={"0"}></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
