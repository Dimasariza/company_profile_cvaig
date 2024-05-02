"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
  BoltIcon
} from "@heroicons/react/24/solid";
import { MdOutlineFlashAuto, MdSafetyCheck } from "react-icons/md";
import { IoIosCompass } from "react-icons/io";
import { RiAlarmWarningFill } from "react-icons/ri";
import { AiFillControl } from "react-icons/ai";
import { GiBoatPropeller, GiJoystick, GiPowerGenerator } from "react-icons/gi";
import { TbWindElectricity } from "react-icons/tb";
import { BsSpeedometer } from "react-icons/bs";
import { SiGoogleearthengine } from "react-icons/si";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: BoltIcon,
    title: "Electric Maintenance",
    children:
      "Ensure smooth sailing with our top-notch marine electrical maintenance services. With a deep understanding of marine electrical systems, we offer reliable maintenance solutions tailored to your specific needs.",
  },
  {
    icon: MdOutlineFlashAuto,
    title: "Automation",
    children:
      "Elevate your maritime operations with our cutting-edge ship automation solutions. From advanced control systems to seamless sensor integration, we deliver customized automation solutions that streamline operations and minimize downtime.",
  },
  {
    icon: IoIosCompass,
    title: "Navigation and Communication",
    children:
      "Experience seamless navigation and communication at sea with our comprehensive marine navigation and communication solutions. Our expert team ensures that your navigation and communication systems are always up-to-date and in optimal condition, providing you with the peace of mind to navigate even the most challenging waters with confidence.",
  },
  {
    icon: RiAlarmWarningFill,
    title: "Alarm Engine Room",
    children:
      "With advanced sensors and intuitive monitoring interfaces, our solutions empower ship operators to monitor engine room conditions with ease and respond promptly to alarms, safeguarding both vessel integrity and crew safety. Trust our expertise to keep your engine room protected, so you can navigate with confidence knowing that your vessel's performance is in capable hands.",
  },
  {
    icon: MdSafetyCheck,
    title: "Safety Device AE/ME",
    children:
      "Stay ahead of potential hazards at sea with our cutting-edge marine safety device alarm systems, meticulously designed to protect both main and auxiliary engines on your vessel. Rely on our expertise to keep your engines protected, ensuring smooth sailing and peace of mind on every voyage.",
  },
  {
    icon: AiFillControl,
    title: "Control MSB (Syncronise Generator)",
    children:
      "Take command of your vessel's power with our advanced marine main switchboard control systems. Designed for precision and reliability, our switchboards empower ship operators to efficiently manage and distribute electrical power across all essential systems on board.",
  },
  {
    icon: GiBoatPropeller,
    title: "CPP",
    children:
      "Unlock precision maneuvering with our cutting-edge marine pitch propeller control systems. Trust our expertise to deliver the control you need to navigate confidently and efficiently through any waters, maximizing both safety and performance on every voyage.",
  },
  {
    icon: GiJoystick,
    title: "Steering Gear",
    children:
      "Sail with confidence and precision using our advanced marine steering gear systems. Trust our expertise to keep your vessel on course, providing you with the peace of mind to navigate safely and efficiently on every journey.",
  },
  {
    icon: TbWindElectricity,
    title: "System Starting ME",
    children:
      "Power up your maritime journey with our state-of-the-art main engine starting systems. Engineered for reliability and efficiency, our starting systems ensure swift and seamless ignition of your vessel's main engine, enabling smooth transitions from standstill to full operation.",
  },
  {
    icon: BsSpeedometer,
    title: "Electric Governor",
    children:
      "Elevate the efficiency and performance of your vessel's engine with our cutting-edge electrical governor systems. Equipped with advanced technology and intuitive interfaces, our systems offer real-time monitoring and precise adjustments, empowering ship operators to optimize engine performance with ease.",
  },
  {
    icon: SiGoogleearthengine,
    title: "Overhaul Diesel Engine ME & AE",
    children:
      "Revitalize your vessel's power with our comprehensive main engine and auxiliary engine overhaul services. From routine maintenance to major overhauls, we use cutting-edge technology and industry-leading practices to deliver results that exceed expectations. With a focus on efficiency, reliability, and safety, our overhaul services are tailored to minimize downtime and maximize the longevity of your engines, keeping your vessel operating at its best for years to come.",
  },
  {
    icon: GiPowerGenerator,
    title: "Generator Service Type A & B",
    children:
      "Ensure uninterrupted power supply on board with our comprehensive generator service for both Type A and Type B generators. Our expert technicians specialize in servicing a wide range of marine generators, catering to the specific needs and requirements of your vessel.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        {/* <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Your Learning App
        </Typography> */}
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Our Services
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Here, we don't just offer regular boat servicing. We are the partner you need to keep your vessel sailing safely and efficiently. With our rich experience and commitment to excellence, we are here to fulfill your every need.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
