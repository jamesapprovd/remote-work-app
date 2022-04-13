import React from "react";

const placeholderImg =
  "https://stroseschool.stroselions.net/wp-content/uploads/2018/04/profile-blank-reva.png";
const EmployeeCard = (props) => {
  let statusColor = "shadow-black";
  if (props.status === "online") {
    statusColor = "shadow-green";
  } else if (props.status === "away") {
    statusColor = "shadow-orange";
  } else {
    statusColor = "shadow-grey";
  }

  const cardStyle = `flex flex-row rounded-lg w-auto h-22 shadow-md ${statusColor} border border-lavender p-2 my-2`;
  return (
    <div className={cardStyle}>
      <div className="flex w-16 p-1">
        <img
          className="self-center"
          src={props.img ? props.img : placeholderImg}
          alt={props.username}
        />
      </div>

      <div className="flex flex-col justify-evenly text-left basis-3/4">
        <p>{props.username}</p>
        <p className="text-xs">{props.position}</p>
        <p className="text-xs">Status:{props.status}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
