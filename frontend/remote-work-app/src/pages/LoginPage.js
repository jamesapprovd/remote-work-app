import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../redux/userSlice";
import { selectUsersData, STORE_DATA } from "../redux/usersDataSlice";
import axios from "axios";
// import { current } from "@reduxjs/toolkit";
import logo from "../images/Logo.png";

const LoginPage = () => {
  //basic state for the login form.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //handling the changes to the value
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  //redux stuff
  const dispatch = useDispatch();
  //routerdom navigate fucntion (just a manual redirect)
  const navigate = useNavigate();
  const users = useSelector(selectUsersData);

  useEffect(() => {
    axios.get("http://localhost:5001/users/storeddata").then((res) => {
      console.log(res);
      dispatch(STORE_DATA([...res.data]));
      return;
    });
  }, []);

  const onSubmitLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5001/users/login",
        { email, password },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.status === "ok") {
          const currentUser = users.find((user) => {
            if (user.email === email) {
              return user;
            }
          });
          dispatch(
            LOGIN({
              ...currentUser,
            })
          );
          navigate("/main");
        }
      })
      .catch((err) => alert("Log in failed, invalid credentials", err));
  };

  return (
    <>
      <div className="flex justify-around">
        <div className=" flex flex-col w-[50%] m-[5%] text-black">
          <img className="self-center w-[50%]" src={logo} alt="REMOTR" />
          <form className="self-center w-[300px]" onSubmit={onSubmitLogin}>
            <div className="flex flex-col w-auto">
              <label className="text-left text-purple">Email</label>
              <input
                className="border-y border-purple flex basis-1/6 my-2 text-center focus:outline-green focus:bg-lightgreen"
                type="email"
                placeholder="Email"
                value={email}
                onChange={onChangeEmail}
              />
              <label className="text-left text-purple">Password:</label>
              <input
                className="border-y border-purple rounded-md flex basis-1/6 my-2 text-center focus:outline-green focus:bg-lightgreen"
                type="password"
                placeholder="Password"
                value={password}
                onChange={onChangePassword}
              />
              <button
                type="submit"
                className="text-black bg-green border-2 border-green rounded-md hover:border-purple hover:text-black w-20 my-2 self-end"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
