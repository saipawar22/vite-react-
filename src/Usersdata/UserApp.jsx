import { NavLink, Route, Routes } from "react-router";
import AddUser from "./AddUser";
import EditUser from "./Useredit";
import Userlist from "./Userlist";

function UserApp() {
  return (
    <div>
      <ul className="nav-list">
        <li>
          <NavLink to="/">list</NavLink>
        </li>
        <li>
          <NavLink to="/add">add</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Userlist />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}
export default UserApp;
