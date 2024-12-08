import React, { useState } from "react";
import Logo from "../assets/logo-1 1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent text-black rubik-regular">
      <div className="mx-auto">
        <div className="flex justify-between items-center text-nowrap">
          <div className="ml-[-3.5%]">
            <a href="/logo" className="font-bold text-lg ">
              <img className="w-1/2 md:w-2/3 lg:w-full" src={Logo} alt="Logo" />
            </a>
          </div>

          <div className="lg:flex hidden mr-[-6%]">
            <a href="/aboutUs" className="mx-4 hover:underline">
              About Us
            </a>
            <a href="/services" className="mx-4 hover:underline">
              Services
            </a>
            <a href="/team" className="mx-4 hover:underline">
              Team
            </a>
            <a href="/clients" className="mx-4 hover:underline">
              Clients
            </a>
            <a href="/contactUs" className="mx-4 hover:underline">
              Contact Us
            </a>
          </div>

          <div
            className="lg:hidden top-4 right-4 text-black-800 z-50"
            onClick={toggleMenu}
            role="button"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>

        {isOpen && (
          <div
            className={`flex flex-col items-end z-50 transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col w-1/2 text-sm p-1 rounded-lg bg-gray-50 border border-gray-200 items-end md:text-base lg:hidden">
              <a
                href="/aboutUs"
                onClick={toggleMenu}
                className="w-full border-b-2 hover:bg-gray-200 rounded-md p-1"
              >
                About Us
              </a>
              <a
                href="/services"
                onClick={toggleMenu}
                className="w-full border-b-2 hover:bg-gray-200 rounded-md p-1"
              >
                Services
              </a>
              <a
                href="/team"
                onClick={toggleMenu}
                className="w-full border-b-2 hover:bg-gray-200 rounded-md p-1"
              >
                Team
              </a>
              <a
                href="/clients"
                onClick={toggleMenu}
                className="w-full border-b-2 hover:bg-gray-200 rounded-md p-1"
              >
                Clients
              </a>
              <a
                href="/contactUs"
                onClick={toggleMenu}
                className="w-full border-b-2 hover:bg-gray-200 rounded-md p-1"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
