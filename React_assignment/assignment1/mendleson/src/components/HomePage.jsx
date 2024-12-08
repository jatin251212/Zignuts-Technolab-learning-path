  import React from "react";
  import Asset1 from "../assets/Asset1.png";
  import Asset2 from "../assets/Asset 2.png";
  import Asset3 from "../assets/Assets 3.png";
  import Asset4 from "../assets/Assets 4.png";
  import Graphics12 from "../assets/Graphic 1 2.png";
  import VectorSmartObject21Image from "../assets/Vector Smart Object21 1.png";

  const HomePage = () => {
    // HomePage of Website
    return (
      <div className="min-h-screen text-black">
        <img
          src={Asset1}
          alt=""
          className="w-1/11 lg:w-1/12 absolute top-0 left-0 -z-10"
        />
        <img
          src={Asset2}
          alt="R"
          className="w-1/6 lg:w-1/46 absolute top-0 right-0 -z-10"
        />
        <img
          src={Asset3}
          alt=""
          className="w-1/3 absolute bottom-0 -left-7 -z-10  md:w-1/4  lg:w-1/5 h-2/3 xl:w-[12%]"
        />
        <img
          src={Asset4}
          alt="R"
          className="w-1/6 absolute bottom-0 right-0 lg:w-1/6 xl:w-1/12"
        />
        <img
          src={VectorSmartObject21Image}
          alt="R"
          className="hidden md:block w-1/2 absolute bottom-0 lg:w-[40%] lg:left-20 xl:w-1/3 xl:left-20"
        />

        <img
          src={Graphics12}
          alt="R"
          className="absolute bottom-0 left-0 -z-20 lg:w-[84%] xl:w-[70%]"
        />
        
        <div className="absolute top-1/3 w-1/2 left-1/4 space-y-4 -z-10 md:top-1/4 md:w-1/3 md:left-1/2 lg:left-[55%] lg:w-[25%] xl:left-[55%] xl:w-[30%] 
          mt-12 md:mt-0 md:text-center md:mx-auto lg:text-left">
          <h1 className="text-3xl rubik-bold md:text-4xl leading-6 lg:text-5xl lg:leading-tight lg:font-medium md:text-center">
            Mendleson Communication and Engagement
          </h1>
          <p className="text-lg leading-4 rubik-thin md:text-xl md:rubik-medium md:text-center md:mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed
            ipsum, ut quam volutpat, tortor.
          </p>
        </div>




      </div>
    );
  };

  export default HomePage;
