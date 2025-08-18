import React from "react";

const TechBadge = ({ tech }) => (
  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-purple-300">
    {tech}
  </span>
);

export default TechBadge;
