import React, { useState } from "react";
import InputBox from "./InputBox";
import { selectUser } from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { ADD_JOURNAL } from "../redux/userSlice";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const ProfileCard = () => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const [journal, setJournal] = useState({
    title: "",
    content: "",
  });
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  let profileImage = user.img;
  let name = user.username;
  let position = user.position;
  let interactionCount = user.interactionCount;

  const onSubmitJournal = (event) => {
    event.preventDefault();

    // const date = new Date().toISOString().slice(0, 10).replace(/-/g, "/");
    const newJournal = {
      author: name,
      journalId: uuidv4(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      title: journal.title,
      content: journal.content,
      comments: [],
    };
    // dispatch(ADD_JOURNAL({ workJournal: { ...newJournal } }));
    let userId = user.userId;
    axios
      .post(
        `http://127.0.0.1:5001/workJournal/new`,
        {
          newJournal,
          userId,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        console.log(res.data.status);
        if (res.data.status === "ok") {
          console.log("hi5", res.data);
        }
      });
    dispatch(ADD_JOURNAL(newJournal));
  };

  // not sure how the axios syntax work, haven't installed axios yet

  return (
    <>
      <div className="w-auto flex flex-col rounded-md m-4 p-2">
        <p className="font-bold text-2xl">{name}</p>
        <div className=" self-center">
          <img className="h-32 w-32 " src={profileImage} alt={name} />
        </div>
        <div className="">
          <p>Position: {position}</p>
          <p>Interaction Count: {interactionCount}</p>
        </div>
      </div>
      <InputBox
        text="Post New Journal"
        title={journal.title}
        content={journal.content}
        setJournal={setJournal}
        onSubmit={onSubmitJournal}
      />
    </>
  );
};

export default ProfileCard;
