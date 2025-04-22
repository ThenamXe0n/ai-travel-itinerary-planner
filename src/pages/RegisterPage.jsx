import React, { useEffect, useState } from "react";
import { ImagePath } from "../routes/ImagePath";
import { FaUserAlt } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { FaMobileRetro } from "react-icons/fa6";
import { AiOutlineUserAdd } from "react-icons/ai";
import AvatarUpload from "../components/AvatarUpload";
import { useForm } from "react-hook-form";
import { axiosClient } from "../webServices/axiosInstance";
import axios from "axios";
import { Loading, Notify } from "notiflix";
import { Link } from "react-router-dom";
import { path } from "../routes/path";
import { useGoogleLogin } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";

const RegisterPage = () => {
  // // -----------------o auth---------------------
  // const [user, setUser] = useState([]);
  // const [profile, setProfile] = useState([]);
  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse) => setUser(codeResponse),
  //   onError: (error) => console.log("Login Failed:", error),
  // });
  // // -----------------o auth---------------------

  const [file, setFile] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    Loading.circle();
    if (data.password !== confirmPassword) {
      Loading.remove();
      return alert(
        "password value are not matching! password should match with confirm password."
      );
    }
    try {
      const res = await axiosClient().post("/user/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      reset();
      Loading.remove();
      Notify.success("user has been registered successfully");
    } catch (error) {
      Notify.failure(error.message);
      Loading.remove();
    }
  };

  // useEffect(() => {
  //   if (user) {
  //     axios
  //       .get(
  //         `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${user.access_token}`,
  //             Accept: "application/json",
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         setProfile(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [user]);

  // console.log(user);
  // console.log(profile);

  return (
    <section className="bg-black h-screen w-screen flex items-center justify-center">
      <div
        className="border-2 flex-col border-gray-600  flex rounded-xl p-4  h-fit"
        id="forn-container"
      >
        <div className="w-full ">
          <img src={ImagePath.logo} className="invert m-auto" alt="logo" />
          <p className="text-center my-2 text-[#2f4f4f]">
            register below and start planning for your trip{" "}
          </p>
          <h1 className="font-bold text-white text-2xl uppercase text-center mt-4">
            Register as User
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="p-4 lg:w-[30vh] xl:w-[30vw] md:w-[40vw] w-full flex flex-col gap-y-6"
        >
          <div className="flex flex-col items-center justify-center gap-y-2">
            <AvatarUpload setValue={setValue} setfile={setFile} />
            <label className="uppercase text-center font-semibold text-gray-500">
              Upload Image
            </label>
          </div>
          <div className="flex items-center gap-x-3 ">
            <FaUserAlt color="white" size={24} />
            <input
              {...register("username")}
              type="text"
              autoFocus={false}
              className="w-full focus:border-b-2 border-b text-white outline-none focus:border-white border-gray-500 bg-transparent text-xl"
              placeholder="enter user name"
            />
          </div>
          <div className="flex items-center gap-x-3 ">
            <FaMobileRetro color="white" size={24} />
            <input
              {...register("mobile")}
              id="mobile"
              name="mobile"
              type="text"
              maxLength={10}
              className="w-full focus:border-b-2 border-b text-white outline-none focus:border-white border-gray-500 bg-transparent text-xl"
              placeholder="enter mobile number "
            />
          </div>
          <div className="flex items-center gap-x-3 ">
            <MdSecurity color="white" size={24} />
            <input
              {...register("password")}
              id="password"
              name="password"
              type="password"
              className="w-full focus:border-b-2 border-b text-white outline-none focus:border-white border-gray-500 bg-transparent text-xl"
              placeholder="enter password "
            />
          </div>
          <div className="flex items-center gap-x-3 ">
            <MdSecurity color="white" size={24} />
            <input
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              id="confirm-password"
              name="confirm-password"
              type="confirm-password"
              className="w-full focus:border-b-2 border-b text-white outline-none focus:border-white border-gray-500 bg-transparent text-xl"
              placeholder="Re-enter password"
            />
          </div>
          <button className="flex mt-4 items-center hover:text-cyan-600  gap-2 p-4 border-none justify-center hover:bg-slate-900 duration-300 bg-blue-950 text-white font-semibold rounded-xl shadow-md shadow-gray-900">
            <AiOutlineUserAdd />
            Register
          </button>
        </form>
        <div>
          <p className="text-white text-center mt-4">
            Already have an account?{" "}
            <Link
              className="text-blue-600 font-medium uppercase text-lg"
              to={path.login}
            >
              <abbr title="login username and password"> Login ↩</abbr>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
