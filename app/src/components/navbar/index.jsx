"use client";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import Image from "next/image";
import logo from "../../../public/logo.webp";
import menuData from "../../data.json"; // Import JSON data
import Link from "next/link";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown
  const [menuItems] = useState(menuData.menuItems);

  return (
    <div className="  text-white flex justify-between items-center px-10 py-5">
      {/* Logo Section */}
      <div className="   flex items-center space-x-2 ">
        <Image
          width={150}
          height={150}
          src={logo}
          alt="abc"
          className="hidden md:hidden lg:flex "
        />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:hidden lg:flex space-x-6">
        {menuItems.map((menuItem, index) => (
          <div key={index} className="relative">
            {/*  dropdown */}
            {menuItem.dropdown ? (
              <div
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="relative text-white font-medium rounded-lg text-sm text-center inline-flex items-center hover:text-vbgYellow cursor-pointer"
              >
                {menuItem.name}
                <HiChevronDown className="w-4 h-4 ml-2" />
                {/*Menu */}
                <div
                  id="dropdown"
                  className={`z-10  ${
                    isDropdownOpen ? "block" : "hidden"
                  } absolute top-full hover:block bg-black  space-y-2 text-sm text-white p-5 shadow-lg}`}
                >
                  <ul className=" py-2 text-sm text-gray-700 dark:text-gray-200">
                    {menuItem.items.map((dropdownItem, dropdownIndex) => (
                      <li key={dropdownIndex}>
                        <a
                          href={dropdownItem.link}
                          className="block px-4 py-2 hover:bg-vbgYellow dark:hover:bg-vbgYellow dark:hover:text-black"
                        >
                          {dropdownItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <a
                href={menuItem.link}
                className="relative hover:text-vbgYellow group font-inter"
              >
                {menuItem.name}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-vbgYellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            )}
          </div>
        ))}
      </nav>

      <Link href="#" className="hidden md:hidden lg:flex   my-btn ">
        <span>Connect Wallet</span>
      </Link>
      <div className="flex md:flex lg:hidden   ">
        <div>
          <Sidebar />
        </div>
        <div className=" mt-5">
          <Image width={150} height={150} src={logo} alt="abc" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
