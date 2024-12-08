import React from "react";
import EngagementIcon from "../assets/Enagagement icon 1.png";
import CommunicationIcon from "../assets/coomunication icon 1.png";
import Group30Image from "../assets/Group 30.png";

const AboutUsContent = () => {
  // AboutUsContent Page which content text and images related to About Us page
  return (
    <div className="">
      
      <h2 className="text-4xl rubik-medium mb-4 lg:text-5xl lg:rubik-medium text-center lg:text-left">
        ABOUT US
        
        <img
          src={Group30Image}
          className="py-2 w-[54%] md:w-1/3 lg:w-[60%] xl:w-[37%] 2xl:w-[22%] mx-auto lg:mx-0"
          alt=""
        />
      </h2>
      
      <p className="text-lg rubik-thin leading-7 mb-6 lg:rubik-regular">
        We love what we do and are driven by achieving great results for our
        clients. Our awards and impressive client list are testament to our high
        quality approach. We deliver value, creaKvity, results and excepKonal
        levels of customer service and professionalism. We specialise in
        infrastructure development, energy and natural resources.
      </p>

      <div className="mt-14 flex flex-col gap-y-14 text-justify md:flex-row md:space-x-5 lg:w-4/5 lg:text-left lg:rubik-regular lg:space-x-7">
        <div className="space-y-2 lg:space-y-5">
          <img src={EngagementIcon} alt="" />
          <h4 className="rubik-medium md:text-xl lg:text-2xl">ENGAGEMENT</h4>
          <p className="rubik-thin lg:text-lg">
            We are engagement specialists, who have led projects at all levels
            of the IAP2 spectrum.
            <a className="font-normal" href="/AboutUs">
              {" "}
              READ MORE
            </a>
          </p>
        </div>
        <div className="space-y-2 lg:space-y-5">
          <img src={CommunicationIcon} alt="Communication Icon" />
          <h4 className="rubik-medium md:text-xl lg:text-2xl">
            COMMUNICATIONS
          </h4>
          <p className="rubik-thin lg:text-lg">
            We are award-winning leaders in communications and campaign
            management.
            <a className="font-normal" href="/ReadMore">
              {" "}
              READ MORE
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;
