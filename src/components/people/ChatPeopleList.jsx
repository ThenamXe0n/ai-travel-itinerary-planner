import React, { useState } from "react";

const ChatPeopleList = ({selectedUser,setSelectedUser,users}) => {
    
    console.log(selectedUser)
  // let users = [
  //   {
  //     id: 1,
  //     name: "Group Chat",
  //     avatar: "/placeholder.svg?height=40&width=40",
  //     lastMessage: "Adarsh, Sanyam, Jay, Sahil",
  //     status: "online",
  //   },
  //   {
  //     id: 2,
  //     name: "Adarsh",
  //     avatar: "/placeholder.svg?height=40&width=40",
  //     status: "online",
  //   },
  //   {
  //     id: 3,
  //     name: "Sanyam",
  //     avatar: "/placeholder.svg?height=40&width=40",
  //     status: "offline",
  //   },
  //   {
  //     id: 4,
  //     name: "Jay",
  //     avatar: "/placeholder.svg?height=40&width=40",
  //     status: "online",
  //   },
  //   {
  //     id: 5,
  //     name: "Sahil",
  //     avatar: "/placeholder.svg?height=40&width=40",
  //     status: "offline",
  //   },
  // ];
  return (
    <div className="px-2 w-[30%]">
      <h1 className="text-2xl font-semibold tracking-tight mb-3 ">Friends in this trip</h1>
      {users.map((user,idx) => (
        <button
          key={idx}
          onClick={() => setSelectedUser(user)}
          className={`w-full border flex items-center gap-3 p-3 rounded-lg transition-colors mb-1
             `}
        >
          <div className="relative">
            <div className="h-8 border-2 overflow-hidden aspect-square w-8  rounded-full">
              <img className="object-cover" src={user.profilePicture} alt={user.name} />
            </div>
            {user.status && (
              <span
                className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-background
                  ${
                    user?.status === "online"
                      ? "bg-green-500"
                      : "bg-muted-foreground"
                  }`}
              />
            )}
          </div>
          <div className="text-left flex-1 overflow-hidden">
            <div className="font-medium truncate">{user.name}</div>
            {user.lastMessage && (
              <div className="text-sm text-muted-foreground truncate">
                {user?.lastMessage}
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default ChatPeopleList;
