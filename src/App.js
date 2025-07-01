import "./styles.css";
import { Input } from "./Input.js";
import { useState } from "react";
export default function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <h1>Enter your list of inputs</h1>
      <Input data={data} setData={setData} />
    </div>
  );
}
