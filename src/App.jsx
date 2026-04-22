import { Link,Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About"
function App() {
  return (
    <>
     <Link to="/Home">Home page</Link><br/>
   <Link to="/About">About page</Link>
<Routes>
 
<Route path="/Home" element={<Home />} />
<Route path="/About" element={<About />} />
</Routes> 
    </>
  );
}

export default App;
