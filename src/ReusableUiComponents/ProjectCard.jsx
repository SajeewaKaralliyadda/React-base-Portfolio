import React, { useState, useEffect } from "react";
import GlassCard from "../ReusableUiComponents/GlassCard";
import StatusBadge from "../ReusableUiComponents/StatusBadge";
import TechBadge from "../ReusableUiComponents/TechBadge";
import ProjectLink from "../ReusableUiComponents/ProjectLink";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => (
  <GlassCard className="transform hover:scale-105">
    <div className="mb-6">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-2xl"
      />
    </div>
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-bold text-white">{project.title}</h3>
      <StatusBadge status={project.status} />
    </div>
    <p className="text-white/70 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.map((tech) => (
        <TechBadge key={tech} tech={tech} />
      ))}
    </div>
    <div className="flex space-x-4">
      <ProjectLink href={project.github} icon={Github} label="Code" />
      <ProjectLink
        href={project.live}
        icon={ExternalLink}
        label="Live"
        isPrimary={true}
      />
    </div>
  </GlassCard>
);

export default ProjectCard;
