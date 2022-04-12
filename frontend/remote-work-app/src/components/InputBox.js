import React from "react";

const InputBox = (props) => {
  const onChangeTitle = (event) => {
    if (props.setJournal) {
      props.setJournal((prevState) => {
        return { ...prevState, title: event.target.value };
      });
    } else {
      props.setFlag((prevState) => {
        return { ...prevState, title: event.target.value };
      });
    }
  };
  // const onChangeTitle = (event) => {
  //   props.setJournal((prevState) => {
  //     return { ...prevState, title: event.target.value };
  //   });
  // };
  const onChangeContent = (event) => {
    if (props.setJournal) {
      props.setJournal((prevState) => {
        return { ...prevState, content: event.target.value };
      });
    } else {
      props.setFlag((prevState) => {
        return { ...prevState, content: event.target.value };
      });
    }
  };

  return (
    <form onSubmit={props.onSubmit}>
      <label>Enter a new Entry:</label>
      <div className="flex flex-col w-auto">
        <input
          className="flex basis-1/6 m-2 text-center"
          type="text"
          placeholder="title"
          onChange={onChangeTitle}
          value={props.title}
        />
        <textarea
          className="border border-black m-2 text-center"
          rows="5"
          placeholder="description"
          onChange={onChangeContent}
          value={props.content}
        />
        <button type="submit" className="border m-2">
          {props.text}
        </button>
      </div>
    </form>
  );
};

export default InputBox;
