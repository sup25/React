import React, { useState } from "react";

function App() {
  const [values, setValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    const limits = {
      input1: 7,
      input2: 3,
      input3: 4,
      input4: 2,
      input5: 6
    };
    if (value.length > limits[name]) {
      switch (name) {
        case "input1":
          alert("Value should not exceed 7 digits");
          break;
        case "input2":
          alert("Value should not exceed 3 digits");
          break;
        case "input3":
          alert("Value should not exceed 4 digits");
          break;
        case "input4":
          alert("Value should not exceed 2 digits");
          break;
        case "input5":
          alert("Value should not exceed 6 digits");
          break;
        default:
          break;
      }
    }
  };

  return (
    <div>
      <input
        type="number"
        name="input1"
        value={values.input1}
        onChange={handleInputChange}
      />
      <br /><br />
      <input
        type="number"
        name="input2"
        value={values.input2}
        onChange={handleInputChange}
      />
      <br /><br />
      <input
        type="number"
        name="input3"
        value={values.input3}
        onChange={handleInputChange}
      />
      <br /><br />
      <input
        type="number"
        name="input4"
        value={values.input4}
        onChange={handleInputChange}
      />
      <br /><br />
      <input
        type="number"
        name="input5"
        value={values.input5}
        onChange={handleInputChange}
      />
    </div>
  );
}
export default App;
