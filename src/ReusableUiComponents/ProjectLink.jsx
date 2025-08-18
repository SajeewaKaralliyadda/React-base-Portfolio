import React from "react";

const ProjectLink = ({ href, icon: Icon, label, isPrimary = false }) => (
  <a
    href={href}
    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
      isPrimary
        ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/25"
        : "bg-white/10 hover:bg-white/20"
    }`}>
    <Icon size={16} />
    <span>{label}</span>
  </a>
);

export default ProjectLink;
