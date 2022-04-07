import React from "react";
import mockUsersData from "./mockUsersData.js";
import NavBar from "./NavBar.js";

const JournalCard = () => {
  let content = mockUsersData[0].workJournal.map((element) => {
    return (
      <>
        <p>
          {element.date}, {element.time}
        </p>
        <p>{element.title}</p>
        <p>{element.content}</p>
        {/* <h2>Comments</h2>
        {element.comments.map((item) => {
          return (
            <>
              <p>{item.username}</p>
              <p>
                {item.date}, {item.time}
              </p>
              <p>{item.comment}</p>
            </>
          );
        })} */}
        <button className="text-right">View</button>
      </>
    );
  });

  return (
    <>
      <div className="bg-white">
        <div className="border border-black">
          <h1>Work Journals</h1>
          <div className="text-left border border-black">{content}</div>
        </div>
        <div className="border border-black"></div>
      </div>
    </>
  );
};

export default JournalCard;
