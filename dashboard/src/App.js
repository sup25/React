import Work from "./component/Work";
import Navbar from "./navbar/Navbar";
import {
  Route,
  Routes,
  Outlet

} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";



function App() {
  return (
    <>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
        >
          <Route path='/' element={<Work />} />
        </Route>
      </Routes>

    </>
  );

}

export default App;
