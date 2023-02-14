//useState Functional Update

import { useState } from "react";


function App() {
  const [number, setNumber] = useState(0)
  const increase = () => {
    setNumber(number + 1);
  }
  //why useState doesnot update immediatly ??
  //  when we update the state in this way, we still refer to same old value
  // const increaseAsync =()=>{
  //   setTimeout(()=>{
  //     setNumber(number+1);
  //   },2000)
  // }
  // if you try the above code and run the program, your change state (increase) will redirect
  //whenever you click increaseAsync button.

  //That is why we choose prev/currentNumber approach to update the value
  //without redericting it to time, when increaseAsync was clicked.
  //Basically we are not re-creating our number. We are just updating the current value in the memory 

  const increaseAsync = () => {
    setTimeout(() => {
      setNumber((prev) => prev + 1)
    }, 2000)
  }


  return (
    <div>
      <button onClick={increase}>Increase</button> <br /> <br />
      <button onClick={increaseAsync}>increaseAsync</button>
      <h1>{number}</h1>
    </div>
  );
}







export default App