import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import ServicesMainPage from "./service/page";
import TechnicalSkills from "@/components/technical-skills/TechnicalSkills";
import Education from "@/components/education/Education";
import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";

import PortfolioSection from "@/components/Portfolio/PortfolioSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/navbar";
import AiChatWidget from "@/components/ai-chat/AiChatWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))] ">

      
     <div className="px"></div> 
      <Navbar/>
      <Banner/>
      <About/>
      <ServicesMainPage/>
     
      <PortfolioSection/>
      <TechnicalSkills/>
      <Education/>
      <Blog/>
      <Contact/>
      <Footer/>

         <AiChatWidget />
    
    
    
    
    </main>
  );
}
