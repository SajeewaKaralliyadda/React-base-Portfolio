import React from "react";

const SkillIcon = ({ skill }) => {
  const getSkillIcon = (skillName) => {
    const iconMap = {
      JavaScript: "🟨",
      React: "⚛️",
      "Node.js": "🟢",
      Python: "🐍",
      MongoDB: "🍃",
      PostgreSQL: "🐘",
      AWS: "☁️",
      Docker: "🐳",
      Git: "📝",
      "VS Code": "💻",
      HTML: "🌐",
      CSS: "🎨",
      TypeScript: "🔷",
      "Vue.js": "💚",
      Angular: "🔺",
      Express: "⚡",
      GraphQL: "💜",
      Redis: "🔴",
      Firebase: "🔥",
      Kubernetes: "☸️",
    };
    return iconMap[skillName] || "⚙️";
  };

  return (
    <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300 group">
      <div className="text-3xl group-hover:scale-110 transition-transform">
        {getSkillIcon(skill.name)}
      </div>
      <div>
        <span className="text-white font-medium text-lg">{skill.name}</span>
        <div className="text-purple-300 text-sm mt-1">{skill.description}</div>
      </div>
    </div>
  );
};

export default SkillIcon;
