import { Link } from "react-router";
import logo from "../assets/images/travel-agency-logo.png";

export const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-amber-600">
          <img className="h-10" src={logo} alt="Travel Agency" />Travel Agency</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'destinations'}>Destinations</Link>
          </li>
          <li>
            <Link to={'about'}>About</Link>
          </li>
          <li>
            <Link to={'contact'}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
