import { NavLink, Outlet,Link } from "react-router";
export default function College() {
  return (
    <>
      <div >
        <h1>College page</h1>
        <h3><Link to="/">go back</Link></h3>
        <NavLink className="nav-link" to="">student</NavLink>
        <NavLink className="nav-link" to="departments">Departments</NavLink>
        <NavLink className="nav-link" to="details">college details</NavLink>

        <Outlet />

      </div>
    </>
  );
}
