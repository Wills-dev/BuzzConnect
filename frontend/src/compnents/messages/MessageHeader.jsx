import React from "react";

const MessageHeader = ({ selectedConversation }) => {
  return (
    <div className="px-4 py-2 mb-2 bg-pink-100">
      <span className="label-text">To:</span>{" "}
      <span className="text-gray-500 font-bold">
        {selectedConversation?.firstName} {selectedConversation?.lastName}
      </span>
    </div>
  );
};

export default MessageHeader;
