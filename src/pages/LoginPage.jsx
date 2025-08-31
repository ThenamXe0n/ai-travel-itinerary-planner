import React, { useEffect } from "react";
import { ImagePath } from "../routes/ImagePath";
import { useForm } from "react-hook-form";
import { axiosClient } from "../webServices/axiosInstance";
import { Loading, Notify } from "notiflix";
import { FaUserAlt } from "react-icons/fa";
import { path } from "../routes/path";
import { Link, Navigate } from "react-router-dom";
import { MdSecurity } from "react-icons/md";
import Cookies from "js-cookie";
import { socket } from "../socket";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    // Loading.circle();
    console.log(data);
    try {
      const res = await axiosClient.post("/user/login", data);
      let response = res.data;
      if (!response.status) {
        Notify.failure(response.message);
        return;
      }
      reset();
      Loading.remove();
      Notify.success(data.message);
      Cookies.set("Logtk", response.data.token);
    } catch (error) {
      Notify.failure(error.message);
      Loading.remove();
    }
  };
  const user = Cookies.get("Logtk");

  useEffect(() => {
    console.log("Socket Connected:", socket.connected, socket?.id);

    socket.on("connect", (socket) => {
      console.log("Socket Id:", socket?.id);
      let user = localStorage.getItem("user");
      console.log("connecting//...");
      socket.emit("registerId", { name: user });
      console.log("Successfully connected to Socket.IO server");
    });

    socket.on("connect_error", (error) => {
      console.error("Socket connection failed:", error);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    socket.on("receive_message", (msg) => {
      console.log("message receivedb :", msg);
    });
  });

  return (
    <>
      {user && user.length ? (
        <Navigate to={"/"} />
      ) : (
        <section className="bg-slate-300 h-screen w-screen flex items-center justify-center">
          <div
            className=" flex-col bg-white   flex rounded-xl p-4  h-fit"
            id="forn-container"
          >
            <div className="w-full ">
              <img src={ImagePath.logo} className="invert m-auto" alt="logo" />
              <h1 className="font-bold text-black text-2xl uppercase text-center mt-4">
                Login User
              </h1>
            </div>
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="p-4 lg:w-[30vh] xl:w-[30vw] md:w-[40vw] w-full flex flex-col gap-y-6"
            >
              <div className="flex items-center gap-x-3 ">
                <FaUserAlt color="white" size={24} />
                <input
                  {...register("email")}
                  type="text"
                  autoComplete={false}
                  autoFocus={false}
                  className="w-full p-1 autofill:focus:bg-transparent!important focus:border-b-2 border-b text-black outline-none focus:border-white border-gray-500 bg-transparent text-xl"
                  placeholder="enter user name"
                />
              </div>
              <div className="flex items-center gap-x-3 ">
                <MdSecurity color="white" size={24} />
                <input
                  {...register("password")}
                  id="password"
                  name="password"
                  autoComplete={false}
                  type="password"
                  className="w-full p-1 focus:border-b-2 border-b text-black outline-none focus:border-white border-gray-500 bg-transparent text-xl"
                  placeholder="enter password "
                />
              </div>

              <button className="flex mt-4 items-center hover:text-cyan-600  gap-2 p-4 border-none justify-center hover:bg-slate-900 duration-300 bg-blue-950 text-white font-semibold rounded-xl shadow-md shadow-gray-900">
                Login
              </button>
            </form>
            <div>
              <p className="text-black text-center mt-4">
                create a new account?{" "}
                <Link
                  className="text-blue-600 font-medium uppercase text-lg"
                  to={path.register}
                >
                  <abbr title="login username and password"> Register ↩</abbr>
                </Link>
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default LoginPage;
