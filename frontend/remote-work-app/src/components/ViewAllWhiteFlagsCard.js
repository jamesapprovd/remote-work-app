import React from "react";
import { v4 as uuidv4 } from "uuid";

const buttonStyle =
  "text-sm border-2 border-purple rounded-md hover:bg-green hover:text-black mt-2 ml-2 px-1";

const ViewAllWhiteFlagsCard = (props) => {
  let whiteFlagData = props.allWhiteFlags[props.index].whiteFlag;

  const handleClose = () => {
    props.setHasViewed(false);
  };

  return (
    <>
      <div className="bg-white text-left">
        <div className="shadow-md shadow-purple border border-lavender rounded-lg mx-2 my-2 px-1 py-8">
          <p>
            {whiteFlagData.date}, {whiteFlagData.time}
          </p>
          <p className="font-bold">{whiteFlagData.title}</p>
          <p className="text-sm">{whiteFlagData.content}</p>
          <br />
          <p className="font-bold text-sm">
            Comments ({whiteFlagData.comments.length})
          </p>
          {whiteFlagData.comments.map((element) => {
            return (
              <div className="border-t border-purple" key={uuidv4()}>
                <p className="font-bold text-sm">{whiteFlagData.username}</p>
                <p className="text-sm">{whiteFlagData.comment}</p>
                <p className="text-sm">
                  {whiteFlagData.date}, {whiteFlagData.time}
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

export default ViewAllWhiteFlagsCard;
