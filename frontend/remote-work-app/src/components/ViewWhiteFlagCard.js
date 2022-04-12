import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditForm from "./EditForm.js";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";

const ViewWhiteFlagCard = () => {
  const [whiteFlag, setWhiteFlag] = useState({
    title: "",
    content: "",
  });
  const [hasEdit, setHasEdit] = useState(false);

  const user = useSelector(selectUser);

  let whiteFlagData = user.whiteFlag[props.index];

  // this changes the view from individual white flag to all white flags
  const handleClose = () => {
    props.setHasViewed(false);
  };

  // this shows view for edit with default value
  const handleEdit = (event) => {
    event.preventDefault();
    setWhiteFlag((prevState) => {
      return { ...prevState, title: whiteflag.title }; //To discuss with @Sharlyn
    });
    setWhiteFlag((prevState) => {
      return { ...prevState, content: whiteflag.content };
    });
    setHasEdit(true);
  };

  // Resolving White Flags - this is not working yet
  //   const handleResolved = (event) => {
  //     event.preventDefault();
  //     setIsResolved(false);
  //   };

  return (
    <>
      {hasEdit ? (
        <EditForm
          title={whiteflag.title}
          content={whiteflag.content}
          setWhiteFlag={setWhiteFlag}
          onSubmit={handleUpdate}
        />
      ) : (
        <div className="bg-white text-left">
          <div className="">
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
                  <p className="font-bold text-sm">{element.username}</p>
                  <p className="text-sm">{element.comment}</p>
                  <p className="text-sm">
                    {element.date}, {element.time}
                  </p>
                  <br />
                </div>
              );
            })}
            <button className={buttonStyle} onClick={handleClose}>
              Close
            </button>
            <button className={buttonStyle} onClick={handleEdit}>
              Edit
            </button>
          </div>
          <br />
        </div>
      )}
    </>
  );
};

export default ViewWhiteFlagCard;
