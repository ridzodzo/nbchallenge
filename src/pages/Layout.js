import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{display: "inline-block"}}>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage desktop</Link>
          </li>
          <li>
            <Link to="/Homepagemobile">Homepage mobile</Link>
          </li>
          <li>
            <Link to="/Showdesktop">Show desktop</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;