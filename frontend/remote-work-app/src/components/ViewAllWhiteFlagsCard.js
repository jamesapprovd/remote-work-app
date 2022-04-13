import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { selectUser, NEW_COMMENT, DEL_COMMENT } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import CommentInputBox from "./CommentInputBox";

const buttonStyle =
  "text-sm border-2 border-purple rounded-md hover:bg-green hover:text-black mt-2 ml-2 px-1";

const ViewAllWhiteFlagsCard = (props) => {
  let whiteFlagData = props.allWhiteFlags[props.index].whiteFlag;

  const handleClose = () => {
    props.setHasViewed(false);
  };

  //del
  const user = useSelector(selectUser);

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
    whiteFlagData.comments.push(newComment);
    // axios
    //   .post(`http://127.0.0.1:5001/comments/new`, {
    //     selectedJournalId,
    //     newComment,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     console.log(res.data.status);
    //     if (res.data.status === "ok") {
    //       console.log("hi5", res.data);
    //     }
    //   });
    // dispatch(
    //   NEW_COMMENT_MAIN({ newComment, selectedJournalId, selectedJournalUser })
    // );
    setComment("");
  };

  return (
    <>
      <div className="bg-white text-left">
        <div className="shadow-md shadow-purple border border-lavender rounded-lg mx-2 my-2 px-1 py-8">
          <p>
            {whiteFlagData.date}, {whiteFlagData.time}
          </p>
          <p className="font-bold">{whiteFlagData.title}</p>
          <p className="text-sm">{whiteFlagData.content}</p>
          <br />
          <p className="font-bold text-center text-[13px] border-y border-lavender bg-lilac">
            Comments ({whiteFlagData.comments.length})
          </p>
          {whiteFlagData.comments.map((element) => {
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
            whiteFlagData={whiteFlagData}
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

export default ViewAllWhiteFlagsCard;
