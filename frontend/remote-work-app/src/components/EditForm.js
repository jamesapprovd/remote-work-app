import React from "react";

const buttonStyle =
  "w-[40%] self-center text-sm bg-green border-2 border-green rounded-md hover:border-purple hover:text-black mt-2 ml-2 px-1";

const EditForm = (props) => {
  const handleTitleChange = (event) => props.setTitle(event.target.value);
  const handleDescriptionChange = (event) =>
    props.setContent(event.target.value);

  return (
    <>
      <form className="p-2" onSubmit={props.onSubmit}>
        <label className="text-grey">Edit Entry:</label>
        <div className="flex flex-col w-auto">
          <input
            className="p-1 text-grey flex basis-1/6 m-2 text-center rounded-sm border border-grey focus:bg-lightgreen focus:outline-green focus:text-black"
            type="text"
            placeholder="title"
            defaultValue={props.title}
            onChange={handleTitleChange}
          />
          <textarea
            className="p-2 text-grey rounded-sm border border-grey focus:bg-lightgreen focus:outline-green m-2 text-center focus:text-black"
            rows="5"
            placeholder="description"
            defaultValue={props.content}
            onChange={handleDescriptionChange}
          />
          <button type="submit" className={buttonStyle}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default EditForm;
