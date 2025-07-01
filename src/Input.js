import { useState } from "react";

export const Input = ({ data, setData }) => {
  const [inputField, setInputField] = useState("");
  const renameInput = (index) => {
    setInputField(data[index]);
    handleDelete(index);
  };
  const handleKey = (e) => {
    const newValue = e.target.value;
    if (newValue.trim() != "") {
      setData((prev) => [...prev, newValue]);
    }
    setInputField("");
  };
  const handleDelete = (delIndex) => {
    const newData = data.filter((El, index) => delIndex !== index);
    setData((prev) => newData);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your Input"
        onKeyDown={(e) => e.key === "Enter" && handleKey(e)}
        value={inputField}
        onChange={(e) => setInputField(e.target.value)}
      />
      <div className="input-lists">
        {data.map((node, index) => {
          return (
            <div className="whole-input" key={index}>
              <span onClick={(e) => renameInput(index)} className="each-input">
                {node}
              </span>
              <sup onClick={(e) => handleDelete(index)}>X</sup>
            </div>
          );
        })}
      </div>
    </div>
  );
};
