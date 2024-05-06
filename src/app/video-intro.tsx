"use client";

import React from "react";
// import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { Suspense } from 'react';

export function VideoIntro() {
  return (
    <div className="p-8">
      <div className="w-full bg-black/25 container overflow-hidden rounded-xl relative mx-auto mt-20 max-w-6xl grid place-items-center">
        <Typography color="blue-gray" className="pb-6 text-center m-5 col-12" variant="h4">
          Footage of our Project
        </Typography>
        <div className="w-full m-5 col-12" 
          style={{  
          width: "280px",
          overflow: "hidden",
          height: "240px" }}
        >
          <Suspense>
            <video width="1020" height="340" controls preload="none" autoPlay loop style={{
              position: "relative",
              bottom: "130px"
            }}>
              <source src="/video/aig.mp4" type="video/mp4" />
            </video>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default VideoIntro;