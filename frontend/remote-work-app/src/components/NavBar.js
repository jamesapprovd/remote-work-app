import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { LOGOUT } from "../redux/userSlice";
import logo from "../images/Logo.png";

const styleLi = "m-5 hover:text-black hover:border-b-2 hover:border-green";
//css for li

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogout = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5001/users/logout", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status === "ok") {
          dispatch(LOGOUT());
        }
      });
    navigate("/");
  };
  return (
    <>
      <header className="flex flex-row justify-between">
        <img className="w-44 m-5" src={logo} alt="REMOTR" />
        <div className="h-fit basis-full flex flex-row justify-between my-16">
          <nav>
            <ul className="flex justify-center text-purple">
              <li className={styleLi}>
                <NavLink to="/main">Home</NavLink>
              </li>
              <li className={styleLi}>
                <NavLink to="/my-profile">myJournal</NavLink>
              </li>
              <li className={styleLi}>
                <NavLink to="/my-white-flags">myWhiteFlags</NavLink>
              </li>
            </ul>
          </nav>
          <button
            className=" text-purple border border-purple rounded-md w-20 self-end hover:bg-green hover:text-black h-[50%] m-4 p-1"
            onClick={onClickLogout}
          >
            Log out
          </button>
        </div>
      </header>
    </>
  );
};

export default NavBar;
