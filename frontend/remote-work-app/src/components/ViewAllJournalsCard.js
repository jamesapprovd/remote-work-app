import React, { useState } from "react";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { NEW_COMMENT_MAIN } from "../redux/usersDataSlice";
import { DEL_COMMENT, selectUser } from "../redux/userSlice";
import CommentInputBox from "./CommentInputBox";
=======
import { v4 as uuidv4 } from "uuid";
import CommentInputBox from "./CommentInputBox";
import axios from "axios";
import {
  selectUser,
  NEW_COMMENT,
  DEL_COMMENT,
} from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
>>>>>>> dd3aee8535f955515e7f1621c2595ef8f009dae8

const buttonStyle =
  "text-sm bg-green border-2 border-green rounded-md hover:border-purple hover:text-black mt-2 ml-2 px-1";

const ViewAllJournalsCard = (props) => {
  let journalData = props.allJournals[props.index].workJournal;

  const handleClose = () => {
    props.setHasViewed(false);
  };

<<<<<<< HEAD
  //del
  const user = useSelector(selectUser);
  // const selectedJournalId = journalData.journalId;
  // const selectedJournalUser = journalData.author;
  const dispatch = useDispatch();
  const onClickDel = (e) => {
    e.preventDefault();
    // const commentId = e.target.value;
    // dispatch(DEL_COMMENT({ selectedJournalId, commentId }));
  };

  //newcomment
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
    // dispatch(
    //   NEW_COMMENT_MAIN({ newComment, selectedJournalId, selectedJournalUser })
    // );
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
=======
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
>>>>>>> dd3aee8535f955515e7f1621c2595ef8f009dae8
                  {element.date}, {element.time}
                </p>
              </div>
<<<<<<< HEAD
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
=======
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
>>>>>>> dd3aee8535f955515e7f1621c2595ef8f009dae8
      </div>
      <br />
    </>
  );
};

export default ViewAllJournalsCard;
