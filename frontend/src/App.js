
import Navbar from "./files/navbar.jsx";
// import Footer from "./files/footer.jsx";
import Register from "./files/register.jsx";
import Login from "./files/login.jsx";

import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter >
      <Navbar />

      <Routes >
         <Route  path = "/register" element = {<Register />} />
         <Route  path = "/login" element = {<Login />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
