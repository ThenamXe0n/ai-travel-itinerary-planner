import React, { useRef, useState } from "react";
const messages = [
  {
    id: 1,
    content: "Hey, how's the planning going?",
    sender: "Adarsh",
    isSent: false,
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    content: "I've been looking at some great places we could visit!",
    sender: "You",
    isSent: true,
    timestamp: "10:31 AM",
  },
  {
    id: 3,
    content: "That sounds awesome! Could you share some details?",
    sender: "Adarsh",
    isSent: false,
    timestamp: "10:32 AM",
  },
  {
    id: 4,
    content: "I'll send you the links",
    sender: "You",
    isSent: true,
    timestamp: "10:33 AM",
  },
  {
    id: 4,
    content: "I'll send you the links",
    sender: "You",
    isSent: true,
    timestamp: "10:33 AM",
  },
  {
    id: 4,
    content:
      "https://img.freepik.com/premium-photo/web-developer-digital-avatar-generative-ai_934475-9048.jpg",
    contentType: "image",
    sender: "You",
    isSent: true,
    timestamp: "10:33 AM",
  },
  {
    id: 4,
    content:
      "https://img.freepik.com/premium-photo/web-developer-digital-avatar-generative-ai_934475-9048.jpg",
    contentType: "image",
    sender: "raj",
    isSent: true,
    timestamp: "10:33 AM",
  },
  {
    id: 4,
    content:
      "I'll send you the lkjdkjklsdjlkfj sdlkjsljflksjd lkjlkfkjlflkjsdln ,jhlknjkhjk khsdhj kjhjkhf kjhh kjjhjkhjk kjhkjhjkhsdhiirh uouoiunsnfh y iuoius ur  uihf oiahfu  links",
    sender: "You",
    isSent: true,
    timestamp: "10:33 AM",
  },
];
const ChatBox = ({ selectedUser }) => {
  const inputRef =  useRef()
  let userName = localStorage.getItem("user")
  const [shareMedia, setShareMedia] = useState(false);
  const [message, setMessage] = useState(messages);
  const [messageText,setMessageText] = useState({
    id: message.length+1,
    content: "Hey, how's the planning going?",
    sender: userName,
    isSent: false,
    timestamp: "10:30 AM",
  },)
  console.log(selectedUser, "kjkl");

  function handleSendMessage(messageObj){
    setMessage([...message,messageObj]);
    setMessageText(null)
    inputRef.current.value =""
  };

  console.log(messageText)

  return (
    <>
      {selectedUser !== null ? (
        <section className="flex border border-collapse flex-col">
          {/* ------------header--------------- */}
          <div className="px-6 py-4 border-b flex items-center justify-between bg-background">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-12 border-2 overflow-hidden aspect-square w-12  rounded-full">
                  <img
                    className="object-cover"
                    src={selectedUser?.avatar}
                    alt={selectedUser?.name}
                  />
                  {/* <AvatarFallback>{selectedUser.name[0]}</AvatarFallback> */}
                </div>
                {selectedUser?.status && (
                  <span
                    className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-background
                        ${
                          selectedUser?.status === "online"
                            ? "bg-green-500"
                            : "bg-muted-foreground"
                        }`}
                  />
                )}
              </div>
              <div>
                <div className="font-medium">{selectedUser?.name}</div>
                <div className="text-sm text-muted-foreground">
                  {selectedUser?.status === "online" ? "Online" : "Offline"}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button size="icon" className="rounded-full">
                <input className="w-4 h-4" />
              </button>
              <button size="icon" className="rounded-full">
                <input className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* -----------------------------message secction----------------- */}

          <div className="flex-1 px-6 py-4">
            <div className="space-y-4 max-h-[40vh] overflow-y-scroll">
              {message.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === userName ? "justify-end" : "justify-start"
                  } `}
                >
                  <div>
                    {/* -------------profile------------- */}
                    {message.sender !== userName && (
                      <div className="h-8 border-2 overflow-hidden aspect-square w-8  rounded-full">
                        <img
                          className="object-cover"
                          src={selectedUser?.avatar}
                          alt={selectedUser?.name}
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-1 max-w-[70%]">
                    {message.contentType !== "image" && (
                      <div
                        className={`rounded-2xl lg:max-w-[30vw] md:max-w-[40vw] max-w-[80vw] px-4 py-2 shadow-sm
                ${
                  message.sender === userName
                    ? "bg-black text-white rounded-br-sm"
                    : "bg-white text-black rounded-bl-sm"
                }`}
                      >
                        {message.content}
                      </div>
                    )}
                    {message.contentType === "image" && (
                      <div className="size-52 border rounded-xl shadow-lg overflow-hidden mr-3 rounded-br-sm">
                        <img
                          src={message.content}
                          alt="message"
                          className=" object-cover rounded-xl"
                        />
                      </div>
                    )}
                    <span className="text-xs text-muted-foreground px-2">
                      {message.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* -------------------------input section ------------------- */}
          <div className="p-4 border bg-background relative">
            <div className="flex items-center gap-2 max-w-4xl mx-auto">
              <div className="rounded-full ">
                <svg
                  onClick={() => setShareMedia(!shareMedia)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#000000"}
                  fill={"none"}
                  className={
                    shareMedia
                      ? "rotate-45 cursor-pointer text-red-600"
                      : "rotate-0 cursor-pointer "
                  }
                >
                  <path
                    d="M12 8V16M16 12L8 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                {shareMedia && (
                  <div
                    id="media-share"
                    className="max-w-64 w-fit max-h-40  grid grid-cols-3 before:absolute before:content-[''] before:h-5 before:w-5 before:rotate-45 before:border-b before:border-r before:-bottom-[10px] before:bg-black before:left-3  p-4 bg-black gap-5 border rounded-lg content-center absolute bottom-[4.5rem] left-1"
                  >
                    <div id="gallery" className="flex flex-col items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="white"
                        className="size-8 hover:size-7 duration-200 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                    </div>
                    <div id="contact" className="flex flex-col items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="white"
                        className="size-8 hover:size-7 duration-200 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </div>
                    <div id="video" className="flex flex-col items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="white"
                        className="size-8 hover:size-7 duration-200 cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative flex-1 flex items-center">
                {" "}
                <input
                ref={inputRef}
                onChange={(e)=>{setMessageText({...messageText,content:e.target.value})}}
                  placeholder="Type a message"
                  className=" p-2 text-xl w-full rounded-full border border-gray-300"
                />
                <div className="rounded-full right-2 border absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
              </div>
              {/* <Button variant="ghost" size="icon" className="rounded-full">
            <Mic className="w-5 h-5" />
          </Button> */}
              <div className="flex items-start gap-4 justify-center">
                <div id="mike">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6 hover:text-green-600 active:text-green-700 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                    />
                  </svg>
                </div>
                <div onClick={()=>handleSendMessage(messageText)} id="send">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6 hover:text-blue-700 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="min-w-[50%] h-[60vh] border-2 flex items-center justify-center">
          <h2>select user to view chat</h2>
        </div>
      )}
    </>
  );
};

export default ChatBox;
