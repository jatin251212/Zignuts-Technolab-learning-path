import React from "react";
import TeamMember1 from "../assets/Group 25.png";
import TeamMember2 from "../assets/Group 26.png";
import TeamMember3 from "../assets/Group 27.png";
import Group32 from "../assets/Group 32.png";
import Asset8 from "../assets/Asset 8 2.png";

const OurTeam = () => {
  return (
    <div className="mt-40 text-black md:mt-60 lg:mt-48">
      <h2 className="text-4xl rubik-medium mb-12 lg:text-5xl lg:rubik-medium lg:flex lg:flex-col lg:justify-center lg:items-center text-center">
        OUR TEAM
        <img
          src={Group32}
          className="py-2 w-[55%] md:w-[35%] lg:w-[35%] xl:w-[21%] 2xl:w-[15%] mx-auto mt-4"
          alt=""
        />
      </h2>

      <div className="flex flex-col items-center gap-y-16 lg:flex-row lg:justify-evenly">
        <div>
          <img src={TeamMember1} alt="Team Member 1" className="lg:w-full" />
        </div>
        <div>
          <img src={TeamMember2} alt="Team Member 2" className="lg:w-full" />
        </div>
        <div>
          <img src={TeamMember3} alt="Team Member 3" className="lg:w-full" />
        </div>
      </div>
      <img
        src={Asset8}
        className="absolute right-0 lg:-mt-44 w-1/3 lg:w-1/6"
        alt=""
      />
    </div>
  );
};

export default OurTeam;
