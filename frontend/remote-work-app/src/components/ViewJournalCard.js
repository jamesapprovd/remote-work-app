import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditForm from "./EditForm.js";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";

const ViewJournalCard = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hasEdit, setHasEdit] = useState(false);

  const user = useSelector(selectUser);

  let journalData = user.workJournal[props.index];

  // this changes the view from individual journal to all journals
  const handleClose = () => {
    props.setHasViewed(false);
  };

  // this shows view for edit with default value
  const handleEdit = (event) => {
    event.preventDefault();
    setTitle(journalData.title);
    setDescription(journalData.content);
    setHasEdit(true);
  };

  // this is not working yet, doesn't update anything
  const handleUpdate = (event) => {
    event.preventDefault();
    setHasEdit(false);
  };

  return (
    <>
      {hasEdit ? (
        <EditForm
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
          onSubmit={handleUpdate}
        />
      ) : (
        <div className="bg-white text-left">
          <div className="border border-blue-500 mx-2 my-2 px-1 py-8">
            <p>
              {journalData.date}, {journalData.time}
            </p>
            <p className="font-bold">Title: {journalData.title}</p>
            <p>{journalData.content}</p>
            <br />
            <p className="font-bold">
              Comments ({journalData.comments.length})
            </p>
            {journalData.comments.map((element) => {
              return (
                <div key={uuidv4()}>
                  <p className="font-bold">{element.username}</p>
                  <p>{element.comment}</p>
                  <p>
                    {element.date}, {element.time}
                  </p>
                  <br />
                </div>
              );
            })}
            <button className="float-right px-1" onClick={handleClose}>
              Close
            </button>
            <button className="float-right px-1 mr-2" onClick={handleEdit}>
              Edit
            </button>
          </div>
          <br />
        </div>
      )}
    </>
  );
};

export default ViewJournalCard;
