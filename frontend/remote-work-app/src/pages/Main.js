import React, { useState } from "react";
import NavBar from "../components/NavBar";
import EmployeeColumn from "../components/EmployeeColumn";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";
import EmployeeCard from "../components/EmployeeCard";
import logo from "../images/Logo.png";
import JournalCard from "../components/JournalCard";
import AllJournalsCard from "../components/AllJournalsCard";

const Main = () => {
  const user = useSelector(selectUser);
  const [index, setIndex] = useState(null);

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
            <div className="bg-lilac rounded-lg basis-1/2 m-1">
              {/* <JournalCard index={index} setIndex={setIndex} /> */}
              <AllJournalsCard index={index} setIndex={setIndex} />
            </div>
            <div className="bg-lilac rounded-lg basis-1/2 m-1">White Flags</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
