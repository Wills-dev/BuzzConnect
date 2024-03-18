import React, { useEffect, useState } from "react";
import useConversation from "../store/useConversation";

export const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  //   const [allMessages, setAllMessages] = useState([]);

  const { selectedConversation, setMessages, messages } = useConversation();

  const getAllMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/messages/${selectedConversation?._id}`);
      const data = await res.json();

      if (data?.error) {
        throw new Error(data.error);
      }
      setMessages(data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      if (error?.message) {
        toast.error(`${error.message}`, {
          duration: 4000,
          style: {
            background: "#f74764",
            color: "#fff",
          },
        });
      } else {
        toast.error(`Internal server error`, {
          duration: 4000,
          style: {
            background: "#f74764",
            color: "#fff",
          },
        });
      }
    }
  };

  useEffect(() => {
    if (selectedConversation?._id) getAllMessages();
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
};
