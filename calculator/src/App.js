import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [result, setResult] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  const onCalulate = () => {
    axios.post(`https://localhost:7113/Add?firstNumber=${firstNumber}&secondNumber=${secondNumber}`).then((response) => {
      setResult(response);
    });
  };

  const onFirstNumberChange = (e) => {
    setFirstNumber(e.target.value);
  };

  const onSecondNumberChange = (e) => {
    setSecondNumber(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <h3>Enter Two Number</h3>
        <div>
          <label>First Number</label>
          <input onChange={onFirstNumberChange}></input>
        </div>
        <div>
          <label>Second Number</label>
          <input onChange={onSecondNumberChange}></input>
        </div>
        <div>
          <button onClick={() => onCalulate()}>Submit</button>
        </div>
        <div>
          <label>Result</label>
          <label>{result}</label>
        </div>
      </div>
    </div>
  );
}

export default App;
