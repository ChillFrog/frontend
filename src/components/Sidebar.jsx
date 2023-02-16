import React from "react";
import { NavLink, Link } from "react-router-dom";
import home_icon from "../assets/home_icon.png";
import logo from "../assets/logo.png";
import { categories } from "../utils/data";

const isNotActiveStyle =
  "flex items-center px-5 text-slate-500 hover:text-lg capitalize z-20";
const isActiveStyle =
  "flex items-center px-5 font-bold border-r-2 border-black capitalize";

function SideBar({ user, closeToggle }) {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to="/"
          onClick={handleCloseSidebar}
          className=" items-center hidden md:flex"
        >
          <img src={logo} alt="logo" className="w-24 pt-2 pb-5" />
          <h1 className="font-bold text-xl text-slate-500"> Hang Out</h1>
        </Link>
        <div className="flex flex-col gap-4">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <img
              src={home_icon}
              alt="home"
              className="w-6 mr-2 pt-5 md:pt-0"
            ></img>
            <p className="pt-5 md:pt-0">Home</p>
          </NavLink>
          <h3 className="px-5 text-lg 2xl:text-xl">Discover</h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={handleCloseSidebar}
              key={category.name}
            >
              <img
                src={category.image}
                className="w-6 h-6 rounded-full shadow-sm mr-2"
                alt="category"
              />
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user?._id}`}
          onClick={handleCloseSidebar}
          className="flex my-5 mb-3 gap-2 items-center w-64 bg-white rounded-lg shadow-lg mx-3"
        >
          <img
            src={user?.image}
            className="w-10 h-10 rounded-full"
            alt="user-profile"
          />
          <p>{user.userName}</p>
        </Link>
      )}
    </div>
  );
}

export default SideBar;
