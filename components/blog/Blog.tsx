"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

// Import images
import { blogImg,blog2Img,entertainmentImg } from "@/assets/images/blog";
import { useReveal } from "@/hooks/useReveal";

type Blog = {
  img: StaticImageData; // Use StaticImageData for Next.js Image imports
  alt: string;
  title: string;
  description: string;
};

const blogs: Blog[] = [
  {
    img: blogImg,
    alt: "Scalable Dashboard",
    title: "Scalable Dashboard with React & Next.js",
    description:
      "Built a dynamic admin dashboard that handles real-time data efficiently.",
  },
  {
    img: blog2Img,
    alt: "Figma to Code",
    title: "Figma-to-Code Pixel-Perfect UI",
    description:
      "Converted complex Figma designs into responsive, reusable frontend components.",
  },
  {
    img: entertainmentImg,
    alt: "Form Validation",
    title: "Form Validation & API Integration",
    description:
      "Built robust forms with React Hook Form and Zod, integrated APIs efficiently.",
  },
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className=" bg-[rgb(var(--mesh-2))] py-4">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-2">
            PROJECT BLOGS
          </h2>
          <p className="text-[rgb(var(--text-muted))] max-w-xl mx-auto">
            Explore my projects and technical blogs showcasing expertise in
            frontend development, modern tools, and real-world solutions.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {blogs.map((blog, index) => {
            const reveal = useReveal(0.2 + index * 0.1); // staggered animation
            return (
              <div
                key={index}
                ref={reveal.ref}
                className={`
                  group blog-card bg-[rgb(var(--bg-card))] rounded-2xl overflow-hidden
                  shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                  transition-all duration-700
                  transform
                  ${reveal.show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
                  hover:-translate-y-3 hover:scale-105 hover:shadow-[0_25px_50px_rgba(46,255,193,0.25)]
                  cursor-pointer
                `}
              >
                
                {/* Blog Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={blog.img}
                    alt={blog.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <h5 className="blog-card-title text-xl font-bold text-[rgb(var(--text-primary))] mb-2 transition-colors group-hover:text-[rgb(var(--accent))]">
                    {blog.title}
                  </h5>
                  <p className="blog-card-text text-[rgb(var(--text-gray))] leading-relaxed">
                    {blog.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
