import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import { useDeferredValue, useEffect, useState } from "react";

function App() {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [c, setC] = useState();
  const [delta, setDelta] = useState("");
  const [x1, setx1] = useState();
  const [x2, setx2] = useState();
  const [x0, setX0] = useState();
  useEffect(() => {
    document.title = "Zadanie dla Pani Samborek";
  }, []);

  const handleChangeA = (event1) => {
    setA(event1.target.value);
  };
  const handleChangeB = (event2) => {
    setB(event2.target.value);
  };
  const handleChangeC = (event3) => {
    setC(event3.target.value);
  };
  function delta1(a, b, c) {
    setDelta(b * b - 4 * a * c);
  }

  useEffect(() => {
     if (a==0)
      {
        setDelta("error, funkcja liniowa");
        setx1(null)
        setx2(null)
      }
      else  if (delta === 0) {
        setX0(-b / (2 * a));
        setx1(null);
        setx2(null);
      } else if (delta > 0) {
        setx1((-b - Math.sqrt(delta)) / (2 * a));
        setx2((-b + Math.sqrt(delta)) / (2 * a));
        setX0(null);
      } else if (delta < 0){
        alert("Delta is negative") &&
          setx1(" ") &&
          setx2(" ") &&
          setX0(" ") &&
          setDelta("Delta jest ujemna");
      }
  }, [delta, a]);
  return (
    <div className="App">
      <form>
        <input
          className="inputGorny"
          type="text"
          onChange={handleChangeA}
          value={a}
          placeholder="a"
        />
      </form>
      <form>
        <input
          className="input1"
          type="text"
          onChange={handleChangeB}
          value={b}
          placeholder="b"
        />
      </form>
      <form>
        <input
          className="input1"
          type="text"
          onChange={handleChangeC}
          value={c}
          placeholder="c"
        />
      </form>
      <button className="button1" onClick={() => delta1(a, b, c)}>
        Oblicz!
      </button>

      <h1>Δ = {delta}</h1>
      {x0 && <h1>x0 = {x0}</h1>}
      {x1 && <h1>x1 = {x1}</h1>}
      {x2 && <h1>x2 = {x2}</h1>}
    </div>
  );
}

export default App;
