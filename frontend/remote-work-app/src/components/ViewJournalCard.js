import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EditForm from "./EditForm.js";
import { selectUser, selectWorkJournal } from "../redux/userSlice";
import { useSelector } from "react-redux";
import axios from "axios";

const buttonStyle =
  "text-sm border-2 border-purple rounded-md hover:bg-green hover:text-black float-right px-1";

const ViewJournalCard = (props) => {
  // const [journal, setJournal] = useState({
  //   title: "",
  //   content: "",
  // });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [hasEdit, setHasEdit] = useState(false);

  const user = useSelector(selectUser);
  const workJournal = useSelector(selectWorkJournal);

  let journalData = workJournal[props.index];

  // this changes the view from individual journal to all journals
  const handleClose = () => {
    props.setHasViewed(false);
  };

  // this shows view for edit with default value
  const handleEdit = (event) => {
    event.preventDefault();
    setTitle(journalData.title);
    setContent(journalData.content);
    // setJournal((prevState) => {
    //   return { ...prevState, title: journal.title };
    // });
    // setJournal((prevState) => {
    //   return { ...prevState, content: journal.content };
    // });
    setHasEdit(true);
  };

  // this is not working yet, doesn't update anything
  const handleUpdate = (event) => {
    event.preventDefault();
    let userId = user.userId;
    let journalId = journalData.journalId;
    let update = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      title: title,
      content: content,
    };
    axios
      .put(`http://127.0.0.1:5001/workJournal/edit`, {
        userId,
        journalId,
        update,
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.status);
        if (res.data.status === "ok") {
          console.log("hi5", res.data);
        }
      });
    setHasEdit(false);
  };

  return (
    <>
      {hasEdit ? (
        <EditForm
          title={title}
          content={content}
          setTitle={setTitle}
          setContent={setContent}
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
