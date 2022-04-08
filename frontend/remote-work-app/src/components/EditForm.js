import React from "react";

const EditForm = (props) => {
  const handleTitleChange = (event) => props.setTitle(event.target.value);
  const handleDescriptionChange = (event) =>
    props.setDescription(event.target.value);

  return (
    <>
      <form onSubmit={props.onSubmit}>
        <label>Edit Entry:</label>
        <div className="flex flex-col w-auto">
          <input
            className="flex basis-1/6 m-2 text-center"
            type="text"
            placeholder="title"
            defaultValue={props.title}
            onChange={handleTitleChange}
          />
          <textarea
            className="border border-black m-2 text-center"
            rows="5"
            placeholder="description"
            defaultValue={props.description}
            onChange={handleDescriptionChange}
          />
          <button type="submit" className="border m-2">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default EditForm;
