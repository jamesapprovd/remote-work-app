import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

const WhiteFlagCard = (props) => {
  const [hasViewed, setHasViewed] = useState(false);
  // const [isResolved, setIsResolved] = useState(false);
  const user = useSelector(selectUser);
  console.log(user);

  const handleView = (event) => {
    props.setIndex(event.target.parentNode.id); //console.log to see
    setHasViewed(true);
  };

  // const handleDelete = () => {
  //   event.preventDefault();
  //   axios.post(`http://127.0.0.1:5001/whiteflags/delete` {
  //     title: title,
  //     description: description,
  //   });
  // };
  // to be discussed how to link front end to back end

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
          {user.whiteFlag.map((element, index) => {
            return (
              <div
                id={index}
                key={uuidv4()}
                className="" //want to make it white instead of purple
              >
                <p className="text-sm">
                  {element.date}, {element.time}
                </p>
                <p className="font-bold border-b">{element.title}</p>
                <p className="text-sm">{element.content}</p>
                <p className="">
                  {" "}
                  {/* /want to make it white instead of purple */}
                  Comments ({element.comments.length})
                </p>
                <div className="flex flex-row-reverse" id={index}>
                  <button className={buttonStyle} onClick={handleView}>
                    View
                  </button>
                  <button
                    className={buttonStyle}
                    // onClick={handleDelete}
                  >
                    Delete
                  </button>
                  <button
                    className={buttonStyle}
                    // onClick={resolveWhiteFlag}
                  >
                    Resolve White Flag
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