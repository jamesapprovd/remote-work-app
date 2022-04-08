import React from "react";
import NavBar from "../components/NavBar";
import EmployeeColumn from "../components/EmployeeColumn";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";

const Main = () => {
  //this get the user details from redux store
  const user = useSelector(selectUser);

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/6">
          <div className="flex bg-purple-400 h-16">Logo</div>
          <div>Hello, {user.email}</div>
          <EmployeeColumn />
        </div>
        <div className="flex flex-col basis-5/6">
          <NavBar />
          <div className="flex flex-row">
            <div className="bg-red-500 basis-1/2 m-1">Journals</div>
            <div className="bg-green-500 basis-1/2 m-1">White Flags</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
