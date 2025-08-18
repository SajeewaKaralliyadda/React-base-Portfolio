import React from "react";

const SkillsSection = () => {
  const skills = [
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "React", level: 85, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Python", level: 88, category: "Backend" },
    { name: "MongoDB", level: 75, category: "Database" },
    { name: "PostgreSQL", level: 78, category: "Database" },
    { name: "AWS", level: 70, category: "Cloud" },
    { name: "Docker", level: 78, category: "Cloud" },
    { name: "Git", level: 92, category: "Tools" },
    { name: "VS Code", level: 95, category: "Tools" },
  ];

  const categories = ["Frontend", "Backend", "Database", "Cloud", "Tools"];

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <SectionHeader
          title="Skills"
          description="A comprehensive overview of my technical skills and proficiency levels"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <GlassCard key={category}>
              <h3 className="text-2xl font-bold mb-6 text-center text-purple-300">
                {category}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
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
