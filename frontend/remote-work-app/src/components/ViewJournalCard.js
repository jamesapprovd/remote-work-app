import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditForm from "./EditForm.js";
import {
  selectUser,
  selectWorkJournal,
  EDIT_JOURNAL,
  NEW_COMMENT,
  DEL_COMMENT,
} from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CommentInputBox from "./CommentInputBox.js";

const buttonStyle =
  "text-sm bg-green border-2 border-green rounded-md hover:border-purple hover:text-black mt-2 ml-2 px-1";

const ViewJournalCard = (props) => {
  // this changes the view from individual journal to all journals
  const handleClose = () => {
    props.setHasViewed(false);
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [hasEdit, setHasEdit] = useState(false);
  // this shows view for edit with default value
  const handleEdit = (event) => {
    event.preventDefault();
    setTitle(journalData.title);
    setContent(journalData.content);
    setHasEdit(true);
  };

  const user = useSelector(selectUser);
  const workJournal = useSelector(selectWorkJournal);
  let journalData = workJournal[props.index];
  const dispatch = useDispatch();

  const handleUpdate = (event) => {
    event.preventDefault();
    let userId = user.userId;
    let journalId = journalData.journalId;
    let update = {
      title: title,
      content: content,
    };
    axios
      .put(`http://127.0.0.1:5001/workJournal/edit`, {
        userId,
        journalId,
        update,
      })
      .then((res) => {
        if (res.data.status === "ok") {
          console.log(res.data);
        }
      });
    dispatch(EDIT_JOURNAL({ journalId, update }));
    setHasEdit(false);
  };

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
    axios
      .post(`http://127.0.0.1:5001/comments/new`, {
        selectedJournalId,
        newComment,
      })
      .then((res) => {
        if (res.data.status === "ok") {
          console.log(res.data);
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
      {hasEdit ? (
        <EditForm
          title={title}
          content={content}
          setTitle={setTitle}
          setContent={setContent}
          onSubmit={handleUpdate}
        />
      ) : (
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
          <div className="flex flex-row-reverse justify-between px-4">
            <button className={buttonStyle} onClick={handleClose}>
              Close
            </button>
            <button className={buttonStyle} onClick={handleEdit}>
              Edit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewJournalCard;
