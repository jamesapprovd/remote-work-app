import React, { useState } from "react";
import NavBar from "../components/NavBar";
import EmployeeColumn from "../components/EmployeeColumn";
import InputBox from "../components/InputBox";
import WhiteFlagCard from "../components/WhiteFlagCard";
import { selectUser } from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { ADD_FLAG } from "../redux/userSlice";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const WhiteFlags = () => {
  const [index, setIndex] = useState(null);
  const [flag, setFlag] = useState({
    title: "",
    content: "",
  });

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  let name = user.username;
  let position = user.position;
  let interactionCount = user.interactionCount;

  const onSubmitFlag = (event) => {
    event.preventDefault();
    const newFlag = {
      whiteFlagID: uuidv4(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      title: flag.title,
      content: flag.content,
      isSolved: false,
      comments: [],
    };

    let userId = user.userId;
    axios
      .post(
        `http://127.0.0.1:5001/whiteFlags/new`,
        {
          newFlag,
          userId,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        console.log(res.data.status);
        if (res.data.status === "ok") {
          console.log("whiteflag hi5", res.data);
        }
      });
    dispatch(ADD_FLAG(newFlag));
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/6">
          <div className="flex bg-purple-400 h-16">Logo</div>
          <div>User</div>
          <EmployeeColumn />
        </div>
        <div className="flex flex-col basis-5/6">
          <NavBar />
          <div className="flex flex-row">
            <div className="bg-red-500 basis-1/2 m-1">
              <InputBox
                text="Get help: Post a White Flag"
                setFlag={setFlag}
                title={flag.title}
                content={flag.content}
                onSubmit={onSubmitFlag}
              />
            </div>
            <div className="bg-green-500 basis-1/2 m-1 h-screen">
              White Flags
              <WhiteFlagCard index={index} setIndex={setIndex} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhiteFlags;
