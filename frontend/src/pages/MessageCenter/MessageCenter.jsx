import React from "react";
import Siderbar from "../../compnents/Siderbar";
import MessageContainer from "../../compnents/messages/MessageContainer";

const MessageCenter = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
      <Siderbar />
      <MessageContainer />
    </div>
  );
};

export default MessageCenter;
