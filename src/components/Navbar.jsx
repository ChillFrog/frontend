import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAdd, IoMdSearch } from "react-icons/io";
import search_icon from "../assets/search_icon.svg";

function Navbar({ searchTerm, setSearchTerm, user }) {
  const navigate = useNavigate();
  if (!user) return null;
  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7">
      <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
        <img src={search_icon} className="w-6" />
        <input
          type={"text"}
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search"
          onFocus={() => navigate("/search")}
          className="p-2 w-full bg-white outline-none"
        ></input>
      </div>
      <div className="flex items-center gap-3">
        <Link to={`user-profile/${user?._id}`} className="hidden md:block">
          <img
            src={user.image}
            alt="user"
            className="w-14 h-12 rounded-lg flex "
          />
        </Link>
        <Link
          to="/create-pin"
          className="bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center"
        >
          <IoMdAdd />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
