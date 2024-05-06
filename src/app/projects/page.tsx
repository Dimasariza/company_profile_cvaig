import SideBarProject from './sidebar';
import { Navbar, Footer } from "@/components";
import { ProjectNavbar } from './project-navbar';

export default function ProjectPage() {

  return (
    <>
      <ProjectNavbar />
      <SideBarProject />  
      {/* <Footer /> */}
    </>
  );
}
