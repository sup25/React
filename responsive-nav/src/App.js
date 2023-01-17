import { useState } from "react";
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
