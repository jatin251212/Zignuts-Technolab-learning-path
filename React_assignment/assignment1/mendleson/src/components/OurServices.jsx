import React from "react";
import ServiceContent from "./ServiceContent";
import Group31Image from "../assets/Group 31.png";
import EngagementVector from "../assets/Engagement vector 1.png";
import ConsultationVector from "../assets/Consultation vector 1.png";
import CommunicationVector from "../assets/Coominucation vector 1.png";
import FacilitationVector from "../assets/facilation vector 1.png";
import TrainingVector from "../assets/Training and vector 1.png";
import Asset5 from "../assets/Asset 5 1.png";
import Asset6 from "../assets/Asset 6 1.png";
import Asset7 from "../assets/Asset 7 1.png";
import Asset8 from "../assets/Asset 8 2.png";

const Services = () => {
  return (
    <div className="mt-40 min-h-screen text-black md:mt-60 lg:mt-32">
      <h2 className="text-4xl rubik-medium mb-4 lg:text-5xl lg:rubik-medium lg:flex lg:flex-col lg:justify-center lg:items-center text-center">
        SERVICES
        <div className="flex justify-center w-full">
          <img
            src={Group31Image}
            className="py-2 w-[54%] md:w-1/3 xl:w-[21%] 2xl:w-[15%]"
            alt="Group 31"
          />
        </div>
      </h2>


      <div className="flex flex-col lg:flex-col lg:items-center">
        <div className="w-full">
          <ServiceContent
            title="Engagement"
            image={EngagementVector}
            content={
              "We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources."
            }
            reverseLayout={false}
            textStart={"right"}
            imageStart={"center"}
          />
        </div>

        <div className="w-full">
          <img
            src={Asset6}
            className="absolute right-0 w-1/5 lg:w-[12%]"
            alt=""
          />
          <ServiceContent
            title="Communication"
            image={CommunicationVector}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. "
            }
            reverseLayout={true}
            textStart={"left"}
            imageStart={"center"}
          />
          <img
            src={Asset7}
            className="absolute left-0 w-1/5 lg:mt-60 lg:w-[12%]"
            alt=""
          />
        </div>

        <div className="w-full">
          <ServiceContent
            title="Facilitation"
            image={FacilitationVector}
            content={
              "We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources."
            }
            reverseLayout={false}
            textStart={"right"}
            imageStart={"center"}
          />
        </div>

        <div className="w-full">
          <img
            src={Asset8}
            className="absolute right-0 w-1/5 mt-48 lg:w-1/6"
            alt=""
          />
          <ServiceContent
            title="Consultation and Research"
            image={ConsultationVector}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. "
            }
            reverseLayout={true}
            textStart={"left"}
            imageStart={"center"}
          />
        </div>

        <div className="w-full">
          <ServiceContent
            title="Training and Mentoring"
            image={TrainingVector}
            content={
              "We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources."
            }
            reverseLayout={false}
            textStart={"right"}
            imageStart={"center"}
          />
        </div>
      </div>
      <img src={Asset5} className="absolute left-0 w-1/3 lg:w-1/5" alt="" />
    </div>
  );
};

export default Services;
