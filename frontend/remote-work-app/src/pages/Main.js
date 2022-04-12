import React, { useState } from "react";
import NavBar from "../components/NavBar";
import EmployeeColumn from "../components/EmployeeColumn";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";
import EmployeeCard from "../components/EmployeeCard";
import logo from "../images/Logo.png";
import AllJournalsCard from "../components/AllJournalsCard";
import AllWhiteFlagsCard from "../components/AllWhiteFlagsCard";

const Main = () => {
  const user = useSelector(selectUser);
  const [index, setIndex] = useState(null);

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col w-52 p-2 h-screen">
          <div className="flex bg-purple-400 h-38">
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
        <div className=" flex flex-col basis-5/6">
          <NavBar />
          <div className="flex flex-row justify-evenly">
            <div className="shadow-inner shadow-purple  basis-1/2 m-1">
              <span className="font-bold">Work Journals</span>
              <AllJournalsCard index={index} setIndex={setIndex} />
            </div>
            <div className="shadow-inner shadow-green basis-1/2 m-1">
              <span className="font-bold">White Flags</span>
              <AllWhiteFlagsCard index={index} setIndex={setIndex} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
