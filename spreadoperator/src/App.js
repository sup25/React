import "./styles.css";
import { useState } from "react";
function App() {
  const [text, setText] = useState({
    name: "sup",
    place: "kathmandu",
    language: "Reactjs"
  });
  const updateData = () => {
    // setText("gg")
    // if we do this our state won't change because we are passing string, where we
    //should be passing an object.
    // setText({
    // name:"gg",
    // place:"Chabahil",
    // language:"Redux"
    // })
    //the state will change, but there is another way, the clean way to code
    //we use spread operator
    setText({
      ...text,
      name: "gg",
      place: "chabahil",
      language: "Redux"
    });
  };

  return (
    <div>
      {/* <h1>{text}</h1> */}
      {/* if you do this then our data won't be
    displayed. It will give error saying
    Objects are not valid as a React child.
    If you meant to render a collection of children,
     use an array instead */}

      {/* you can render by following way */}
      <h1> {text.name}</h1>
      <h1> {text.place}</h1>
      <h1>{text.language}</h1>

      <button onClick={updateData}>
        Click me!
        {}
      </button>
    </div>
  );
}
export default App;
