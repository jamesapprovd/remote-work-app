import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CommentInputBox from "./CommentInputBox";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";

const buttonStyle =
  "self-end text-sm bg-green border-2 border-green rounded-md hover:border-purple hover:text-black mt-2 ml-2 px-1";
//button css

const ViewAllJournalsCard = (props) => {
  let journalData = props.allJournals[props.index].workJournal;

  const handleClose = () => {
    props.setHasViewed(false);
  };

  // del // not functioning at the moment
  const user = useSelector(selectUser);
  const onClickDel = (e) => {
    e.preventDefault();
  };

  //new comment // currently only pushes to state, not saving
  const [comment, setComment] = useState("");
  const onChangeComment = (e) => setComment(e.target.value);
  const onSubmitComment = (e) => {
    e.preventDefault();
    const newComment = {
      commentId: uuidv4(),
      username: user.username,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      comment: comment,
    };
    journalData.comments.push(newComment);
    setComment("");
  };

  return (
    <>
      <div className="flex flex-col text-left w-auto bg-white border border-lavender rounded-lg m-5 px-1 py-8">
        <p className="text-sm">
          {journalData.date}, {journalData.time}
        </p>
        <p className="font-bold border-b py-2">{journalData.title}</p>
        <p className="text-sm p-4">{journalData.content}</p>
        <br />
        <p className="font-bold text-center text-[13px] border-y border-lavender bg-lilac">
          Comments ({journalData.comments.length})
        </p>
        {journalData.comments.map((element) => {
          return (
            <div
              className="m-2 p-1 border rounded-sm border-lavender bg-lilac"
              key={uuidv4()}
            >
              <div className="flex flex-row py-1 justify-between">
                <p className="font-bold px-2">{element.username}</p>
                <p className="text-[12px] px-2 text-grey">
                  {element.date}, {element.time}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="p-2 text-[13px]">{element.comment}</p>
                {user.username === element.username ? (
                  <button
                    value={element.commentId}
                    onClick={onClickDel}
                    className={buttonStyle}
                  >
                    Del
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
        <CommentInputBox
          journalData={journalData}
          comment={comment}
          onChangeComment={onChangeComment}
          onSubmitComment={onSubmitComment}
        />
        <button className={buttonStyle} onClick={handleClose}>
          Close
        </button>
      </div>
      <br />
    </>
  );
};

export default ViewAllJournalsCard;
