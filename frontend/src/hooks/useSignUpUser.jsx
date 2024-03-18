import { useState } from "react";

import toast from "react-hot-toast";

import { axiosInstance } from "../axiosInstance/baseUrl.js";
import { useAuthContext } from "../context/AuthContext.jsx";

export const useSignUpUser = () => {
  const { setAuthUser } = useAuthContext();

  const [registerUser, setRegisterUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    gender: "",
    password: "",
    confirmPassword: "",
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
      return true;
    } else if (!registerUser?.lastName) {
      toast.error("Please enter last name", {
        duration: 4000,
        style: {
          background: "#f74764",
          color: "#fff",
        },
      });
      return true;
    } else if (!registerUser?.userName) {
      toast.error("Please enter user name", {
        duration: 4000,
        style: {
          background: "#f74764",
          color: "#fff",
        },
      });
      return true;
    } else if (
      !registerUser?.gender ||
      registerUser?.gender === "select gender"
    ) {
      toast.error("Please select gender", {
        duration: 4000,
        style: {
          background: "#f74764",
          color: "#fff",
        },
      });
      return true;
    } else if (!registerUser?.password) {
      toast.error("Please enter password", {
        duration: 4000,
        style: {
          background: "#f74764",
          color: "#fff",
        },
      });
      return true;
    } else if (registerUser?.password.length < 6) {
      toast.error("Password must be more than 6", {
        duration: 4000,
        style: {
          background: "#f74764",
          color: "#fff",
        },
      });
      return true;
    } else if (
      !registerUser?.confirmPassword ||
      registerUser?.confirmPassword !== registerUser?.password
    ) {
      toast.error("Confirm password doesn't match password", {
        duration: 4000,
        style: {
          background: "#f74764",
          color: "#fff",
        },
      });
      return true;
    } else {
      return false;
    }
  };

  const handleSignUpUser = async (e) => {
    e.preventDefault();
    const successMessage = handleRegistrationError();
    setLoading(true);
    if (!successMessage) {
      try {
        const registrationDetails = {
          firstName: registerUser.firstName,
          lastName: registerUser.lastName,
          userName: registerUser.userName,
          gender: registerUser.gender,
          password: registerUser.password,
          confirmPassword: registerUser.confirmPassword,
        };
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(registrationDetails),
        });

        const data = await res.json();
        setLoading(false);
        console.log(data);

        if (data?.error) {
          throw new Error(data.error);
        }
        // const data = await axiosInstance.post(
        //   "/auth/signup",
        //   registrationDetails
        // );
        else
          toast.success("You have successfully signed up to BUZZCONNECT", {
            duration: 4000,
            style: {
              background: "#f74764",
              color: "#fff",
            },
          });
        localStorage.setItem("user", JSON.stringify(data.data));
        setAuthUser(data?.data);
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
    }
  };

  return {
    handleChange,
    handleSignUpUser,
    registerUser,
    loading,
  };
};
