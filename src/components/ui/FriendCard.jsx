import { FaUserFriends } from "react-icons/fa";

const FriendCard = ({ name, id, email, link, profile, isActive }) => {
  console.log("isActive", isActive);
  return (
    <div
      key={id}
      className={` max-h-36 flex items-center justify-between h-fit border-2 p-2 ${
        isActive && "border-green-600"
      } `}
    >
      <div className="flex items-center gap-2">
        <div
          className={`size-20 ${
            profile ? "bg-transparent" : "bg-slate-500"
          } rounded-md`}
        >
          {profile && (
            <img
              className="h-full w-full object-cover"
              src={profile}
              alt={name}
            />
          )}
        </div>
        <div>
          <h5 className="text-lg font-bold capitalize">{name}</h5>
          <p className="text-slate-400">{email}</p>
          <button className="px-5 py-1 text-sm bg-black text-white">
            message
          </button>
        </div>
      </div>
      <div className="bg-blue-600 rounded-full flex items-center justify-center size-16 text-3xl text-white">
        {" "}
        <FaUserFriends />{" "}
      </div>
    </div>
  );
};

export default FriendCard;
