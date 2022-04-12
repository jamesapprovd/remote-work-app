import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditForm from "./EditForm.js";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";

const buttonStyle =
  "text-sm border-2 border-purple rounded-md hover:bg-green hover:text-black mt-2 ml-2 px-1";

const ViewWhiteFlagCard = (props) => {
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
      return { ...prevState, title: whiteFlag.title }; //To discuss with @Sharlyn
    });
    setWhiteFlag((prevState) => {
      return { ...prevState, content: whiteFlag.content };
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
          title={whiteFlag.title}
          content={whiteFlag.content}
          setWhiteFlag={setWhiteFlag}
          // onSubmit={handleUpdate}
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
