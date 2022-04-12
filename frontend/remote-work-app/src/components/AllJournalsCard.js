import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ViewAllJournalsCard from "./ViewAllJournalsCard";

const buttonStyle =
  "text-sm border-2 border-purple rounded-md hover:bg-green hover:text-black mt-2 ml-2 px-1";

const AllJournalsCard = (props) => {
  const [hasViewed, setHasViewed] = useState(false);
  const [allJournals, setAllJournals] = useState([]);

  const handleView = (event) => {
    console.log();
    props.setIndex(event.target.parentNode.id);
    setHasViewed(true);
  };
  useEffect(() => {
    axios.get("http://localhost:5001/workJournal/all").then((res) => {
      const data = res.data;
      setAllJournals(data);
    });
  }, []);
  console.log(allJournals);

  return (
    <>
      {!hasViewed ? (
        <div className="text-left">
          {allJournals.map((element, index) => {
            return (
              <div
                id={index}
                key={uuidv4()}
                className=" flex flex-col shadow-md shadow-purple border border-lavender rounded-lg m-2 p-2"
              >
                <p className="text-sm">
                  {element.workJournal.date}, {element.workJournal.time}
                </p>
                <p className="font-bold border-b">
                  {element.workJournal.title}
                </p>
                <p className="text-sm">{element.workJournal.content}</p>
                <p className="font-bold text-[13px] border-y border-lavender">
                  Comments ({element.workJournal.comments.length})
                </p>
                <div
                  className="flex flex-row-reverse justify-between"
                  id={index}
                >
                  <button className={buttonStyle} onClick={handleView}>
                    View
                  </button>
                  <p>Posted by: {element.workJournal.author}</p>
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
