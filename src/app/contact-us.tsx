"use client";

import { Typography, Card, CardBody, Input, Textarea, Button } from "@material-tailwind/react";
import { BsTelephone } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";

const FAQS = [
  {
    title: "Address",
    desc: "Dukuh Kalikendal 41B Ds. Pradah Kalikendal Kec. Dukuh Pakis Kota Surabaya",
    icon: <VscLocation size={100} className="m-5"/>
  },
  {
    title: "Phone",
    desc: "0813-2536-7342",
    icon: <BsTelephone size={100} className="m-5"/>
  },
  {
    title: "Whatsapp",
    desc: "0813-2536-7342",
    icon: <FaWhatsapp size={100} className="m-5"/>
  },
  {
    title: "Email",
    desc: "aintigemilang@gmail.com",
    icon: <MdOutlineMail size={100} className="m-5"/>
  },
];

export function ContactUs() {
  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Contact Us
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 !text-gray-500 lg:w-3/5"
          >
            Reach Out and Say hello. Get in touch through any of the channels below. We're eager to hear from you.
          </Typography>
        </div>

        <div className="grid gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {FAQS.map(({ title, desc, icon }) => (
            <Card key={title} shadow={false} color="transparent">
              <CardBody>  
                <div className="flex justify-center">
                  {icon}
                </div>
                <Typography color="blue-gray" className="pb-6 text-center" variant="h4">
                  {title}
                </Typography>
                <div className="pt-2">
                  <Typography className="font-normal !text-gray-500 text-center">
                    {desc}
                  </Typography>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      <div className="w-full justify-center flex">
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="flex flex-col gap-6">
            <Typography variant="h5" color="blue-gray" className="mb-4 text-center">
              Get in Touch with Us
            </Typography>
            <Input label="Name" crossOrigin={undefined} className="p-2"/>
            <Input label="Email" crossOrigin={undefined} className="p-2"/>
            <Input label="Subject" crossOrigin={undefined} className="p-2"/>
            <Textarea label="Message" className="p-2"/>
            <Button className="mt-6" fullWidth color="green">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
