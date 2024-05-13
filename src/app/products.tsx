"use client";

// import React from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { Typography, Card, CardBody, Carousel, Button } from "@material-tailwind/react";
import Link from 'next/link';

const OPTIONS = [
  {
    title: "20+",
    description: "Customize Inverter",
  },
  {
    title: "50+",
    description: "Inverter Installation",
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

export function Products() {

  return (
    <section className="py-20 px-8" id="products">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Carousel className="rounded-xl" transition={{ duration: 2 }} autoplay loop>
          { 
            [1,2,3,4,5,6,7,8,9,10].map((image, id) => (
              <img
                key={id}
                src={"./projects/" + image + ".jpg"}
                alt={"projects" + image}
                className="h-full w-full object-cover"
              />
            ))
          }
        </Carousel>
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Products
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 px-4 text-left  text-xl !text-gray-500 lg:px-0  "
          >
            We have experience in manufacturing Inverters for industrial scale projects.
          </Typography>

          <div className="col-span-2 grid gap-5 grid-cols-2 ">
            {OPTIONS.map(({ title, description }) => (
              <InfoCard key={title} title={title}>
                {description}
              </InfoCard>
            ))}
          </div>
          
          <Link href={"/"}>
            <Button variant="gradient" className="mx-1">See Products</Button>
          </Link>
          <Link href={"/"}>
            <Button variant="gradient" className="mx-1" color="green">Products Catalog</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Products;