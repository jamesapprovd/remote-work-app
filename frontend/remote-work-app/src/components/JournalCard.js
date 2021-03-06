import React, { useState } from "react";
import ViewJournalCard from "./ViewJournalCard.js";
import { v4 as uuidv4 } from "uuid";
import {
  selectUser,
  selectWorkJournal,
  REMOVE_JOURNAL,
} from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const buttonStyle =
  "text-sm bg-green border-2 border-green rounded-md hover:border-purple hover:text-black mt-2 ml-2 px-1";

const JournalCard = (props) => {
  const [hasViewed, setHasViewed] = useState(false);
  const handleView = (event) => {
    props.setIndex(event.target.parentNode.id);
    setHasViewed(true);
  };

  const user = useSelector(selectUser); // gets current user state from userSlice
  const workJournal = useSelector(selectWorkJournal); //gets current user journal from userSlice
  const dispatch = useDispatch();

  const handleDelete = (event) => {
    event.preventDefault();
    let userId = user.userId;
    let journalId =
      workJournal[event.target.parentNode.parentNode.id].journalId;
    axios
      .post(`http://127.0.0.1:5001/workJournal/delete`, {
        userId,
        journalId,
      })
      .then((res) => {
        if (res.data.status === "ok") {
          console.log(res.data);
        }
      });
    dispatch(REMOVE_JOURNAL(journalId));
  };

  return (
    <>
      {!hasViewed ? (
        <div className="text-left">
          {workJournal.map((element, index) => {
            return (
              <div
                id={index}
                key={uuidv4()}
                className="flex flex-col bg-lilac rounded-md m-4 p-2"
              >
                <p className="text-sm">
                  {element.date}, {element.time}
                </p>
                <p className="font-bold border-b py-2">{element.title}</p>
                <p className="text-sm p-4">{element.content}</p>
                <p className="font-bold text-center text-[13px] border-y border-lavender">
                  Comments ({element.comments.length})
                </p>
                <div
                  className="flex flex-row-reverse justify-between px-4"
                  id={index}
                >
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
          <ViewJournalCard index={props.index} setHasViewed={setHasViewed} />
        </>
      )}
    </>
  );
};

export default JournalCard;
