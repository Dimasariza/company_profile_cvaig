// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import MobileConvenience from "./projects";
import Testimonials from "./testimonials";
import Faqs from "./contact-us";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoIntro />
      <Feature />
      <MobileConvenience />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  );
}
