import { useState } from "react";

import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export const useLogin = () => {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginDetails.userName) {
      return toast.error("Please enter user name", {
        duration: 4000,
        style: {
          background: "#f74764",
          color: "#fff",
        },
      });
    } else if (!loginDetails.password) {
      return toast.error("Please enter password", {
        duration: 4000,
        style: {
          background: "#f74764",
          color: "#fff",
        },
      });
    }
    setLoading(true);
    try {
      const login = {
        userName: loginDetails.userName,
        password: loginDetails.password,
      };
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login),
      });

      const data = await res.json();
      setLoading(false);
      console.log(data);

      if (data?.error) {
        throw new Error(data.error);
      } else localStorage.setItem("user", JSON.stringify(data.data));
      setAuthUser(data?.data);
    } catch (error) {
      setLoading(false);
      if (error?.message) {
        toast.error(`${error.message}`, {
          duration: 4000,
          style: {
            background: "#f74764",
            color: "#fff",
          },
        });
      } else if (error?.error?.message) {
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
    handleChange,
    loginDetails,
    handleLogin,
    loading,
  };
};
