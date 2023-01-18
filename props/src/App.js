import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      {/* using prop we can change the value and pass it to the function where we want
      for example in this Navbar component we can pass title and use it in Navbar.jsx 
      component 
      */}

      <Navbar title="logo" />
      <h1>Check the console!</h1>
    </div>
  );
}

export default App;
