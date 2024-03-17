import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="flex flex-col h-full w-full">
      <header>
        <h1 className="font-bold text-xl text-white">
          BUZZ<span className="text-pink-500">CONNECT</span>
        </h1>
      </header>
      <div className="flex flex-1 flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
          <h1 className="text-3xl font-semibold text-center text-gray-300 ">
            Login
          </h1>
          <form action="">
            <div className="">
              <label className="label p-2" id="username">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                name=""
                id="username"
                placeholder="Enter username"
                className="w-full input input-bordered bg-pink-50 text-gray-500 h-10"
              />
            </div>
            <div className="">
              <label className="label p-2" id="password">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                name=""
                id="password"
                s
                placeholder="Enter password"
                className="w-full input input-bordered bg-pink-50 text-gray-500 h-10"
              />
            </div>
            <p className="text-sm  mt-2 inline-block">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="hover:underline transition-all text-pink-600"
              >
                Sign Up
              </a>
            </p>
            <div className="">
              <button className="btn btn-block btn-sm mt-3 bg-pink-600 hover:bg-pink-700 hover:border-pink-700 border-pink-600">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
