"use client";

// import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "../components/testimonial-card";
import type { TypographyStylesType } from "@material-tailwind/react";

const TESTIMONIALS = [
  {
    feedback:
      "It has been a game-changer for my business. Their dedication, expertise, and attention to detail have truly set them apart. I highly recommend their services!",
    client: "Koarmada II",
    title: "Mayjen @ Disharkap Koarmada II",
    img: "./clients/koarmada 2.png",
  },
  {
    feedback:
      "It understood my unique needs and delivered a tailored solution promptly. Their customer support is top-notch, and I appreciate their commitment.",
    client: "Dok Pantai Lamongan",
    title: "MARKETING @ PT DPL.",
    img: "./clients/DPL.jpg",
  },
  {
    feedback:
      "They not only met but exceeded our expectations. Their innovative approach and technical proficiency have been instrumental in our success.",
    client: "Politeknik Pelayaran Surabaya",
    title: "Captain @ PolTekPel",
    img: "./clients/kl bung tomo.png",
  },
];


export function Testimonials() {
  return (
    <section className="px-10 !py-20">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col items-center">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Our Clients
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl text-center !text-gray-600"
          >
            Discover what our valued clients have to say about their experiences
            with our services. We take pride in delivering exceptional results
            and fostering lasting partnerships.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
