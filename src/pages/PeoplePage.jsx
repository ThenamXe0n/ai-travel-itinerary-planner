import React, { useState } from "react";
import ChatBox from "../components/people/ChatBox";
import ChatPeopleList from "../components/people/ChatPeopleList";
import { use } from "react";

const PeoplePage = () => {
  const [selectedUser,setSelectedUser] = useState(null)
  console.log(selectedUser)
  return (
    <section className="flex pt-20 min-h-[80vh] justify-center">
      <ChatPeopleList setSelectedUser={setSelectedUser} selectedUser={selectedUser} />
      <ChatBox selectedUser={selectedUser} />
    </section>
  );
};

export default PeoplePage;
