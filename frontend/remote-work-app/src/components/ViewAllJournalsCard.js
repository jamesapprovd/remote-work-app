import React from "react";
import { v4 as uuidv4 } from "uuid";

const buttonStyle =
  "text-sm border-2 border-purple rounded-md hover:bg-green hover:text-black mt-2 ml-2 px-1";

const ViewAllJournalsCard = (props) => {
  let journalData = props.allJournals[props.index].workJournal;

  const handleClose = () => {
    props.setHasViewed(false);
  };

  return (
    <>
      <div className="bg-white text-left">
        <div className="shadow-md shadow-purple border border-lavender rounded-lg mx-2 my-2 px-1 py-8">
          <p>
            {journalData.date}, {journalData.time}
          </p>
          <p className="font-bold">{journalData.title}</p>
          <p className="text-sm">{journalData.content}</p>
          <br />
          <p className="font-bold text-sm">
            Comments ({journalData.comments.length})
          </p>
          {journalData.comments.map((element) => {
            return (
              <div className="border-t border-purple" key={uuidv4()}>
                <p className="font-bold text-sm">{element.username}</p>
                <p className="text-sm">{element.comment}</p>
                <p className="text-sm">
                  {element.date}, {element.time}
                </p>
                <br />
              </div>
            );
          })}
          <button className={buttonStyle} onClick={handleClose}>
            Close
          </button>
        </div>
        <br />
      </div>
    </>
  );
};

export default ViewAllJournalsCard;
