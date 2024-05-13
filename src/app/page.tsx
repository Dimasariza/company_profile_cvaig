// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./our-service";
import Projects from "./projects";
import Testimonials from "./testimonials";
import Faqs from "./contact-us";
import Products from "./products";

export default function CompanyProfile() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoIntro />
      <Feature />
      <Projects />
      <Products />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  );
}
