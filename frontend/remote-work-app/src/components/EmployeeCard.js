import React from "react";

const EmployeeCard = (props) => {
  console.log("employee card", props.user.username);
  return (
    <div className="flex flex-row w-auto h-20">
      <div className="flex basis-1/4">
        <img className="w-16" src={props.user.img} alt={props.user.username} />
      </div>

      <div className="text-left text-sm basis-3/4">
        <p>Name:{props.user.username}</p>
        <p>Position:{props.user.position}</p>
        <p>Status:{props.user.status}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
