import React from "react";
import mockUsersData from "./mockUsersData.js";
import { v4 as uuidv4 } from "uuid";

const ViewJournalCard = (props) => {
  let journalData = mockUsersData[0].workJournal[props.index];

  const handleClose = () => {
    props.setHasViewed(false);
  };
  return (
    <>
      <div className="bg-white border border-black text-left">
        <div className="border border-blue-500 mx-2 my-2 px-1 py-1">
          <p>
            {journalData.date}, {journalData.time}
          </p>
          <p>{journalData.title}</p>
          <p>{journalData.content}</p>
          <br />
          <p className="font-bold">Comments ({journalData.comments.length})</p>
          {journalData.comments.map((element) => {
            return (
              <div key={uuidv4()}>
                <p>
                  date: {element.date}, time: {element.time}
                </p>
                <p>username: {element.username}</p>
                <p>comment: {element.comment}</p>
                <br />
              </div>
            );
          })}
          <button className="float-right px-2 mx-2" onClick={handleClose}>
            Close
          </button>
          <button className="float-right px-2 mx-2">Edit</button>
        </div>
        <br />
      </div>
    </>
  );
};

export default ViewJournalCard;
