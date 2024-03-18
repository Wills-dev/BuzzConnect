import React, { useEffect } from "react";
import MessageHeader from "./MessageHeader";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import EmptyState from "./EmptyState";
import useConversation from "../../store/useConversation";
import { useGetMessages } from "../../hooks/useGetMessages";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { authUser } = useAuthContext();
  const { loading, messages } = useGetMessages();

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
            <>
              {!loading && !messages ? (
                <p>Send a message to start conversation</p>
              ) : (
                <>
                  {messages?.map((message) => (
                    <Messages
                      message={message}
                      sentFrom={`${
                        authUser._id === message.senderId
                          ? "Sender"
                          : "Receiver"
                      }`}
                    />
                  ))}
                </>
              )}
            </>
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
