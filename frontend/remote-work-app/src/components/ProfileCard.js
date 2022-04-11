import React, { useState } from "react";
import InputBox from "./InputBox";
import { ADD_JOURNAL, selectUser } from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";

const ProfileCard = () => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const [journal, setJournal] = useState({
    title: "",
    content: "",
  });
  const user = useSelector(selectUser);

  let profileImage = user.img;
  let name = user.username;
  let position = user.position;
  let interactionCount = user.interactionCount;

  const dispatch = useDispatch();

  const onSubmitJournal = (e) => {
    e.preventDefault();
    // const date = new Date().toISOString().slice(0, 10).replace(/-/g, "/");
    const newJournal = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      title: journal.title,
      content: journal.content,
      comment: [],
    };
    // dispatch(ADD_JOURNAL({ workJournal: { ...newJournal } }));
  };
  console.log(user.workJournal);
  // const postNewJournal = (event) => {
  //   event.preventDefault();
  //   axios.post(`http://127.0.0.1:5001/journals/new`, {
  //     title: title,
  //     description: description,
  //   });
  // };
  // not sure how the axios syntax work, haven't installed axios yet

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
        content={journal.description}
        setJournal={setJournal}
        onSubmit={onSubmitJournal}
      />
    </>
  );
};

export default ProfileCard;
