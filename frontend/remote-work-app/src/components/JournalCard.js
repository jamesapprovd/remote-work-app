import React, { useState } from "react";
import mockUsersData from "./mockUsersData.js";
import ViewJournalCard from "./ViewJournalCard.js";
import { v4 as uuidv4 } from "uuid";

const JournalCard = (props) => {
  const [hasViewed, setHasViewed] = useState(false);

  const handleView = (event) => {
    props.setIndex(event.target.parentNode.id);
    setHasViewed(true);
  };

  // const handleDelete = () => {
  //   event.preventDefault();
  //   axios.post(`http://127.0.0.1:5001/journals/delete`, {
  //     title: title,
  //     description: description,
  //   });
  // };
  // not sure how the axios syntax work, haven't installed axios yet

  return (
    <>
      {!hasViewed ? (
        <div className="bg-white border border-black text-left">
          {mockUsersData[0].workJournal.map((element, index) => {
            return (
              <div
                id={index}
                key={uuidv4()}
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
                <button className="float-right" onClick={handleView}>
                  View
                </button>
                <button
                  className="float-right mr-2"
                  // onClick={handleDelete}
                >
                  Delete
                </button>
                <br />
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <ViewJournalCard
            index={props.index}
            setIndex={props.setIndex}
            setHasViewed={setHasViewed}
          />
        </>
      )}
    </>
  );
};

export default JournalCard;
