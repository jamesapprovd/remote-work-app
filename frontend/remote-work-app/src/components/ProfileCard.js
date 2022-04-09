import React, { useState } from "react";
import InputBox from "./InputBox";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const user = useSelector(selectUser);

  let profileImage = user.img;
  let name = user.username;
  let position = user.position;
  let interactionCount = user.interactionCount;

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
        setTitle={setTitle}
        setDescription={setDescription}
        // onSubmit={postNewJournal}
      />
    </>
  );
};

export default ProfileCard;
