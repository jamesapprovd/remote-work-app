import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <ul className="flex justify-center">
            <li className="px-5 py-5">
              <NavLink to="/">Main</NavLink>
            </li>
            <li className="px-5 py-5">
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li className="px-5 py-5">
              <NavLink to="work-journal">Work Journal</NavLink>
            </li>
            <li className="px-5 py-5">
              <NavLink to="/white-flags">White Flags</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
