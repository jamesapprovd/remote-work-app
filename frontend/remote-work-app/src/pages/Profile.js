import React, { useState } from "react";
import EmployeeColumn from "../components/EmployeeColumn";
import JournalCard from "../components/JournalCard";
import NavBar from "../components/NavBar";

const Profile = () => {
  const [id, setId] = useState(0);

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/6">
          <div className="flex bg-purple-400 h-16">Logo</div>
          <div>User</div>
          <EmployeeColumn />
        </div>
        <div className="flex flex-col basis-5/6">
          <NavBar />
          <div className="flex flex-row">
            <div className="bg-red-500 basis-1/2 m-1">
              <p>Work Journals</p>
              <JournalCard id={id} setId={setId} />
            </div>
            <div className="bg-green-500 basis-1/2 m-1">Profile</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
