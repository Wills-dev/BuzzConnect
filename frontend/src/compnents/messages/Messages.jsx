import React from "react";

const Messages = ({ sentFrom }) => {
  return (
    <div
      className={`chat ${sentFrom === "Sender" ? "chat-start" : "chat-end"}`}
    >
      <div className="chat-image avatar">
        <div className="w-10 h-10 rounded-full bg-pink-100 flex justify-center items-center">
          <div className="flex w-full h-full justify-center items-center text-sm ">
            VW
          </div>
        </div>
      </div>
      <div
        className={`chat-bubble text-gray-700   ${
          sentFrom === "Sender" ? "bg-pink-200 " : "bg-pink-400 "
        }`}
      >
        You were the Chosen One!
      </div>
      <div className="chat-footer opacity-50">
        {" "}
        <time className="text-xs opacity-50">12:45</time>
      </div>
    </div>
  );
};

export default Messages;
