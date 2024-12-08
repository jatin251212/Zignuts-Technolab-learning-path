import React from "react";
import LinkedinLogo from "../assets/linkedin 1.png";
import GoogleLogo from "../assets/Group 20.png";
import FacebookLogo from "../assets/facebook 1.png";

const Footer = () => {
  // Footer of website which contaion four coloumns in it 
  return (
    <footer className="mt-20 mb-5 text-black bg-[#BFDBFF] p-10 md:p-16 lg:p-12 w-full">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:pl-10 max-w-screen-xl">
        <div className="col-span-1 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Social</h3>
          <ul className="space-y-2">
            <li className="flex gap-2 items-center justify-center md:justify-start">
              <img src={FacebookLogo} alt="Facebook Logo" />
              Facebook
            </li>
            <li className="flex gap-2 items-center justify-center md:justify-start">
              <img src={LinkedinLogo} alt="LinkedIn Logo" />
              LinkedIn
            </li>
            <li className="flex gap-2 items-center justify-center md:justify-start">
              <img src={GoogleLogo} alt="Google Logo" />
              Google
            </li>
          </ul>
        </div>

        <div className="col-span-1 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li>Services</li>
            <li>Team</li>
            <li>Clients</li>
          </ul>
        </div>

        <div className="col-span-1 text-center md:text-left mb-6 lg:mb-0">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p>
            Lorem ipsum dolor,<br />
            sit amet consectetur<br />
            adipisicing elit.
          </p>
        </div>

        <div className="col-span-1 text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Email</h3>
          <p>mendlesoncommunication@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
