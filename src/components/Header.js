import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate=useNavigate()
  const user=useSelector((store)=> store.user)
  const handleClickOfSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  };
  return (
    <div className="absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user&&<div className="flex p-2">
        <img
          alt="user-icon"
          src={user?.photoURL}
          // src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          className="w-10 m-4 rounded-m"
        />
        {/* <p className="m-4 px-2">{user.displayName}</p> */}
        <button
          onClick={handleClickOfSignout}
          className="font-bold text-l bg-red-500  my-4 rounded-lg p-2 text-white"
        >
          sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
