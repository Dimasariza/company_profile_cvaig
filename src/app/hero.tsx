"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import ship from "../../public/image/top view.png";

function Hero() {
  return (
    <div className="relative min-h-screen w-full" id="home">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h2" color="white" className="mb-4">
              CV ANUGERAH INTI GEMILANG 
            </Typography>
            <br /> 
            <Typography variant="h3" color="white" className="mb-4">
              Ship Repair and Industry <br /> 
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Our company is here to help you answer the problems that occur on your ship.
            </Typography>
          </div>
          <div className="mb-2">
            <Image
              width={900}
              height={100}
              src={ship}
              alt="team work"
              className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0" 
            />
          </div>
        </div>
      </header>
      
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md" id="about_us">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            About AIG
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-10/12"
          >
            CV. Anugerah Inti Gemilang Repair Ship and Industrial Equipment - General Supplier. We have experience since 2000 in collaborating with clients, such as supplying materials, repairing industrial equipment and ships. We provide loyalty and carry out work with good results and on time. Therefore we are trusted by our clients. Join and discover the ease of creating the Ship and Industry with CV. Anugerah Inti Gemilang.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
