import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditForm from "./EditForm.js";
import {
  selectUser,
  selectWhiteFlag,
  EDIT_FLAG,
  NEW_COMMENT,
  DEL_COMMENT,
} from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CommentInputBox from "./CommentInputBox.js";

const buttonStyle =
  "text-sm bg-green border-2 border-green rounded-md hover:border-purple hover:text-black mt-2 ml-2 px-1";
const ViewWhiteFlagCard = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [hasEdit, setHasEdit] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const whiteFlagRedux = useSelector(selectWhiteFlag);
  let whiteFlagData = whiteFlagRedux[props.index];

  // this changes the view from individual white flag to all white flags
  const handleClose = () => {
    props.setHasViewed(false);
  };

  // this shows view for edit with default value
  const handleEdit = (event) => {
    event.preventDefault();
    setTitle(whiteFlagData.title);
    setContent(whiteFlagData.content);
    setHasEdit(true);
  };

  //this updates the white flag when the "edit" button is clicked
  const handleUpdate = (event) => {
    event.preventDefault();
    let userId = user.userId;
    let whiteFlagId = whiteFlagData.whiteFlagId;
    let editedWhiteFlag = {
      title: title,
      content: content,
    };
    axios
      .put(`http://127.0.0.1:5001/whiteFlags/edit`, {
        userId,
        whiteFlagId,
        editedWhiteFlag,
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.status);
        if (res.data.status === "ok") {
          console.log("hi5 comment updated", res.data);
        }
      });
    dispatch(EDIT_FLAG({ whiteFlagId, editedWhiteFlag }));
    console.log("hi2");
    setHasEdit(false);
  };

  //add comment to white flag
  const [comment, setComment] = useState("");
  const selectedWhiteFlagId = whiteFlagData.whiteFlagId;
  const onChangeComment = (event) => setComment(event.target.value);
  const onSubmitComment = (event) => {
    event.preventDefault();
    const newComment = {
      commentId: uuidv4(),
      username: user.username,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      comment: comment,
    };
    dispatch(NEW_COMMENT({ newComment, selectedWhiteFlagId }));
    setComment("");
  };

  //delete comment from white flag
  const onClickDel = (e) => {
    e.preventDefault();
    const commentId = e.target.value;
    dispatch(DEL_COMMENT({ selectedWhiteFlagId, commentId })); //need to change backend to add this whiteFlagID
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
        <div className="flex flex-col text-left w-auto bg-white border border-green rounded-lg m-5 px-1 py-8">
          <p className="text-sm">
            {whiteFlagData.date}, {whiteFlagData.time}
          </p>
          <p className="font-bold border-b py-2">{whiteFlagData.title}</p>
          <p className="text-sm p-4">{whiteFlagData.content}</p>
          <br />
          <p className="font-bold text-center text-[13px] border-y border-green bg-lightgreen">
            Comments ({whiteFlagData.comments.length})
          </p>
          {whiteFlagData.comments.map((element) => {
            return (
              <div
                className="m-2 p-1 border rounded-sm border-green bg-lightgreen"
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
            whiteFlagData={whiteFlagData}
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

export default ViewWhiteFlagCard;
