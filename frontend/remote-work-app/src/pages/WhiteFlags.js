import React from "react";
import NavBar from "../components/NavBar";
import EmployeeColumn from "../components/EmployeeColumn";
import InputBox from "../components/InputBox";

const WhiteFlags = () => {
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
              <InputBox />
            </div>
            <div className="bg-green-500 basis-1/2 m-1 h-screen">
              White Flags
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhiteFlags;
