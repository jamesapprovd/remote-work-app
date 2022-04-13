import React, { useState } from "react";
import EmployeeColumn from "../components/EmployeeColumn";
import JournalCard from "../components/JournalCard";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";
import EmployeeCard from "../components/EmployeeCard";

const Profile = () => {
  const [index, setIndex] = useState(null);

  const user = useSelector(selectUser);

  return (
    <>
      <div className="flex flex-col">
        <NavBar />
        <div className="pl-2 flex flex-row basis-5/6">
          <div className="flex flex-col w-52 p-2 h-screen">
            <EmployeeCard
              img={user.img}
              username={user.username}
              position={user.position}
              status={user.status}
            />
            <p>Your Team:</p>
            <EmployeeColumn />
          </div>

          <div className="basis-5/6 p-4 flex flex-row justify-evenly">
            <div className="flex flex-col basis-1/2 border-t border-purple p-2">
              <span className="pl-4 self-start font-bold text-2xl text-purple drop-shadow-md">
                Work Journals ✍
              </span>
              <div className="shadow-inner shadow-purple m-2">
                <JournalCard index={index} setIndex={setIndex} />
              </div>
            </div>
            <div className="flex flex-col basis-1/2 border-t border-purple p-2">
              <span className="pl-4 self-start font-bold text-2xl text-lavender drop-shadow-md">
                Profile
              </span>
              <div className="shadow-inner shadow-lavender m-2">
                <ProfileCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
