import React from "react";
import EmployeeCard from "./EmployeeCard";
import { useSelector } from "react-redux";
import { selectUsersData } from "../redux/usersDataSlice";
import { v4 as uuidv4 } from "uuid";
import { selectUser } from "../redux/userSlice";

const EmployeeColumn = () => {
  const users = useSelector(selectUsersData);
  const user = useSelector(selectUser);

  //this will render everyone except the current user
  const filteredData = users.filter((data) => {
    if (data.username !== user.username) {
      return data;
    }
  });

  return (
    <div className="flex flex-col">
      {filteredData.map((user, index) => {
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
