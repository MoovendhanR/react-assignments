import { useState } from "react";
import Select from "./Components/Select";
import "./style.css";

const options = [
  { key: 1, value: "one" },
  { key: 2, value: "two" },
  { key: 3, value: "Three" },
  { key: 4, value: "four" },
  { key: 5, value: "five" },
  { key: 6, value: "six" },
  { key: 7, value: "seven" },
  { key: 8, value: "eight" }
];



function App() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="App">
      <center>

      <h1>Select Dropdown</h1>
      <Select
        options={options}
        onChange={(item) => setSelectedOption(item)}
        selectedKey={selectedOption}
        placeholder={"type to search"}
        />
      <p>selected option: {selectedOption}</p>
        </center>
    </div>
  );
}


export default App;
