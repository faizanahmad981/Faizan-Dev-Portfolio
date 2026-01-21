import {

    carouselImg,
   /*  joint office */
   jointOfficeMain,carouselJointOffice,carouselJointOffice1,
  /* rabbit hole */
 rabbithole,
  /* luminaXpert */
  lumina, luminaXpertMain,luminaXpert1,luminaXpert2,luminaXpert3,
  /* seller margin */
  sellerMargin, sellermargin,sellermargin1,sellermargin2,sellermargin3,sellermargin4,sellermargin5,
  /* fitness gym */
  fitnessGym,fitnessGym1,fitnessGym2,  fitness,
  /* nexcent  */
   NexcentMain,Nexcent1,Nexcent2,
  /* real state */
  realstateMain ,
 realstate,
  /* truth keep */
  truthkeep,
  /* foodi website */
   foodiwebsiteMain,
   /*  image classification */
   ImageClassificationMain,ImageClassification,ImageClassification1,ImageClassification2,
  /* efamily */
   Efamily,Efamily1,Efamily2,Efamily3
  } from "@/assets/images/portfolio";
import { StaticImageData } from "next/image";
export type PortfolioItem = {
  id: number;
  title: string;
  category: "popular" | "others";
  cover: StaticImageData;
  images: StaticImageData[];
  description: string;
  technologies: string;
  link?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
   id: 1,
    title: "TruthKeep AI Base",
    category: "popular",
    cover: truthkeep,
    images: [truthkeep, truthkeep, truthkeep, truthkeep, truthkeep],
    description:
      "AI based web application that gathers politicians articles and generates sentiment scores. Includes AI chatbot.",
    technologies: "Python, Scikit-Learn, Pandas, React.js",
    link: "https://www.truthkeep.ai/",
  },
   {
    id: 2,
    title: "Seller Margin website & CRM",
    category: "popular",
    cover: sellerMargin,
    images: [sellermargin, sellermargin1, sellermargin2, sellermargin3, sellermargin4,sellermargin5  ],
    description:
      "Seller margin is a platform that connect different platforms like Amazon, eBay etc and provide us real time data for these. I have made responsive UI for this project. I have integrated clerk for auth flow and now integrating stripe for subscriptions.",
    technologies: "Next JS ,Tailwind CSS ,Redux, API Integration",
  },
  {
    id: 3,
    title: "Rabbit Hole",
    category: "popular",
    cover: rabbithole,
    images: [rabbithole, rabbithole, rabbithole],
    description:
      "A Rabbithole is a dating app and admin panel is for admin to check the stats like total users on the app, total active user, top users by countries , Online users lists, help support messages and admin can reply to the tickets , When a new user registers to mobile app, that profile goes to pending tab in admin panel and Admin can check the profiles and he can accept or reject the profile. Admin can also see the list of approved profile. Super admin can add new admin and he can remove admin as well",
    technologies: "React.js, Redux,Tailwind CSS,",
  },
   {
    id: 4,
    title: "Joint Office Detector",
    category: "popular",
    cover: jointOfficeMain,
    images: [carouselJointOffice, carouselJointOffice1, carouselJointOffice1],
    description:
      "Cross-platform React Native app for discovering and booking co-working spaces.",
    technologies: "React Native, Redux, Node.js, Firebase, NativeBase",
  },
  
   {
    id: 5,
    title: "Fitness GYM",
    category: "popular",
    cover: fitness,
    images: [ fitnessGym1, fitnessGym2],
    description:
      "Developed a complete front-end website for a fictional fitness and gym center as part of my learning and skill-building journey. Built a responsive and visually appealing interface using React.js and Bootstrap. Designed sections like home, services, trainers, membership plans, and contact forms. Focused on layout structure, component-based design, and cross-device responsiveness. This project helped enhance my understanding of front-end frameworks and sharpened my skills in building real-world business websites.",
    technologies: "React js Bootstrap",
  },
   {
    id: 6,
    title: "Lumina-Xpert",
    category: "popular",
    cover: lumina,
    images: [luminaXpert1, luminaXpert2, luminaXpert3],
    description:
      "Developed a complete front-end website for LuminaXpert, a fictional remote software company, as a part of my personal learning and practice. Designed and implemented a responsive, modern UI using HTML, CSS, JavaScript, and React.js. Focused on clean layout, component reusability, and responsive design across all screen sizes. Practiced professional front-end development workflows and UI/UX principles. This project helped strengthen my skills in building full-scale website interfaces and enhanced my confidence in front-end development best practices",
    technologies: "React js Bootstrap",
  },
  {
    id: 7,
    title: "Image Classification using CNN",
    category: "others",
    cover: ImageClassificationMain,
    images: [ImageClassification, ImageClassification1, ImageClassification2],
    description:
      "An image classification system using Convolutional Neural Networks (CNNs) integrated with a React Native front-end and Flask back-end.",
    technologies: "Flask, React Native, Python, TensorFlow",
  },
  {
    id: 8,
    title: "EFAMILY",
    category: "others",
    cover: Efamily,
    images: [Efamily1, Efamily2, Efamily3],
    description:
      "This app, built with React Native for cross-platform use, is designed to streamline family management. It allows tasks within the household to be assigned to family members. The app features two roles: Admin (family head) and Members.For further",
    technologies: "React Native,Firebase, Redux",
  },
  {
    id: 9,
    title: "Foodi-onepage-website",
    category: "others",
    cover: foodiwebsiteMain,
    images: [luminaXpert1, luminaXpert2, luminaXpert3],
    description:
      "Foodi website Front-end one page website ",
    technologies: "React js Bootstrap",
  },
  {
    id: 10,
    title: "Real State website-onepage-website",
    category: "others",
    cover: realstateMain,
    images: [realstate, luminaXpert2, luminaXpert3],
    description:
      "Real State website Front-end one page using React js HTML CSS bootstrap for beginner",
    technologies: "React js Bootstrap",
  },
   {
    id: 11,
    title: "Nexcent-onepage-website",
    category: "others",
    cover: NexcentMain,
    images: [Nexcent1, Nexcent2 ],
    description:
      "Simple Nexcent website Front-end one page for beginner",
    technologies: "HTML CSS Bootstrap",
  },
  
  

];
