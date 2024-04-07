import style from "../src/style/main.module.css";
import Button from "./component/Button";
import CommonFunction from "./component/CommonFunction";

function App() {
  return (
    <div>
      <div className={style.Div}>
        <div className={style.Div2}>
          <Button></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
