"use client";

import Image from "next/image";
import { services, Service } from "./services";

const SkillsOffer=()=> {
  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">SERVICE OFFERS</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Is give may shall likeness made yielding spirit a itself togeth created after sea
            <br className="hidden lg:block" />
            is in beast beginning signs open god you're gathering ithe
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service: Service) => (
            <div
              key={service.title}
              className="group relative bg-[rgb(var(--bg-gray))] rounded-2xl p-8 flex flex-col items-center
                         justify-center cursor-pointer transition-all duration-400
                         hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(46,255,193,0.25)]"
            >
              {/* Top Gradient Line */}
              <span className="absolute top-0 left-0 w-0 h-1 rounded-t-xl 
                               bg-gradient-to-r from-[rgb(var(--secondary-color))] to-[rgb(var(--neon-color-2))] 
                               transition-all duration-300 group-hover:w-full"></span>

              {/* Icon */}
              <div className="mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h5 className="text-lg font-semibold text-[rgb(var(--primary-text))] uppercase mb-2 transition-colors duration-300 group-hover:text-[rgb(var(--secondary-color))]">
                {service.title}
              </h5>

              {/* Description */}
              <p className="text-center text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default SkillsOffer;