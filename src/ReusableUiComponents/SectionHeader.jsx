import React from "react";

const SectionHeader = ({ title, description }) => (
  <div className="text-center mb-20">
    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      {title}
    </h2>
    <p className="text-xl text-white/60 max-w-3xl mx-auto">{description}</p>
  </div>
);

export default SectionHeader;
