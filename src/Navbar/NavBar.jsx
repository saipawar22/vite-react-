import { Link, Outlet } from "react-router"; // Use 'react-router-dom' if on older versions
import './Header.css';

function NavBar() {
    return (<div>
        <div className="nav-bar">
            <div className="nav.links">
                {/* Logo Link navigating to Home */}
                <Link to="/" className="link">
                    <h2 style={{ margin: 0 }}>Logo</h2>
                </Link>
            </div>
            <div className="nav-content">
                <ul className="nav-links">
                    <li>
                        <Link className="nav-links" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-links" to="/login">Login</Link>
                    </li>
                    <li>
                        <Link className="nav-links" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="nav-links" to="/College">College</Link>
                    </li>
                </ul>
            </div>
        </div>
        <Outlet />
    </div>
        
    );
}

export default NavBar;