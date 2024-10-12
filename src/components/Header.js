import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleClickOfSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    // this is called when signed in,up and out
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // returns when component unsubscribed/unmounted
    return () => unsubscribe();
  }, []);
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-black flex flex-col md:flex-row sm:flex-row justify-between">
      <img className="w-44 mx-auto sm:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 mx-auto sm:mx-0">
          <button
            className="font-bold text-l bg-red-600  my-4 rounded-lg p-2 text-white"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "Netflix-GPT"}
          </button>
          <img
            alt="user-icon"
            src={user?.photoURL}
            className="w-10 m-4 rounded-m"
          />
          {/* <p className="m-4 px-2">{user.displayName}</p> */}
          <button
            onClick={handleClickOfSignout}
            className="font-bold text-l bg-red-600  my-4 rounded-lg p-2 text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
