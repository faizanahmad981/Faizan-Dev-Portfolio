import { StaticImageData } from "next/image";
import mouseImg from "@/assets/images/services-img/mouse.webp";
import uiUxImg from "@/assets/images/services-img/ui-ux.webp";
import websiteImg from "@/assets/images/services-img/website.webp";
import seoImg from "@/assets/images/services-img/seo.webp";

export interface Service {
  title: string;
  description: string;
  icon: StaticImageData; 
}

export const services: Service[] = [
  {
    title: "Web Development",
    description: "Web Development in React.js, Tailwind",
    icon: mouseImg,
  },
  {
    title: "Mobile Application",
    description: "Doing Mobile Application in React-Native",
    icon: uiUxImg,
  },
  {
    title: "Responsive Website",
    description: "Convert Figma to HTML, CSS, Bootstrap",
    icon: websiteImg,
  },
  {
    title: "Assignments",
    description: "Assignments and Final-Year Project",
    icon: seoImg,
  },
];
