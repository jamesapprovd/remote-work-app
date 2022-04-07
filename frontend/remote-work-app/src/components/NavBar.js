import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <ul className="flex justify-center">
            <li className="px-5 py-5">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="px-5 py-5">
              <NavLink to="my-profile">myJournal</NavLink>
            </li>
            <li className="px-5 py-5">
              <NavLink to="/my-white-flags">myWhiteFlags</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
