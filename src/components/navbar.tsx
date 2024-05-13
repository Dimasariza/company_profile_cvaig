import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        // target={href ? "_blank" : "_self"}
        target="_self"
        variant="small"
        className="font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      // shadow
      // blurred
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          variant="h6"
          color={isScrolling ? "gray" : "white"}
        >
          CV AIG
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#about_us">About Us</NavItem>
          <NavItem href="#projects" >Projects</NavItem>
          <NavItem href="#clients">Clients</NavItem>
          <NavItem href="#contact_us">Contact Us</NavItem>

          {/* <NavItem href="https://www.material-tailwind.com/docs/react/installation">
            Docs
          </NavItem> */}
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          {/* <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button color={isScrolling ? "gray" : "white"} size="sm">
              <i className="fa-brands fa-instagram text-base mr-3" />
              Product Catalog
            </Button>
          </a> */}
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about_us">About Us</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#clients">Clients</NavItem>
            <NavItem href="#contact_us">Contact Us</NavItem>
            {/* <NavItem href="https://www.material-tailwind.com/docs/react/installation">
              Docs
            </NavItem> */}
          </ul>
          {/* <div className="mt-4 flex items-center gap-2">
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <Button color="gray" size="sm" className="ml-auto">
              <i className="fa-brands fa-instagram text-base" />
                Product Catalog
              </Button>
            </a>
          </div> */}
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
