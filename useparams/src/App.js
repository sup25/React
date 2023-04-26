import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import User from "./pages/User";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* allows you to access the parameters of the current URL.
          This can be useful if you want to dynamically render content
           based on the URL parameters.
            For example, if you have a blog application,
             you may want to render different articles based on the article ID in the URL.
             */}
          <Route path='/' element={<Home />} />
          <Route path='/about/' element={<About />} />

          <Route path='/user/:fname' element={<User />} />
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
