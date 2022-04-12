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
    <div className="m-4 p-4 border-2 border-lavender rounded-md">
      <form onSubmit={props.onSubmit}>
        <label>Enter a new Entry:</label>
        <div className="flex flex-col w-auto">
          <input
            className="bg-lilac border-2 border-lavender focus:outline-green rounded-sm p-1 flex basis-1/6 m-2 text-center"
            type="text"
            placeholder="title"
            onChange={onChangeTitle}
            s
            value={props.title}
          />
          <textarea
            className="bg-lilac border-2 border-lavender focus:outline-green rounded-sm p-1 flex basis-1/6 m-2 text-center"
            rows="5"
            placeholder="description"
            onChange={onChangeContent}
            value={props.content}
          />
          <button
            type="submit"
            className="bg-green border-2 border-green rounded-md w-fit p-2 m-2 self-end hover:border-purple "
          >
            {props.text}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputBox;
