import React, { useState, useEffect } from "react";
import AnimatedBackground from "./AnimatedBackground";
import HeroSection from "../SectionComponents/HeroSection";
import Navigation from "./Navigation";
import SkillsSection from "../SectionComponents/SkillsSection";
import EducationSection from "../SectionComponents/EducationSection";
import ProjectsSection from "../SectionComponents/ProjectsSection";
import CertificationsSection from "../SectionComponents/CertificationsSection";
import ContactSection from "../SectionComponents/ContactSection";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HeroSection />;
      case "skills":
        return <SkillsSection />;
      case "education":
        return <EducationSection />;
      case "projects":
        return <ProjectsSection />;
      case "certifications":
        return <CertificationsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen">
      <AnimatedBackground mousePosition={mousePosition} />

      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {renderSection()}
    </div>
  );
};

export default Portfolio;
