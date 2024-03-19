import React, { useState } from "react";
import useConversation from "../store/useConversation";
import { useGetOtherUsers } from "../hooks/useGetOtherUsers";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { otherUsers } = useGetOtherUsers();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    const users = otherUsers?.find(
      (user) =>
        user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.lastName.toLowerCase().includes(search.toLowerCase()) ||
        user.userName.toLowerCase().includes(search.toLowerCase())
    );

    if (users) {
      setSelectedConversation(users);
      setSearch();
    }
  };

  return (
    <form
      className="flex items-center  rounded-full bg-pink-50 "
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id=""
        placeholder="Search..."
        className="input input-bordered rounded-full bg-pink-50 text-gray-500"
      />
      <button
        type="submit"
        className="btn btn-circle bg-pink-600 border-pink-600 hover:border-pink-700 hover:bg-pink-700 transition-all text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchInput;
