import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CommentInputBox from "./CommentInputBox";
import axios from "axios";
import {
  selectUser,
  NEW_COMMENT,
  DEL_COMMENT,
} from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const buttonStyle =
  "text-sm border-2 border-purple rounded-md hover:bg-green hover:text-black mt-2 ml-2 px-1";

const ViewAllJournalsCard = (props) => {
  let journalData = props.allJournals[props.index].workJournal;

  const handleClose = () => {
    props.setHasViewed(false);
  };

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //add comment
  const [comment, setComment] = useState("");
  const selectedJournalId = journalData.journalId;
  const onChangeComment = (e) => setComment(e.target.value);
  const newComment = {
    commentId: uuidv4(),
    username: user.username,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    comment: comment,
  };
  const onSubmitComment = (e) => {
    e.preventDefault();
    console.log(comment);
    axios
      .post(`http://127.0.0.1:5001/comments/new`, {
        selectedJournalId,
        newComment,
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.status);
        if (res.data.status === "ok") {
          console.log("hi5", res.data);
        }
      });
    dispatch(NEW_COMMENT({ newComment, selectedJournalId }));
    setComment("");
  };

  //del comment
  const onClickDel = (e) => {
    e.preventDefault();
    const commentId = e.target.value;
    dispatch(DEL_COMMENT({ selectedJournalId, commentId }));
  };

  return (
    <>
      <div className="bg-white text-left">
        <div className="shadow-md shadow-purple border border-lavender rounded-lg mx-2 my-2 px-1 py-8">
          <p>
            {journalData.date}, {journalData.time}
          </p>
          <p className="font-bold">{journalData.title}</p>
          <p className="text-sm">{journalData.content}</p>
          <br />
          <p className="font-bold text-sm">
            Comments ({journalData.comments.length})
          </p>
          {journalData.comments.map((element) => {
            return (
              <div className="border-t border-purple" key={uuidv4()}>
                <p className="font-bold text-sm">{element.username}</p>
                <div className="flex justify-between">
                  <p className="text-sm">{element.comment}</p>
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
                <p className="text-sm">
                  {element.date}, {element.time}
                </p>
                <br />
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
      </div>
    </>
  );
};

export default ViewAllJournalsCard;
