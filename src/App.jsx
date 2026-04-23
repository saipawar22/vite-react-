import {  Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login  from "./Login";
import NavBar from "./NavBar";
import College from "./College";
import Student from "./student";
import Departments from "./Departments";
import Details from "./college details";
function App() {
  return (
    <>
<NavBar/>
      <Routes>
        <Route path="/" element={<h1><Home/></h1>} />
        <Route path="/about" element={<h1><About /></h1>} />
        <Route path="/login" element={<h1><Login /></h1>} />
        <Route path="/College" element={<h1><College /></h1>} />
        <Route path="/*" element={<h1>404 - Page Not Found</h1>}>
        <Route path="student" element={<h1><Student /></h1>}/>
         <Route path="departments" element={<h1><Departments /></h1>}/>
          <Route path="details" element={<h1><Details /></h1>}/>
        </Route>
        
         
      </Routes>

    </>
  );
}

export default App;
