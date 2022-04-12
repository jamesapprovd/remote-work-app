import React from "react";

const buttonStyle =
  "text-sm border-2 border-purple rounded-md hover:bg-green hover:text-black mt-2 ml-2 px-1";

const CommentInputBox = (props) => {
  return (
    <form onSubmit={props.onSubmitComment}>
      <textarea
        className="border border-black m-2 text-center"
        rows="5"
        placeholder="comment here"
        value={props.comment}
        onChange={props.onChangeComment}
      />
      <button className={buttonStyle}>Post</button>
    </form>
  );
};

export default CommentInputBox;
