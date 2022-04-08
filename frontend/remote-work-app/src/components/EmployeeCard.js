import React from "react";

const EmployeeCard = (props) => {
  console.log("employee card", props.username);
  return (
    <div className="flex flex-row w-auto h-20">
      <div className="flex basis-1/4">
        <img className="w-16" src={props.img} alt={props.username} />
      </div>

      <div className="text-left text-sm basis-3/4">
        <p>Name:{props.username}</p>
        <p>Position:{props.position}</p>
        <p>Status:{props.status}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
