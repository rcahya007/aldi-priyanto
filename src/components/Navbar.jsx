import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const barMenu = useRef();
  const listMenu = useRef();
  const handleMenu = () => {
    let nameBar = barMenu.current;
    let listBar = listMenu.current;

    if (nameBar.getAttribute("name") === "open") {
      return (
        nameBar.setAttribute("name", "close"),
        nameBar.classList.remove("bx-menu"),
        nameBar.classList.add("bx-x"),
        listBar.classList.remove("opacity-0"),
        listBar.classList.add("opacity-100"),
        listBar.classList.remove("hidden")
      );
    } else {
      return (
        nameBar.setAttribute("name", "open"),
        nameBar.classList.remove("bx-x"),
        nameBar.classList.add("bx-menu"),
        listBar.classList.add("opacity-0"),
        listBar.classList.remove("opacity-100"),
        listBar.classList.add("hidden")
      );
    }
  };

  return (
    <>
      <nav className="md:items-center md:mx-auto md:flex md:justify-center px-4 py-1 md:py-2 md:px-4 bg-[#181818] md:fixed w-full md:inset-x-0 md:inset-t-0 lg:px-4 md:z-10 xl:px-0 fixed z-10">
        <div className="max-w-screen-xl md:flex w-full">
          <div className="flex justify-between items-center md:w-2/4 pl-4">
            <Link
              to="/"
              className="text-lg font-extrabold text-white xl:text-2xl border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white hover:-translate-y-1 duration-300 font-navbar"
            >
              ALDI SWANN
            </Link>
            <button className="md:hidden">
              <i
                name="open"
                className="bx bx-menu text-2xl text-white duration-1000"
                ref={barMenu}
                onClick={handleMenu}
              ></i>
            </button>
          </div>
          <ul
            className="md:flex absolute w-full md:z-auto left-0 opacity-0 md:opacity-100 duration-300 md:static md:justify-end bg-[#181818] z-10 hidden pr-4"
            ref={listMenu}
          >
            <li className="mx-4 md:mx-2 lg:mx-4 my-3 text-center items-center flex">
              <Link
                to="/"
                className="text-white text-[10px] font-bold border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white hover:-translate-y-1 duration-300 md:text-[8px] lg:text-[10px] xl:text-xs font-navbar"
              >
                HOME
              </Link>
            </li>
            <li className="mx-4 md:mx-2 my-3 text-center items-center flex">
              <Link
                to="/ui-ux-design"
                className="text-white text-[10px] md:text-[8px] lg:text-[10px] xl:text-xs font-bold border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white hover:-translate-y-1 duration-300 font-navbar"
              >
                UI/UX DESIGN
              </Link>
            </li>
            <li className="mx-4 md:mx-2 lg:mx-4 my-3 text-center items-center flex">
              <Link
                to="/videography"
                className="text-white text-[10px] md:text-[8px] lg:text-[10px] xl:text-xs font-bold border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white hover:-translate-y-1 duration-300 font-navbar"
              >
                VIDEOGRAPHY
              </Link>
            </li>
            <li className="mx-4 md:mx-2 lg:mx-4 my-3 text-center items-center flex">
              <Link
                to="/graphic-design"
                className="text-white text-[10px] md:text-[8px] lg:text-[10px] xl:text-xs font-bold border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white hover:-translate-y-1 duration-300 font-navbar"
              >
                GRAPHIC DESIGN
              </Link>
            </li>
            <li className="mx-4 md:ml-2 md:mr-0 lg:ml-4 my-3 text-center items-center flex">
              <Link
                to="/about"
                className="text-white text-[10px] md:text-[8px] lg:text-[10px] xl:text-xs font-bold border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white hover:-translate-y-1 duration-300 font-navbar"
              >
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
