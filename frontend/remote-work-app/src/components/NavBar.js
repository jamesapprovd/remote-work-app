import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../redux/userSlice";

const NavBar = () => {
  const dispatch = useDispatch();

  const onClickLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <>
      <header>
        <nav>
          <ul className="flex justify-center">
            <li className="p-5">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="p-5">
              <NavLink to="/my-profile">myJournal</NavLink>
            </li>
            <li className="p-5">
              <NavLink to="/my-white-flags">myWhiteFlags</NavLink>
            </li>
            <li className="p-5">Log Out</li>
          </ul>
          <button className="border m-2" onClick={onClickLogout}>
            Log out
          </button>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
