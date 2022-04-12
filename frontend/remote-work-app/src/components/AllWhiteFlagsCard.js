import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const buttonStyle =
  "text-sm border-2 border-purple rounded-md hover:bg-green hover:text-black mt-2 ml-2 px-1";

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
      <div className="text-left">
        {allWhiteFlags.map((element, index) => {
          return (
            <div
              id={index}
              key={uuidv4()}
              className=" flex flex-col shadow-md shadow-purple border border-lavender rounded-lg m-2 p-2"
            >
              <p className="text-sm">
                {element.whiteFlag.date}, {element.whiteFlag.time}
              </p>
              <p className="font-bold border-b">{element.whiteFlag.title}</p>
              <p className="text-sm">{element.whiteFlag.content}</p>
              <p className="font-bold text-[13px] border-y border-lavender">
                Comments ({element.whiteFlag.comments.length})
              </p>
              <div className="flex flex-row-reverse justify-between" id={index}>
                <button className={buttonStyle} onClick={handleView}>
                  View
                </button>
                {/* <p>Posted by: {element.whiteFlag.author}</p> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllWhiteFlagsCard;
