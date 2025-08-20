import React, { useState, useEffect } from "react";
import GlassCard from "../ReusableUiComponents/GlassCard";
import SectionHeader from "../ReusableUiComponents/SectionHeader";
import SkillIcon from "../ReusableUiComponents/SkillIcon";

const SkillsSection = () => {
  const skills = [
    { name: "React", description: "", category: "Frontend" },
    {
      name: "HTML",
      description: "",
      category: "Frontend",
    },
    { name: "CSS", description: "", category: "Frontend" },
    {
      name: "JavaScript",
      description: "",
      category: "Frontend",
    },
    {
      name: ".Net",
      description: "",
      category: "Backend",
    },
    { name: "Laravel", description: "", category: "Backend" },
    { name: "Express", description: "", category: "Backend" },
    //{ name: "GraphQL", description: "", category: "Backend" },
    {
      name: "Azure SQL",
      description: "",
      category: "Database",
    },
    { name: "MySQL", description: "", category: "Database" },
    {
      name: "MongoDB",
      description: "",
      category: "Database",
    },
    { name: "Communication", description: "", category: "Soft Skills" },
    { name: "Presentation", description: "", category: "Soft Skills" },
    { name: "Team Work", description: "", category: "Soft Skills" },
    { name: "Problem-Solving", description: "", category: "Soft Skills" },
    { name: "Git", description: " ", category: "Tools" },
    { name: "VS Code", description: " ", category: "Tools" },
    //{ name: "TypeScript", description: "", category: "Tools" },
  ];

  const categories = [
    "Frontend",
    "Backend",
    "Database",
    "Soft Skills",
    "Tools",
  ];

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <SectionHeader
          title="Skills"
          description="Technologies and tools I work with to create amazing digital experiences"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <GlassCard key={category}>
              <h3 className="text-2xl font-bold mb-6 text-center text-purple-300">
                {category}
              </h3>
              <div className="space-y-3">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <SkillIcon key={skill.name} skill={skill} />
                  ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
