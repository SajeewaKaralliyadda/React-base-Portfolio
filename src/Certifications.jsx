import React from "react";
import { FaAward, FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "1st Place – National Coding Competition",
    issuer: "ICTA Sri Lanka",
    year: "2024",
    description: "Awarded for developing an innovative AI-powered travel app.",
  },
  {
    title: "Winner – HackX Hackathon",
    issuer: "University of Moratuwa",
    year: "2023",
    description:
      "Built a sustainable tourism platform in 36 hours with a team of 4.",
  },
  {
    title: "Certified JavaScript Developer",
    issuer: "freeCodeCamp",
    year: "2023",
    description:
      "Completed 300+ hours of advanced JavaScript projects and challenges.",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          <FaAward className="inline-block text-yellow-400 mr-3" />
          Certifications & Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-yellow-500/30 transition duration-300">
              <div className="flex items-center mb-3">
                <FaCertificate className="text-yellow-400 text-2xl mr-3" />
                <h3 className="text-xl font-semibold">{cert.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                <strong>{cert.issuer}</strong> • {cert.year}
              </p>
              <p className="text-gray-300">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
