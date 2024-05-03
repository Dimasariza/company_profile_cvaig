"use client";

// import React from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { Typography, Card, CardBody, Carousel } from "@material-tailwind/react";

const OPTIONS = [
  {
    title: "50+",
    description: "Ship Maintenance",
  },
  {
    title: "100+",
    description: "Maintenance Projects",
  },
  {
    title: "24/7",
    description: "Support",
  },
  {
    title: "5/5",
    description: "Review Stars",
  },
];

export function Projects() {
  return (
    <section className="py-20 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Carousel className="rounded-xl" transition={{ duration: 2 }} autoplay loop>
          { 
            [1,2,3,4,5,6,7,8,9,10].map(image => (
              <img
                src={"./projects/" + image + ".jpg"}
                alt={"projects" + image}
                className="h-full w-full object-cover"
              />
            ))
          }
        </Carousel>
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Projects
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 px-4 text-left  text-xl !text-gray-500 lg:px-0  "
          >
            We have experience in handling ship problems.
          </Typography>

          <div className="col-span-2 grid gap-5 grid-cols-2 ">
            {OPTIONS.map(({ title, description }) => (
              <InfoCard key={title} title={title}>
                {description}
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;