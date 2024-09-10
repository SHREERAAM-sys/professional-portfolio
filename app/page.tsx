import Clients from "@/components/Clients";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems, smallScreenNavItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center 
    flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={ navItems} smallScreenNavItems={smallScreenNavItems}/>
        <Hero/>
        <Skills/>
        <Education/>
        
        <Experience/>
   
        <RecentProjects/>
        <Clients/>
        <Footer/>
        
      </div>
    </main>
  );
}
