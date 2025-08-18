import React, { useState, useEffect } from "react";
import SectionHeader from "../ReusableUiComponents/SectionHeader";
import ProjectCard from "../ReusableUiComponents/ProjectCard";
const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React frontend and Node.js backend",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      status: "Completed",
      github: "#",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    },
    {
      title: "Task Management App",
      description:
        "Real-time collaborative task management with drag-and-drop functionality",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      status: "In Progress",
      github: "#",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "Data visualization dashboard for weather patterns and predictions",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      status: "Completed",
      github: "#",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
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
