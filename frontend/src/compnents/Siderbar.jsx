import React from "react";
import SearchInput from "./SearchInput";
import FriendsList from "./FriendsList";
import LogoutButton from "./LogoutButton";

const Siderbar = () => {
  return (
    <div className="border-r-[1px] border-pink-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3" />
      <FriendsList />
      <LogoutButton />
    </div>
  );
};

export default Siderbar;
