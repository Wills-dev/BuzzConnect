import React from "react";
import MessageHeader from "./MessageHeader";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import EmptyState from "./EmptyState";

const MessageContainer = () => {
  const isUserChatting = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {isUserChatting ? (
        <>
          <MessageHeader />
          <div className="px-4 flex-1 overflow-auto">
            <Messages sentFrom="Receiver" />
            <Messages sentFrom="Sender" />
            <Messages sentFrom="Receiver" />
            <Messages sentFrom="Sender" />
            <Messages sentFrom="Receiver" />
            <Messages sentFrom="Sender" />
            <Messages sentFrom="Receiver" />
            <Messages sentFrom="Sender" />
            <Messages sentFrom="Receiver" />
            <Messages sentFrom="Sender" />
            <Messages sentFrom="Receiver" />
            <Messages sentFrom="Sender" />
            <Messages sentFrom="Receiver" />
            <Messages sentFrom="Sender" />
          </div>
          <MessageInput />
        </>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default MessageContainer;
