import React from "react";
import EmployeeCard from "./EmployeeCard";
import { useSelector } from "react-redux";
import { selectUsersData } from "../redux/usersDataSlice";
import { v4 as uuidv4 } from "uuid";

const EmployeeColumn = () => {
  const users = useSelector(selectUsersData);

  return (
    <div className="flex flex-col">
      {users.map((user, index) => {
        return (
          <EmployeeCard
            key={uuidv4()}
            img={user.img}
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
