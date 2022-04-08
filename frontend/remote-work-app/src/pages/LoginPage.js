import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/userSlice";

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

  const onSubmitLogin = (e) => {
    e.preventDefault();
    console.log(email, "email");
    console.log(password, "password");

    dispatch(
      login({
        //** basically the params what will be stored under user object in redux store*/
        email: email,
        password: password,
        loggedIn: true,
      })
    );

    /** probably have to insert some form of auth function here to compare log in details to the existing data before redirecting to main page */

    //redirects to main page
    navigate("/main");
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
      <h2>{email}</h2>
      <h2>{password}</h2>
    </>
  );
};

export default LoginPage;
