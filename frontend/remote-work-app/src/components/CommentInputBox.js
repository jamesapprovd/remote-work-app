import React from "react";

const buttonStyle =
  "self-center w-[50%] text-sm bg-green border-2 border-green rounded-md hover:border-purple hover:text-black mt-2 ml-2 px-1";

const CommentInputBox = (props) => {
  return (
    <form
      className="border-y border-purple p-2"
      onSubmit={props.onSubmitComment}
    >
      <label className="px-3 text-purple">Enter a new comment:</label>
      <div className="flex flex-col">
        <textarea
          className="rounded-md border border-grey m-2 text-center focus:bg-lightgreen focus:outline-green"
          rows="5"
          placeholder="comment here"
          value={props.comment}
          onChange={props.onChangeComment}
        />
        <button className={buttonStyle}>Post</button>
      </div>
    </form>
  );
};

export default CommentInputBox;
