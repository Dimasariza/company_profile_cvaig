"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import logo from "../../public/logos/Logo AIG.png"

export function FixedPlugin() {
  return (
    <a href="https://www.linkedin.com/in/alex-wahyudi" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Material Tailwind"
          src={logo}
        />{" "}
        Anugerah Inti Gemilang
      </Button>
    </a>
  );
}
