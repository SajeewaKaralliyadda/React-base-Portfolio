import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "BSc (Hons) in Information Technology",
      institution: "University of Moratuwa, Sri Lanka",
      year: "2022 - Present",
      details:
        "Specializing in software engineering, web development, and data science.",
    },
    {
      degree: "G.C.E. Advanced Level",
      institution: "Your School Name",
      year: "2019 - 2021",
      details:
        "Focused on Physical Science stream (Mathematics, Physics, and Chemistry).",
    },
    {
      degree: "G.C.E. Ordinary Level",
      institution: "Your School Name",
      year: "Completed in 2018",
      details:
        "Achieved excellent grades in Mathematics, Science, and English.",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center px-6 md:px-20 bg-gray-900 text-white py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10">
        Education
      </h2>

      <div className="relative border-l-4 border-blue-500 pl-8 space-y-10">
        {educationData.map((edu, index) => (
          <div key={index} className="relative">
            {/* Dot */}
            <div className="absolute -left-[1.15rem] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900"></div>

            {/* Content */}
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-blue-300">{edu.institution}</p>
            <p className="text-sm text-gray-400">{edu.year}</p>
            <p className="mt-2 text-gray-300">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
