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
          {/* it allows a component to access the dynamic parts of the URL as key-value pairs.
          It is used to extract information from the URL and use it to render specific content
            within the component. 
            Not using useParams means that the component is not able to access the dynamic parts of the
            URL and therefore cannot use that information to render specific content. 
            The component would have to rely on props or state to determine what to render.
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
