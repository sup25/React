import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar.jsx'
import Home from './pages/Home';
import About from './pages/About';
import MainState from './context/main/MainState';
function App() {
  return (
    //we wrap this components with MainState to access it to all component.
    <>
      <MainState>
        < BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>

        </BrowserRouter>
      </MainState>
    </>
  );
}

export default App;
