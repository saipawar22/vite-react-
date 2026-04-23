import { NavLink, Outlet } from "react-router";
export default function College() {
  return (
    <>
      <div >
        <h1>College page</h1>
        <NavLink className="nav-link" to="student">student</NavLink>
        <NavLink className="nav-link" to="departments">Departments</NavLink>
        <NavLink className="nav-link" to="details">college details</NavLink>
        <Outlet />
      </div>
    </>
  );
}
