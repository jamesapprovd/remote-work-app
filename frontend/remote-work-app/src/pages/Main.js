import React from "react";
import NavBar from "../components/NavBar";
import EmployeeColumn from "../components/EmployeeColumn";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";
import EmployeeCard from "../components/EmployeeCard";
import logo from "../images/Logo.png";

const Main = () => {
  const user = useSelector(selectUser);
  console.log("mainpage", user.img);
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/6 p-2 bg-lilac h-screen">
          <div className="flex bg-purple-400 h-16">
            <img className="self-center" src={logo} alt="REMOTR" />
          </div>
          <EmployeeCard
            img={user.img}
            username={user.username}
            position={user.position}
            status={user.status}
          />
          <p>Your Team:</p>
          <EmployeeColumn />
        </div>
        <div className="flex flex-col basis-5/6">
          <NavBar />
          <div className="flex flex-row">
            <div className="bg-purple basis-1/2 m-1">Journals</div>
            <div className="bg-green basis-1/2 m-1">White Flags</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
