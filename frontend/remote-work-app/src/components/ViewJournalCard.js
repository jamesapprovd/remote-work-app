import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditForm from "./EditForm.js";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";

const buttonStyle =
  "text-sm border-2 border-purple rounded-md hover:bg-green hover:text-black float-right px-1";

const ViewJournalCard = (props) => {
  const [journal, setJournal] = useState({
    title: "",
    content: "",
  });
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
    setJournal((prevState) => {
      return { ...prevState, title: journal.title };
    });
    setJournal((prevState) => {
      return { ...prevState, content: journal.content };
    });
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
          title={journal.title}
          content={journal.content}
          setJournal={setJournal}
          onSubmit={handleUpdate}
        />
      ) : (
        <div className="bg-white text-left">
          <div className="shadow-md shadow-purple border border-lavender rounded-lg mx-2 my-2 px-1 py-8">
            <p>
              {journalData.date}, {journalData.time}
            </p>
            <p className="font-bold">{journalData.title}</p>
            <p className="text-sm">{journalData.content}</p>
            <br />
            <p className="font-bold text-sm">
              Comments ({journalData.comments.length})
            </p>
            {journalData.comments.map((element) => {
              return (
                <div className="border-t border-purple" key={uuidv4()}>
                  <p className="font-bold text-sm">{element.username}</p>
                  <p className="text-sm">{element.comment}</p>
                  <p className="text-sm">
                    {element.date}, {element.time}
                  </p>
                  <br />
                </div>
              );
            })}
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

export default ViewJournalCard;
