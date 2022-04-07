import React from "react";
import EmployeeCard from "./EmployeeCard";
import mockUsersData from "./mockUsersData";

const EmployeeColumn = () => {
  console.log("name", mockUsersData[0].username);
  console.log("position", mockUsersData[0].position);
  console.log("status", mockUsersData[0].status);
  return (
    <div className="flex flex-col">
      {mockUsersData.map((user, index) => {
        return <EmployeeCard user={user} />;
      })}
    </div>
  );
};

export default EmployeeColumn;
