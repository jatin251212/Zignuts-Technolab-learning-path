import React from "react";
import ProjectImage1 from "../assets/Our Project_ 1 img 1.png";
import ProjectImage2 from "../assets/Our Project _ 2 img 1.png";
import ProjectImage3 from "../assets/Our Project_ 3 img 1.png";
import Group33 from "../assets/Group 33.png";

const OurProjects = () => {
  // Our Project page which contain information about project company have

  return (
    <div className="mt-40 text-black md:mt-60 lg:mt-48">
      <h2 className="text-4xl rubik-medium mb-12 lg:text-5xl lg:rubik-medium lg:flex lg:flex-col lg:justify-center lg:items-center text-center">
        OUR PROJECTS
        <img
          src={Group33}
          className="py-2 w-4/5 md:w-[54%] lg:w-[52%] xl:w-[33%] 2xl:w-[23%] mx-auto mt-4"
          alt=""
        />
      </h2>

      <div className="flex flex-col gap-y-6 lg:flex-row lg:justify-center lg:gap-x-6 items-center justify-center">
        <div className="group relative w-full md:w-auto hover:bg-lightBlue-200 transition duration-300 ease-in-out p-4 rounded-lg">
          <img
            src={ProjectImage1}
            alt="Project 1"
            className="lg:w-full mx-auto "
          />
        </div>

        <div className="flex flex-col gap-y-6 lg:gap-y-6 items-center justify-center w-full md:w-auto">
          <div className="group relative hover:bg-darkBlue-200 transition duration-300 ease-in-out p-4 rounded-lg">
            <img
              src={ProjectImage2}
              alt="Project 2"
              className="lg:w-full mx-auto group-hover:opacity-70"
            />
          </div>
          <div className="group relative hover:bg-darkBlue-200 transition duration-300 ease-in-out p-4 rounded-lg">
            <img
              src={ProjectImage3}
              alt="Project 3"
              className="lg:w-full mx-auto group-hover:opacity-70"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
