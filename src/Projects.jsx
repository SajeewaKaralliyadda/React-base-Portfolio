import React from "react";

const Projects = () => {
  const projectData = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React, Tailwind CSS, and Vite to showcase my projects, skills, and education.",
      image: "/projects/portfolio.png", // replace with actual image path
      link: "https://yourportfolio.com",
      github: "https://github.com/yourusername/portfolio",
      tech: ["React", "Tailwind CSS", "Vite"],
    },
    {
      title: "E-Commerce Web App",
      description:
        "A full-stack e-commerce application with product listings, cart, and payment gateway integration.",
      image: "/projects/ecommerce.png",
      link: "https://yourecommerce.com",
      github: "https://github.com/yourusername/ecommerce",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Task Manager",
      description:
        "A task management tool to track and organize daily work with authentication and drag-and-drop features.",
      image: "/projects/taskmanager.png",
      link: "https://yourtaskmanager.com",
      github: "https://github.com/yourusername/taskmanager",
      tech: ["React", "Firebase", "Tailwind CSS"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-20 py-16 bg-gray-900 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10 text-center">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-500 text-xs px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline">
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
