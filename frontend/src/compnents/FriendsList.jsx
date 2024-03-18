import React from "react";
import { useGetOtherUsers } from "../hooks/useGetOtherUsers";
import useConversation from "../store/useConversation";

const FriendsList = () => {
  const { loading, otherUsers } = useGetOtherUsers();
  const { selectedConversation, setSelectedConversation } = useConversation();

  console.log(otherUsers);
  return (
    <div className="py-2 flex flex-col overflow-auto h-full">
      {loading ? (
        <div className="flex flex-col gap-4 h-full w-full">
          <div className="skeleton  h-12 w-full opacity-45"></div>
          <div className="skeleton  h-12 w-full opacity-45"></div>
          <div className="skeleton  h-12 w-full opacity-45"></div>
          <div className="skeleton  h-12 w-full opacity-45"></div>
          <div className="skeleton  h-12 w-full opacity-45"></div>
          <div className="skeleton  h-12 w-full opacity-45"></div>
          <div className="skeleton  h-12 w-full opacity-45"></div>
        </div>
      ) : (
        <>
          {otherUsers &&
            otherUsers?.map((user) => (
              <>
                <div
                  className={`flex gap-2 items-center hover:bg-pink-500 rounded px-2 py-1 cursor-pointer ${
                    selectedConversation?._id === user._id ? "bg-pink-500" : ""
                  }`}
                  key={user._id}
                  onClick={() => setSelectedConversation(user)}
                >
                  <div className="online avatar">
                    <div className="w-12 rounded-full h-12 flex justify-center items-center font-semibold bg-pink-100 border-pink-100 border-[1px]">
                      <div className="flex justify-center items-center h-full w-full text-gray-500">
                        {user?.firstName?.charAt(0).toUpperCase()}
                        {user?.lastName?.charAt(0).toUpperCase()}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="flex gap-3">
                      <p className="font-semibold text-gray-200">
                        {user?.firstName} {user?.lastName}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="divider my-0 py-0 h-1" />
              </>
            ))}
        </>
      )}
    </div>
  );
};

export default FriendsList;
