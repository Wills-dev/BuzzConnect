import { useState } from "react";

import toast from "react-hot-toast";

export const useSignUpUser = () => {
  const [registerUser, setRegisterUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    gender: "",
    password: "",
    confrimPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setRegisterUser({
      ...registerUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistrationError = () => {
    if (!registerUser?.firstName) {
      toast.error("Please enter first name.", {
        duration: 4000,
        style: {
          background: "#f74764",
          color: "#fff",
        },
      });
    } else if (!registerUser?.lastName) {
      return toast.error("Please enter last name", {
        duration: 4000,
        style: {
          background: "#f74764",
          color: "#fff",
        },
      });
    } else if (!registerUser?.userName) {
      return toast.error("Please enter user name", {
        duration: 4000,
        style: {
          background: "#f74764",
          color: "#fff",
        },
      });
    } else if (
      !registerUser?.gender ||
      registerUser?.gender === "select gender"
    ) {
      return toast.error("Please select gender", {
        duration: 4000,
        style: {
          background: "#f74764",
          color: "#fff",
        },
      });
    } else if (!registerUser?.password) {
      return toast.error("Please enter password", {
        duration: 4000,
        style: {
          background: "#f74764",
          color: "#fff",
        },
      });
    } else if (registerUser?.password.length < 6) {
      return toast.error("Password must be more than 6", {
        duration: 4000,
        style: {
          background: "#f74764",
          color: "#fff",
        },
      });
    } else if (
      !registerUser?.confrimPassword ||
      registerUser?.confrimPassword !== registerUser?.password
    ) {
      return toast.error("Confirm password doesn't match password", {
        duration: 4000,
        style: {
          background: "#f74764",
          color: "#fff",
        },
      });
    }
  };

  const handleSignUpUser = async (e) => {
    e.preventDefault();
    handleRegistrationError();
    setLoading(true);
    try {
    } catch (error) {
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
    handleChange,
    handleSignUpUser,
    registerUser,
    loading,
  };
};
