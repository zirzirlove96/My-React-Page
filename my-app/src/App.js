import logo from "./logo.svg";
import "./App.css";
import style from "../src/style/main.module.css";

function App() {
  //const [text, setText] = useState("");
  return (
    <div className={style.App}>
      <div>
        <form>
          <input type="text"></input>
          <button></button>
        </form>
      </div>
      <hr />
      <div>
        <select>
          <option></option>
        </select>
      </div>
    </div>
  );
}

export default App;
