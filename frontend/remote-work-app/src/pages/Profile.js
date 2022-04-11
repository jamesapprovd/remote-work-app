import React, { useState } from "react";
import EmployeeColumn from "../components/EmployeeColumn";
import JournalCard from "../components/JournalCard";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";
import logo from "../images/Logo.png";
import EmployeeCard from "../components/EmployeeCard";

const Profile = () => {
  const [index, setIndex] = useState(null);

  const user = useSelector(selectUser);

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
              <JournalCard index={index} setIndex={setIndex} />
            </div>
            <div className="bg-lilac rounded-lg basis-1/2 m-1">
              <ProfileCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
