import React, { useState } from "react";

import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      setLoading(false);
      console.log(data);

      if (data?.error) {
        throw new Error(data.error);
      } else {
        setAuthUser(null);
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
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
    logout,
    loading,
  };
};
