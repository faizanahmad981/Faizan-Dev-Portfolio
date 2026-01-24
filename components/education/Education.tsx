"use client";

import React from "react";

type EducationItem = {
  year: string;
  degree: string;
  institute: string;
  address: string;
  percent?: string;
};

const educationData: EducationItem[] = [
  {
    year: "2021 – 2025",
    degree: "BS-Computer Software Engineering",
    institute: "COMSATS University Islamabad",
    address:
      "Address: University Rd, Near Ayub Medical College, Khyber Pakhtunkhwa, Abbottabad, Pakistan.",
  },
  {
    year: "2018 – 2020",
    degree: "Pre-Engineering",
    institute: "Jinnah Basic School & College, Mansehra",
    address: "Address: Shara-e-Resham, near Butt Pull, Mansehra, Khyber Pakhtunkhwa",
  },
  {
    year: "2018",
    degree: "Matriculation",
    institute: "Garden Public School Mansehra",
    address: "Address: 85GR+6QM, Dub 2, Mansehra, Khyber Pakhtunkhwa",
    percent: "70 percent",
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className=" bg-[rgb(var(--mesh-2))] py-4">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[rgb(var(--text-primary))]">
            EDUCATION
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="relative flex items-start bg-[rgb(var(--bg-card))] p-6 h-64 rounded-xl border
               border-[rgba(255,255,255,0.08)] shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-transform 
               duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(46,255,193,0.25)] group"
            >
              <span
                className="
                  absolute top-0 left-0
                  h-1 w-0
                  bg-[rgb(var(--accent))]
                  rounded-t-2xl
                  transition-all duration-300
                  group-hover:w-full
                "
              />
              {/* Timeline Dot */}
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[rgb(var(--secondary-color))] to-[rgb(var(--accent))] shadow-[0_0_15px_rgba(46,255,193,0.6)] mt-3 flex-shrink-0"></div>

              {/* Education Content */}
              <div className="ml-6 text-[rgb(var(--text-primary))]">
                <h5 className="text-[rgb(var(--accent))] font-medium">{item.year}</h5>
                <h4 className="text-xl font-semibold mt-1 group-hover:text-[rgb(var(--accent))] transition-colors">
                  {item.degree}
                </h4>
                <p className="text-[rgb(var(--text-muted))] mt-1">
                  {item.institute}
                  <br />
                  {item.address}
                </p>
                {item.percent && (
                  <p className="text-[rgb(var(--text-muted))] mt-2">{item.percent}</p>
                )}
              </div>

              {/* Gradient Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(46,255,193,0.08)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
