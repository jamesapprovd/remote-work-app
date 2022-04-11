import React, { useState } from "react";
import InputBox from "./InputBox";
import { selectUser } from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { ADD_JOURNAL } from "../redux/userSlice";

const ProfileCard = () => {
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

    const newJournal = {
      journalId: uuidv4(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      title: journal.title,
      content: journal.content,
      comments: [],
    };
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
        if (res.data.status === "ok") {
          console.log(res.data.message);
        }
      });
    console.log(newJournal);
    dispatch(ADD_JOURNAL(newJournal));
  };

  return (
    <>
      <div className="flex flex-row my-16">
        <div className="basis-1/3 ml-20">
          <img className="h-32 w-32 " src={profileImage} alt={name} />
        </div>
        <div className="basis-2/3 mr-16">
          <br />
          <p className="font-bold">{name}</p>
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
