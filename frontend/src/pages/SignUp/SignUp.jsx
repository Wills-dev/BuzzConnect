import React from "react";
import { Link } from "react-router-dom";
import { useSignUpUser } from "../../hooks/useSignUpUser";
import { Toaster } from "react-hot-toast";

const SignUp = () => {
  const { handleChange, handleSignUpUser, registerUser, loading } =
    useSignUpUser();

  return (
    <main className="flex flex-col h-full w-full">
      <Toaster />
      <header>
        <h1 className="font-bold text-xl text-white">
          BUZZ<span className="text-pink-500">CONNECT</span>
        </h1>
      </header>
      <div className="flex flex-1 flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
          <h1 className="text-3xl font-semibold text-center text-gray-300 ">
            Register
          </h1>
          <form onSubmit={handleSignUpUser}>
            <div className="">
              <label className="label p-2" id="firstName">
                <span className="text-base label-text">First Name</span>
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={registerUser.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className="w-full input input-bordered bg-pink-50 text-gray-500 h-10"
              />
            </div>
            <div className="">
              <label className="label p-2" id="lastName">
                <span className="text-base label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={registerUser.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className="w-full input input-bordered bg-pink-50 text-gray-500 h-10"
              />
            </div>
            <div className="">
              <label className="label p-2" id="username">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                name="userName"
                id="username"
                value={registerUser.userName}
                onChange={handleChange}
                placeholder="Enter username"
                className="w-full input input-bordered bg-pink-50 text-gray-500 h-10"
              />
            </div>
            <div className="">
              <label className="label p-2" id="gender">
                <span className="text-base label-text">Gender</span>
              </label>
              <select
                name="gender"
                id="gender"
                value={registerUser.gender}
                onChange={handleChange}
                className="w-full input input-bordered bg-pink-50 text-gray-500 h-10"
              >
                <option defaultValue>select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="">
              <label className="label p-2" id="password">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={registerUser.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full input input-bordered bg-pink-50 text-gray-500 h-10"
              />
            </div>
            <div className="">
              <label className="label p-2" id="confirmPassword">
                <span className="text-base label-text">ConfirmPassword</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={registerUser.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full input input-bordered bg-pink-50 text-gray-500 h-10"
              />
            </div>
            <p className="text-sm  mt-2 inline-block">
              Have an account?{" "}
              <Link
                to="/login"
                className="hover:underline transition-all text-pink-600"
              >
                Login
              </Link>
            </p>
            <div className="">
              <button
                className={`btn btn-block btn-sm mt-3   text-gray-50 ${
                  loading
                    ? "bg-pink-300 border-pink-300  hover:bg-pink-300 hover:border-pink-300 cursor-not-allowed"
                    : "bg-pink-600 border-pink-600  hover:bg-pink-700 hover:border-pink-700 "
                }`}
              >
                {loading ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
