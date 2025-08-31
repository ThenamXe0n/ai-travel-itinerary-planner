import React, { useEffect, useState } from "react";
import ChatBox from "../components/people/ChatBox";
import ChatPeopleList from "../components/people/ChatPeopleList";
import { axiosClient } from "../webServices/axiosInstance";

const PeoplePage = () => {
  const [selectedUser,setSelectedUser] = useState(null)
  const [users,setUsers] = useState([])
   useEffect(() => {
     async function userApi() {
       let res = await axiosClient.get("/user");
       
       if (res.data.status) {
         setUsers(res.data.data);
       }
     }
     userApi();
   }, []); 
  console.log(selectedUser)
  return (
    <section className="flex pt-20 min-h-[80vh] justify-center">
      <ChatPeopleList users={users} setSelectedUser={setSelectedUser} selectedUser={selectedUser} />
      <ChatBox selectedUser={selectedUser} />
    </section>
  );
};

export default PeoplePage;
