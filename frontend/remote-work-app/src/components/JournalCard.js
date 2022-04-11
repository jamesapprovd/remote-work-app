import React, { useState } from "react";
import ViewJournalCard from "./ViewJournalCard.js";
import { v4 as uuidv4 } from "uuid";
import { selectUser, selectWorkJournal } from "../redux/userSlice";
import { useSelector } from "react-redux";
import axios from "axios";

const buttonStyle =
  "text-sm border-2 border-purple rounded-md hover:bg-green hover:text-black mt-2 ml-2 px-1";

const JournalCard = (props) => {
  const [hasViewed, setHasViewed] = useState(false);

  const user = useSelector(selectUser);
  const workJournal = useSelector(selectWorkJournal);

  const handleView = (event) => {
    props.setIndex(event.target.parentNode.id);
    setHasViewed(true);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    let userId = user.userId;
    let journalId =
      user.workJournal[event.target.parentNode.parentNode.id].journalId;
    axios
      .post(`http://127.0.0.1:5001/workJournal/delete`, {
        userId,
        journalId,
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.status);
        if (res.data.status === "ok") {
          console.log("hi5", res.data);
        }
      });
  };

  return (
    <>
      {!hasViewed ? (
        <div className="text-left">
          {workJournal.map((journal, index) => {
            return (
              <div
                id={index}
                key={uuidv4()}
                className=" flex flex-col shadow-md shadow-purple border border-lavender rounded-lg m-2 p-2"
              >
                <p className="text-sm">
                  {journal.date}, {journal.time}
                </p>
                <p className="font-bold border-b">{journal.title}</p>
                <p className="text-sm">{journal.content}</p>
                <p className="font-bold text-[13px] border-y border-lavender">
                  Comments ({journal.comments.length})
                </p>
                <div className="flex flex-row-reverse" id={index}>
                  <button className={buttonStyle} onClick={handleView}>
                    View
                  </button>
                  <button className={buttonStyle} onClick={handleDelete}>
                    Delete
                  </button>
                </div>
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
