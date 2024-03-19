import React from "react";
import { extractTime } from "../../helpers";

const Messages = ({ sentFrom, message }) => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div
      className={`chat ${sentFrom === "Sender" ? "chat-start" : "chat-end"}`}
    >
      <div
        className={`chat-bubble    ${
          sentFrom === "Sender" ? "" : "bg-pink-400 text-gray-700"
        } ${shakeClass}`}
      >
        {message?.message}
      </div>
      <div className="chat-footer opacity-50">
        {" "}
        <time className="text-xs opacity-50">
          {extractTime(message?.createdAt)}
        </time>
      </div>
    </div>
  );
};

export default Messages;
