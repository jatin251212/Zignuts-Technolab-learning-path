import React from "react";
import AboutUsImage from "../assets/about us 1.png";
import AboutUsContent from "./AboutUsContent";
import Asset5 from "../assets/Asset 5 1.png";

const About = () => {

  // About Us page which include AboutUsContent in it
  return (
    <>
      <div className="lg:mt-16 text-black relative">
        <div className="flex flex-col gap-y-16 lg:flex-row lg:items-center lg:justify-evenly lg:gap-x-8">
          <div className="mt-20 mx-auto md:mx-0 w-full lg:w-2/5">
            <img
              src={AboutUsImage}
              alt="About Us"
              className="block scale-105 md:scale-110 lg:scale-100 transition-transform duration-300"
            />
          </div>

          <div className="w-full lg:w-3/5 lg:ml-8">
            <AboutUsContent />
          </div>
        </div>
      </div>
      <div>
        <img
          src={Asset5}
          className="absolute left-0 w-1/3 md:w-1/4 lg:w-1/5 bottom-0"
          alt="Decorative "
        />
      </div>
    </>
  );
};

export default About;
