import React, { useState, useEffect } from "react";
import SectionHeader from "../ReusableUiComponents/SectionHeader";
import EducationCard from "../ReusableUiComponents/EducationCard";
const EducationSection = () => {
  const education = [
    {
      type: "University",
      title: "Bachelor of Information Technology",
      institution: "University Name",
      period: "2022 - Present",
      status: "Level 3 - In Progress",
      description:
        "Specializing in Software Development and System Architecture",
    },
    {
      type: "Course",
      title: "Full Stack Web Development",
      institution: "Online Platform",
      period: "2024",
      status: "Completed",
      description:
        "Comprehensive course covering React, Node.js, and database management",
    },
    {
      type: "Course",
      title: "AWS Cloud Practitioner",
      institution: "Amazon Web Services",
      period: "2023",
      status: "Completed",
      description: "Cloud computing fundamentals and AWS services",
    },
  ];

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <SectionHeader
          title="Education"
          description="My academic journey and continuous learning path"
        />

        <div className="space-y-8">
          {education.map((item, index) => (
            <EducationCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
