import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";

import { useState } from "react";
import NavItemLD from "./NavItemLD";
import SearchField from "./SearchField";
import cn from "../../utils/cn";

const Header = () => {
  const navitems = [
    "Home",
    "Doctor",
    "Department",
    "Contact",
    "Service",
    "Blog",
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="container relative">
      <div className="py-8 flex flex-col md:flex-row md:justify-between items-center gap-y-4 md:gap-y-0">
        <div>
          <a href="#">
            <img src="../src/assets/img/header/logo.svg" alt="" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-8  justify-center items-center md:justify-normal">
          {/* location */}
          <div className="flex gap-x-1 items-center">
            <HiOutlineLocationMarker className="w-6 h-6 text-accent" />
            <span className="text-secondary text-[18px]">Location</span>
          </div>

          {/* phone */}
          <div className="flex gap-x-1 items-center">
            <LuPhone className="w-6 h-6 text-accent" />
            <span className="text-secondary text-[18px]">Location</span>
          </div>
          <button className="btn-outline overflow-hidden">Book now</button>
        </div>
      </div>

      {/* for dekstop */}
      <nav className="hidden md:flex justify-between items-center border-b-2 shadow-md py-4 bg-white">
        <ul className="flex items-center divide-x-2 z-10 divide-accent">
          {navitems.map((item, index) => (
            <NavItemLD key={index}>{item}</NavItemLD>
          ))}
        </ul>
        <div>
          <SearchField />
        </div>
      </nav>

      {/* for mobile */}
      <nav
        className={cn(
          "bg-white pt-8 w-[250px] h-screen absolute top-0 left-0  translate-x-[-100%] transition-all duration-200 shadow-lg md:hidden",
          { "translate-x-[0] ": menuOpen }
        )}
      >
        <a href="#">
          <img src="../src/assets/img/header/logo.svg" alt="" />
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="absolute top-10 left-[100%] px-2 py-1 bg-accent text-white rounded-r-full"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>

        <ul
          className={cn(
            "flex mt-10 flex-col items-center divide-y-2 divide-accent"
          )}
        >
          {navitems.map((item, index) => (
            <a
              key={index}
              className={cn("w-full text-center btn-outline border-none")}
              href=""
            >
              {item}
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
