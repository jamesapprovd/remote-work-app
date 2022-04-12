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
  "text-sm border-2 border-purple rounded-md hover:bg-green hover:text-black mt-2 ml-2 px-1";

const JournalCard = (props) => {
  const [hasViewed, setHasViewed] = useState(false);

  const user = useSelector(selectUser);
  const workJournal = useSelector(selectWorkJournal);
  const dispatch = useDispatch();

  const handleView = (event) => {
    props.setIndex(event.target.parentNode.id);
    setHasViewed(true);
  };

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
        console.log(res.data);
        console.log(res.data.status);
        if (res.data.status === "ok") {
          console.log("hi5", res.data);
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
