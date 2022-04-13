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
  "text-sm border-2 border-purple rounded-md hover:bg-green hover:text-black float-right ml-1 px-1";

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
        console.log(res.data);
        console.log(res.data.status);
        if (res.data.status === "ok") {
          console.log("hi5", res.data);
        }
      });
    dispatch(EDIT_JOURNAL({ journalId, update }));
    console.log("hi2");
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
      {hasEdit ? (
        <EditForm
          title={title}
          content={content}
          setTitle={setTitle}
          setContent={setContent}
          onSubmit={handleUpdate}
        />
      ) : (
        <div className="bg-white text-left">
          <div className="shadow-md shadow-purple border border-lavender rounded-lg m-2 px-1 py-8">
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

export default ViewJournalCard;
