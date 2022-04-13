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
  "text-sm border-2 border-purple rounded-md hover:bg-green hover:text-black mt-2 ml-2 px-1";

const ViewWhiteFlagCard = (props) => {
  const [whiteFlag, setWhiteFlag] = useState({
    title: "",
    content: "",
  });
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
    setWhiteFlag((prevState) => {
      return { ...prevState, title: whiteFlagData.title };
    });
    setWhiteFlag((prevState) => {
      return { ...prevState, content: whiteFlagData.content };
    });
    setHasEdit(true);
  };

  //this updates the white flag when the "edit" button is clicked
  const handleUpdate = (event) => {
    event.preventDefault();
    let userId = user.userId;
    let whiteFlagId = whiteFlagData.whiteFlagId;
    let editedWhiteFlag = {
      title: whiteFlag.title,
      content: whiteFlag.content,
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
    // dispatch(EDIT_FLAG({ whiteFlagId, editedWhiteFlag }));
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
          title={whiteFlag.title}
          content={whiteFlag.content}
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
              );
            })}
            <CommentInputBox
              whiteFlagData={whiteFlagData}
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

export default ViewWhiteFlagCard;
