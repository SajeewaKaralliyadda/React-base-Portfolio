import React from "react";

const SkillBar = ({ skill }) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-white font-medium">{skill.name}</span>
      <span className="text-purple-300">{skill.level}%</span>
    </div>
    <div className="w-full bg-white/10 rounded-full h-3">
      <div
        className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

export default SkillBar;
