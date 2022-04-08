import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userSlice, { login, selectUser } from "../redux/userSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitLogin = (e) => {
    e.preventDefault();
    console.log(email, "email");
    console.log(password, "password");

    dispatch(
      login({
        email: email,
        password: password,
        loggedIn: true,
      })
    );
    navigate("/main");
  };
  // const user = useSelector(selectUser);

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
      <h2>{email}</h2>
      <h2>{password}</h2>
    </>
  );
};

export default LoginPage;
