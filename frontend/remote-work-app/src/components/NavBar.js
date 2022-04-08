import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";

// added a log out button to the nav bar

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      <header>
        <nav className="flex flex-row justify-evenly">
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
          </ul>
          <button className="border h-[50%] m-4 p-1" onClick={onClickLogout}>
            Log out
          </button>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
