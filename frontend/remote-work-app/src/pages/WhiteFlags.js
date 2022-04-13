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
import EmployeeCard from "../components/EmployeeCard";

const WhiteFlags = () => {
  const [index, setIndex] = useState(null);
  const [flag, setFlag] = useState({
    title: "",
    content: "",
  });

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const onSubmitFlag = (event) => {
    event.preventDefault();
    const newFlag = {
      whiteFlagId: uuidv4(),
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
      <div className="flex flex-col">
        <NavBar />
        <div className="pl-2 flex flex-row basis-5/6">
          <div className="flex flex-col w-52 p-2 h-screen">
            <EmployeeCard
              img={user.img}
              username={user.username}
              position={user.position}
              status={user.status}
            />
            <p>Your Team:</p>
            <EmployeeColumn />
          </div>

          <div className="basis-5/6 p-4 flex flex-row justify-evenly">
            <div className="flex flex-col basis-1/2 border-t border-purple p-2">
              <span className="pl-4 self-start font-bold text-2xl text-green drop-shadow-md">
                White Flags
              </span>

              <div className="shadow-inner shadow-green m-2">
                <br />
                <h3>All White Flags will be posted anonymously</h3>
                <WhiteFlagCard index={index} setIndex={setIndex} />
              </div>
            </div>
            <div className="flex flex-col basis-1/2 border-t border-green p-2">
              <div className="my-6">
                <InputBox
                  text="Get help: Post a White Flag"
                  setFlag={setFlag}
                  title={flag.title}
                  content={flag.content}
                  onSubmit={onSubmitFlag}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhiteFlags;
