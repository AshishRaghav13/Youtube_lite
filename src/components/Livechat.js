import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomString } from "../utils/helper";
const Livechat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessages, setliveMessages] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      // Api polling
      //   console.log("api Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomString(25),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="ml-2 overflow-y-scroll p-2 h-[500px] border border-black bg-slate-100 rounded-xl flex flex-col-reverse">
        <div>
          {chatMessages.map((m, index) => (
            <ChatMessage key={index} name={m.name} message={m.message} />
          ))}
        </div>
      </div>
      <form
        className="border border-black w-full my-2 rounded-xl"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Ashish Raghav",
              message: liveMessages,
            })
          );
          setliveMessages("");
        }}
      >
        <input
          className=" w-80 rounded-lg ml-2 p-2 my-1"
          type="text"
          placeholder="Live chat"
          value={liveMessages}
          onChange={(e) => setliveMessages(e.target.value)}
        />
        <button className="bg-gray-200 p-2 ml-10 px-4 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default Livechat;
