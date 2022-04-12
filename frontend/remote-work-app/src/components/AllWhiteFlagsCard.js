import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ViewAllWhiteFlagsCard from "./ViewAllWhiteFlagsCard";

const buttonStyle =
  "text-sm bg-green border-2 border-green rounded-md hover:border-purple hover:text-black mt-2 ml-2 px-1";

const AllWhiteFlagsCard = (props) => {
  const [hasViewed, setHasViewed] = useState(false);
  const [allWhiteFlags, setAllWhiteFlags] = useState([]);

  const handleView = (event) => {
    console.log();
    props.setIndex(event.target.parentNode.id);
    setHasViewed(true);
  };

  useEffect(() => {
    axios.get("http://localhost:5001/whiteFlags/all").then((res) => {
      const data = res.data;
      setAllWhiteFlags(data);
    });
  }, []);
  console.log(allWhiteFlags);

  return (
    <>
      {!hasViewed ? (
        <div className="text-left">
          {allWhiteFlags.map((element, index) => {
            return (
              <div
                id={index}
                key={uuidv4()}
                className="flex flex-col border border-green bg-lightgreen rounded-lg m-4 p-2"
              >
                <p className="text-sm">
                  {element.whiteFlag.date}, {element.whiteFlag.time}
                </p>
                <p className="font-bold border-b py-2">
                  {element.whiteFlag.title}
                </p>
                <p className="text-sm p-4">{element.whiteFlag.content}</p>
                <p className="py-1 text-center font-bold text-[13px] border-y border-green">
                  Comments ({element.whiteFlag.comments.length})
                </p>
                <div
                  className="flex flex-row-reverse justify-between px-4"
                  id={index}
                >
                  <button className={buttonStyle} onClick={handleView}>
                    View
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <ViewAllWhiteFlagsCard
            index={props.index}
            setHasViewed={setHasViewed}
            allWhiteFlags={allWhiteFlags}
          />
        </>
      )}
    </>
  );
};

export default AllWhiteFlagsCard;
