import React from "react";
import { ImagePath } from "../routes/ImagePath";
import { path } from "../routes/path";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { meAsync } from "../redux/user/userSlice";

function Navbar() {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.auth.userDetails);
  let isLoggedIn = useSelector((state) => state.auth.isloggedIn);
  const handleLogout = () => {
    Cookies.remove("Logtk");
    dispatch(meAsync());
  };
  return (
    <div>
      <div className="shadow-xl shadow-black/10 w-full p-4 px-24 fixed z-[999] bg-white flex items-center backdrop-blur-md justify-between">
       <Link to={path.home}> <img src={ImagePath.logo} alt="logoImg" /></Link>
        <div className="flex items-center justify-between gap-4">
          <Link to={path.trip} className="font-semibold">Dashboard</Link>
          <Link to={path.rent} className="capitalize">Rentals</Link>
          <Link className="text-green-600 capitalize" to={path.people}>
            chat
          </Link>
          <Link className="capitalize" to={path.friends}>
            Friends
          </Link>
        </div>
        {isLoggedIn ? (
          <div className="flex items-center gap-2 justify-between">
            <img src={ImagePath.avatar} alt="avatarImg" />
            <h4 className="font-semibold">Welcome {user?.name}!</h4>
            <div className="p-2">
              <button
                className="text-center bg-red-600 rounded-md text-white p-2"
                onClick={handleLogout}
              >
                Logout{" "}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link to={"/login"}  className="text-center capitalize bg-blue-800 rounded-md text-white p-2">
              log in
            </Link>
            <Link to={"/register"} className="text-center capitalize bg-blue-800 rounded-md text-white p-2">
              sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
