import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { selectUser, REMOVE_FLAG, selectWhiteFlag } from "../redux/userSlice";
import ViewWhiteFlagCard from "./ViewWhiteFlagCard";
import { useDispatch } from "react-redux";
import axios from "axios";

const buttonStyle =
  "text-sm bg-green border-2 border-green rounded-md hover:border-purple hover:text-black mt-2 ml-2 px-1";

const WhiteFlagCard = (props) => {
  const [hasViewed, setHasViewed] = useState(false);
  // const [isResolved, setIsResolved] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  //**** you are not rendering the white flags from the whiteflag state. */
  const whiteFlag = useSelector(selectWhiteFlag);
  //**** */
  const handleView = (event) => {
    props.setIndex(event.target.parentNode.id); //console.log to see
    setHasViewed(true);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    let userId = user.userId;
    let whiteFlagId =
      whiteFlag[event.target.parentNode.parentNode.id].whiteFlagId;
    axios
      .post(`http://127.0.0.1:5001/whiteflags/delete`, {
        userId,
        whiteFlagId,
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.status);
        if (res.data.status === "ok") {
          console.log("hi5 whiteflag", res.data);
        }
      });
    console.log(userId);
    console.log(whiteFlagId);
    dispatch(REMOVE_FLAG(whiteFlagId));
  };

  return (
    <>
      {hasViewed ? (
        <>
          <ViewWhiteFlagCard
            index={props.index}
            setIndex={props.setIndex}
            setHasViewed={setHasViewed}
          />
        </>
      ) : (
        <div className="text-left">
          {whiteFlag.map((element, index) => {
            return (
              <div
                id={index}
                key={uuidv4()}
                className="flex flex-col bg-lightgreen rounded-md m-4 p-2"
              >
                <p className="text-sm">
                  {element.date}, {element.time}
                </p>
                <p className="font-bold border-b py-2">{element.title}</p>
                <p className="text-sm p-4">{element.content}</p>
                <p className="font-bold text-center text-[13px] border-y border-green">
                  Comments ({element.comments.length})
                </p>
                <div
                  className="flex flex-row-reverse justify-between px-4"
                  id={index}
                >
                  <button className={buttonStyle} onClick={handleView}>
                    View
                  </button>
                  <button
                    className={buttonStyle}
                    // onClick={resolveWhiteFlag}
                  >
                    Resolve
                  </button>
                  <button className={buttonStyle} onClick={handleDelete}>
                    Del
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default WhiteFlagCard;
