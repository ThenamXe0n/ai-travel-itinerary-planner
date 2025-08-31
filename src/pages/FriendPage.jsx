import React, { useEffect, useState } from "react";
import { FaSearch, FaUserFriends } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import FriendCard from "../components/ui/FriendCard";
import { axiosClient } from "../webServices/axiosInstance";
import { socket } from "../socket";

const options = ["my friends", "explore", "people you may know", "requests"];

const FriendPage = () => {
  const [activeTab, setActiveTab] = useState(options[0]);
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState([]);
  let online = true;

  useEffect(() => {
    async function userApi() {
      let res = await axiosClient.get("/user");
      if (res.data.status) {
        setUsers(res.data.data);
      }
    }
    userApi();
    socket.on("online", (user) => {
      setActiveUser(user);
    });
  }, []);

  console.log("online", activeUser);

  return (
    <section className="bg-white px-4 md:px-24 pt-20">
      {/* tabs */}
      <div className="flex items-center  justify-between py-2 border-b-4 border-blue-500 ">
        <div className="flex items-center gap-x-3 md:gap-x-8 ">
         
          {options.map((item, idx) => (
            <div
              onClick={() => setActiveTab(item)}
              className={`text-blue-600 cursor-pointer uppercase md:text-sm text-[10px] ${
                activeTab === item &&
                "font-bold bg-blue-600 text-white px-4 py-2 rounded-md"
              } `}
              key={idx}
            >
              {item}
            </div>
          ))}
        </div>
        <div className=" border flex border-black mt-4 rounded-sm max-w-lg">
       
          <input
            type="search"
            placeholder="search a friend"
            className="p-2 w-11/12 outline-none bg-transparent"
          />
          <button className="px-3 bg-blue-700 text-white"><FaSearch/></button>
        </div>
      </div>

      {/* //section //  */}
      <div className="my-4 grid grid-cols-1 md:grid-cols-3 gap-2">
        {users.map((item) => (
          <FriendCard
            isActive={activeUser.includes(item._id)}
            name={item.name}
            email={item.username}
            id={item._id}
            profile={item.profilePicture}
          />
        ))}
      </div>
    </section>
  );
};

export default FriendPage;
