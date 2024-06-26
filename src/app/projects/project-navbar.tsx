"use client"

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Link from 'next/link';


function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Docs
        </a>
      </Typography>
    </ul>
  );
}

export function ProjectNavbar() {
  const [openNav, setOpenNav] = useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar fullWidth className="mx-auto max-w-screen px-6 py-3 fixed z-50">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
        variant="h6"
        className="mr-4 cursor-pointer py-1.5"
        >
          <Link href={"/"}>
            Anugerah Inti Gemilang
          </Link>
        </Typography>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
        {/* <Link href={"/projects"}> */}
          <Button variant="gradient" size="sm" className="flex" >
            <DocumentArrowDownIcon className="h-4 w-4 mr-2"/>Portfolio
          </Button>
        {/* </Link> */}
      </div>
    </Navbar>
  );
}