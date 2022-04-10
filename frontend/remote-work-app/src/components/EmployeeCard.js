import React from "react";

const placeholderImg =
  "https://stroseschool.stroselions.net/wp-content/uploads/2018/04/profile-blank-reva.png";
const EmployeeCard = (props) => {
  // console.log("employee card", props.username);
  return (
    <div className="flex flex-row rounded-lg w-auto h-20 bg-lavender p-2 my-1">
      <div className="flex w-16 p-1">
        <img
          className="self-center"
          src={props.img ? props.img : placeholderImg}
          alt={props.username}
        />
      </div>

      <div className="text-left basis-3/4">
        <p>{props.username}</p>
        <p className="text-xs">{props.position}</p>
        <p className="text-xs">Status:{props.status}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
