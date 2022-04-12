import React, { useState, useEffect } from "react";
import axios from "axios";
import { selectUsersData } from "../redux/usersDataSlice";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const buttonStyle =
  "text-sm border-2 border-purple rounded-md hover:bg-green hover:text-black mt-2 ml-2 px-1";

const AllJournalsCard = (props) => {
  const users = useSelector(selectUsersData);
  const [hasViewed, setHasViewed] = useState(false);

  const handleView = (event) => {
    console.log();
    props.setIndex(event.target.parentNode.id);
    setHasViewed(true);
  };

  return (
    <>
      <div className="text-left">
        {users.map((user) => {
          return user.workJournal.map((element, index) => {
            return (
              <div
                id={index}
                key={uuidv4()}
                className=" flex flex-col shadow-md shadow-purple border border-lavender rounded-lg m-2 p-2"
              >
                <p className="text-sm">
                  {element.date}, {element.time}
                </p>
                <p className="font-bold border-b">{element.title}</p>
                <p className="text-sm">{element.content}</p>
                <p className="font-bold text-[13px] border-y border-lavender">
                  Comments ({element.comments.length})
                </p>
                <div className="flex flex-row-reverse" id={index}>
                  <button className={buttonStyle} onClick={handleView}>
                    View
                  </button>
                </div>
              </div>
            );
          });
        })}
      </div>
    </>
  );
};

export default AllJournalsCard;
