import React, { useState } from "react";
import mockUsersData from "./mockUsersData.js";
import ViewJournalCard from "./ViewJournalCard.js";

const JournalCard = (props) => {
  const [hasClickedView, setHasClickedView] = useState(false);

  const handleViewClick = (event) => {
    props.setId(event.target.parentNode.id);
    setHasClickedView(true);
  };

  return (
    <>
      {!hasClickedView ? (
        <div className="bg-white border border-black text-left">
          {mockUsersData[0].workJournal.map((element, index) => {
            return (
              <div
                id={index}
                className="border border-blue-500 mx-2 my-2 px-1 py-1"
              >
                <p>
                  {element.date}, {element.time}
                </p>
                <p>{element.title}</p>
                <p>{element.content}</p>
                <p className="font-bold">
                  Comments ({element.comments.length})
                </p>
                <button className="float-right" onClick={handleViewClick}>
                  View
                </button>
                <br />
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <ViewJournalCard
            id={props.id}
            setHasClickedView={setHasClickedView}
          />
        </>
      )}
    </>
  );
};

export default JournalCard;
