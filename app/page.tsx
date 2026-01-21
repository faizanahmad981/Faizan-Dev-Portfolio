import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";

import Image from "next/image";
import ServicesMainPage from "./service/page";
import TechnicalSkills from "@/components/technical-skills/TechnicalSkills";
import Education from "@/components/education/Education";
import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";
import Portfolio from "@/components/Portfolio/Portfolio";
import PortfolioSection from "@/components/Portfolio/PortfolioSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))] ">

      
      {/* <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[rgb(var(--primary))]">
          My Portfolio
        </h1>

        <p className="text-lg text-[rgb(var(--secondary))]">
          Frontend Developer
        </p>

        <button className="bg-[rgb(var(--primary))] text-white px-6 py-2 rounded-lg">
          Contact Me
        </button>
      </div> */}
      <Navbar/>
      <Banner/>
      <About/>
      <ServicesMainPage/>
      {/* <Portfolio/> */}
      <PortfolioSection/>
      <TechnicalSkills/>
      <Education/>
      <Blog/>
      <Contact/>
      <Footer/>
    
    
    
    
    </main>
  );
}
