import React, { useState } from "react";
import InputBox from "./InputBox";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";
import axios from "axios";


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

  const postNewJournal = (event) => {
    event.preventDefault();
    axios
      .post(`http://127.0.0.1:5001/workJournal/new`, {
        title,
        description,
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.status);
        if (res.data.status === "ok") {
          console.log("hi5", res.data);
        }
      });
    //   try {
    //     const res = await fetch(`http://127.0.0.1:5001/workJournal/new`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         mode: "no-cors",
    //       },
    //       body: JSON.stringify({
    //         title: title,
    //         description: description,
    //       }),
    //     });
    //     const data = await res.json();
    //     console.log(data);
    //   } catch (err) {
    //     console.log(err.message);
    //   }
    // };
  };

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
        onSubmit={postNewJournal}

      />
    </>
  );
};

export default ProfileCard;
