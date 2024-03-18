import React, { useEffect } from "react";
import MessageHeader from "./MessageHeader";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import EmptyState from "./EmptyState";
import useConversation from "../../store/useConversation";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //cleanup function (unmount)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {selectedConversation ? (
        <>
          <MessageHeader selectedConversation={selectedConversation} />
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
