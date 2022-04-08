import React, { useState } from "react";

const InputBox = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <label>Enter a new Entry:</label>
      <div className="flex flex-col w-auto">
        <input
          className="flex basis-1/6 m-2 text-center"
          type="text"
          placeholder="title"
        />
        <textarea
          className="border border-black m-2 text-center"
          rows="5"
          placeholder="description"
        />
        <button type="submit" className="border m-2">
          {props.text}
        </button>
      </div>
    </form>
  );
};

export default InputBox;
