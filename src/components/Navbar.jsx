import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed flex item-center justify-between p-1 z-[100] w-full">
      <Link to="/">
        <h1 className="text-yellow-500 text-3xl font-bold cursor-pointer   ">
          MovieVerse
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white p-2 font-bold  rounded hover:bg-slate-600 ">
              ACCOUNT
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-indigo-600 text-white font-bold p-2 rounded cursor-pointer hover:bg-indigo-700"
          >
            LOGOUT
          </button>
        </div>
      ) : (
        <div className="flex">
          <Link to="/login">
            <button className="text-white p-2 font-bold  rounded hover:bg-slate-600 ">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-indigo-600 text-white font-bold p-2 rounded cursor-pointer hover:bg-indigo-700">
              SIGN UP
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
