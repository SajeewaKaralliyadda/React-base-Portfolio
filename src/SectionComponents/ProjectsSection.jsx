import React, { useState, useEffect } from "react";
import SectionHeader from "../ReusableUiComponents/SectionHeader";
import ProjectCard from "../ReusableUiComponents/ProjectCard";
const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website v2.0",
      description:
        "My personal portfolio showcasing projects and skills with React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS"],
      status: "In Progress",
      github: "https://github.com/SajeewaKaralliyadda/React-base-Portfolio",
      live: "#",
      image: "../src/assets/img/portfoliov2.png",
    },
    {
      title: "WayFinde",
      description:
        "Full-stack web application for Connect travelers and plan own trips",
      tech: ["React", ".NET", "Azure Sql", "Stripe API"],
      status: "Completed",
      github: "https://github.com/SajeewaKaralliyadda/WayFinde",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    },
    {
      title: "Maxol Custom Theme",
      description:
        "Herbal & Cocopeat Product Website's cusrom theme for Ghost CMS platform.",
      tech: ["Handlebars (HBS)", "JavaScript", "Ghost Routing & Themes"],
      status: "Completed",
      github: "https://github.com/SajeewaKaralliyadda/Maxol-custom-theme",
      live: "#",
      image: "../src/assets/img/maxol.png",
    },

    {
      title: "Portfolio Website v1.0",
      description:
        "My personal portfolio showcasing projects and skills with HTML, CSS, JavaScript, PHP, and Bootstrap.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
      status: "Completed",
      github:
        "https://github.com/SajeewaKaralliyadda/SajeewaKaralliyadda.github.io.git",
      live: "https://sajeewakaralliyadda.github.io/",
      image: "../src/assets/img/portfolioV1.png",
    },

    {
      title: "Iskole",
      description:
        "This project is a comprehensive Education Management System developed using Laravel. It provides features for users to view available courses, enroll in courses, and manage their personal dashboard, focusing on user experience and functionality.",
      tech: ["Laravel", "TMySQL", "PHP", "HTML", "CSS", "JavaScript"],
      status: "Completed",
      github: "https://github.com/SajeewaKaralliyadda/Iskole",
      live: "#",
      image: "../../src/assets/img/iskole.png",
    },

    {
      title: "Care plus",
      description:
        "This project is a comprehensive Health Management System called CarePlus, developed using Laravel. It focuses on providing an efficient platform for users to find doctors, manage appointments, and maintain a seamless user experience.",
      tech: ["Laravel", "TMySQL", "PHP", "HTML", "CSS", "JavaScript"],
      status: "Completed",
      github: "#",
      live: "#",
      image: "../../src/assets/img/careplus.png",
    },

    {
      title: "Shopper.com",
      description:
        "This project is a comprehensive E-Commerce Website called Shopper.com, developed to deliver a seamless online shopping experience. It integrates modern technologies to ensure optimal performance and user satisfaction. ",
      tech: ["React JS", "MongoDB", "Express", "Node.js"],
      status: "In Progress",
      github: "https://github.com/SajeewaKaralliyadda/Shopper.com",
      live: "#",
      image: "../src/assets/img/shopper.png",
    },
    {
      title: "Online Guru",
      description:
        "Online Guru is an educational platform designed to showcase the institution’s offerings and provide detailed information for prospective students. This project is done for education purposely",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
      github: "#",
      live: "#",
      image: "../src/assets/img/onlineguru.png",
    },
  ];

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <SectionHeader
          title="Projects"
          description="A showcase of my development projects and technical achievements"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
