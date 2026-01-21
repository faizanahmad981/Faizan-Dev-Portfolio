import { Service, services } from "@/components/services/services";
import Image from "next/image";
import React from "react";

const ServicesMainPage = () => {
  return (
    <section
      id="services"
      className="py-24 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[rgb(var(--text-primary))]">
            SERVICE OFFERS
          </h2>

          <p className="max-w-2xl mx-auto text-[rgb(var(--text-muted))] leading-relaxed">
            Is give may shall likeness made yielding spirit a itself togeth created after sea
            <br className="hidden lg:block" />
            is in beast beginning signs open god you're gathering ithe
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service: Service) => (
            <div
              key={service.title}
              className="
                group relative
                bg-[rgb(var(--bg-card))]
                rounded-2xl p-8
                flex flex-col items-center justify-center
                cursor-pointer
                transition-all duration-500
                hover:-translate-y-3
                hover:shadow-[0_25px_50px_rgb(var(--accent)/0.25)]
              "
            >
              {/* TOP ACCENT LINE */}
              <span
                className="
                  absolute top-0 left-0
                  h-1 w-0
                  rounded-t-xl
                  bg-[rgb(var(--accent))]
                  transition-all duration-300
                  group-hover:w-full
                "
              />

              {/* ICON */}
              <div className="mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                />
              </div>

              {/* TITLE */}
              <h5
                className="
                  text-lg font-semibold uppercase mb-2
                  text-[rgb(var(--text-primary))]
                  transition-colors duration-300
                  group-hover:text-[rgb(var(--accent))]
                "
              >
                {service.title}
              </h5>

              {/* DESCRIPTION */}
              <p className="text-center text-sm text-[rgb(var(--text-muted))]">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesMainPage;
