import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../redux/userSlice";
import { selectUsersData, STORE_DATA } from "../redux/usersDataSlice";
import axios from "axios";
import { current } from "@reduxjs/toolkit";

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
    axios.get("http://localhost:3000/user").then((res) => {
      console.log(res);
      dispatch(STORE_DATA([...res.data]));
      return;
    });
  }, []);

  const onSubmitLogin = (e) => {
    e.preventDefault();
    const currentUser = users.find((user) => {
      if (user.email === email && user.password === password) {
        return user;
      }
    });
    if (!currentUser) {
      alert("Log in failed, invalid credentials");
    } else {
      dispatch(
        LOGIN({
          ...currentUser,
        })
      );
      console.log("hi3");
      navigate("/main");
    }
  };
  return (
    <>
      <form onSubmit={onSubmitLogin}>
        <h1>RemotR</h1>
        <div className="flex flex-col w-auto">
          <label>Email:</label>
          <input
            className="flex basis-1/6 m-2 text-center"
            type="email"
            placeholder="Email"
            value={email}
            onChange={onChangeEmail}
          />
          <label>Password:</label>
          <input
            className="flex basis-1/6 m-2 text-center"
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />
          <button type="submit" className="border m-2">
            Log in
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
