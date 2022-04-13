import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ViewAllJournalsCard from "./ViewAllJournalsCard";

const buttonStyle =
  "text-sm bg-green border-2 border-green rounded-md hover:border-purple hover:text-black mt-2 ml-2 px-1";

const AllJournalsCard = (props) => {
  const [hasViewed, setHasViewed] = useState(false);
  const [allJournals, setAllJournals] = useState([]);

  const handleView = (event) => {
    console.log();
    props.setIndex(event.target.parentNode.id);
    setHasViewed(true);
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:5001/workJournal/all").then((res) => {
      const data = res.data;
      setAllJournals(data);
    });
  }, []);

  return (
    <>
      {!hasViewed ? (
        <div className="text-left">
          {allJournals.map((element, index) => {
            return (
              <div
                id={index}
                key={uuidv4()}
                className="flex flex-col bg-lilac rounded-md m-4 p-2"
              >
                <p className="text-sm">
                  {element.workJournal.date}, {element.workJournal.time}
                </p>
                <p className="font-bold border-b py-2">
                  {element.workJournal.title}
                </p>
                <p className="text-sm p-4">{element.workJournal.content}</p>
                <p className="py-1 text-center font-bold text-[13px] border-y border-lavender">
                  Comments ({element.workJournal.comments.length})
                </p>
                <div
                  className="flex flex-row-reverse justify-between px-4"
                  id={index}
                >
                  <button className={buttonStyle} onClick={handleView}>
                    View
                  </button>
                  <p className="text-sm py-2">
                    Posted by: {element.workJournal.author}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <ViewAllJournalsCard
            index={props.index}
            setHasViewed={setHasViewed}
            allJournals={allJournals}
          />
        </>
      )}
    </>
  );
};

export default AllJournalsCard;
