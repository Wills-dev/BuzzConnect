import React, { useState } from "react";
import useConversation from "../store/useConversation";

export const useSendMessage = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { selectedConversation, setMessages, messages } = useConversation();

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message) return;
    setLoading(true);
    try {
      const res = await fetch(
        `/api/messages/send/${selectedConversation?._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        }
      );
      const data = await res.json();

      if (data?.error) {
        throw new Error(data.error);
      }
      setMessages([...messages, data]);
      setLoading(false);
      setMessage("");
      console.log(data);
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
  return {
    message,
    setMessage,
    handleSendMessage,
  };
};
