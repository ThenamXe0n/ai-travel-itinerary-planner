import React from "react";
import { ImagePath } from "../routes/ImagePath";

function Navbar() {
  return (
    <div>
      <div className="w-full p-4 px-24 fixed z-[999] flex items-center backdrop-blur-md justify-between">
        <img src={ImagePath.logo} alt="logoImg" />
        <div className="flex items-center justify-between gap-4">
          <h1 className="font-semibold">Dashboard</h1>
          <h1>FAQ</h1>
        </div>
        <div className="flex items-center gap-2 justify-between">
          <img src={ImagePath.avatar} alt="avatarImg" />
          <h4 className="font-semibold">Welcome Jay!</h4>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
