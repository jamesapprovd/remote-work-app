import React from "react";
import EmployeeCard from "./EmployeeCard";
import { useSelector } from "react-redux";
import { selectUsersData } from "../redux/usersDataSlice";

const EmployeeColumn = () => {
  const users = useSelector(selectUsersData);
  console.log(users);

  return (
    <div className="flex flex-col">
      {users.map((user, index) => {
        return (
          <EmployeeCard
            username={user.username}
            position={user.position}
            status={user.status}
          />
        );
      })}
    </div>
  );
};

export default EmployeeColumn;
