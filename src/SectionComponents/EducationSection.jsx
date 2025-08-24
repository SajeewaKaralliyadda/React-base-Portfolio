import React, { useState, useEffect } from "react";
import SectionHeader from "../ReusableUiComponents/SectionHeader";
import EducationCard from "../ReusableUiComponents/EducationCard";
const EducationSection = () => {
  const education = [
    {
      type: "University",
      title: "BSc. (Hons) in Information Technology & Management",
      institution: "University of Moratuwa",
      period: "2022 - Present",
      status: "Level 3 - In Progress",
      description: "Specializing in Software Development and Management",
    },
    {
      type: "Secondary Education",
      title: "G.C.E. Advanced Level",
      institution: "Dharmaraja College, Kandy",
      period: "2018 - 2020",
      status: "Completed",
      description:
        "Successfully completed with focus on Geography, Economics, and Loogic & Scientific Method",
    },
    {
      type: "Course",
      title: "Programming in Python - 1. Python for Beginners",
      institution: "Open Learning Platform",
      period: "2022",
      status: "Completed",
      description: "successfully completed a Python for Beginners course",
    },

    {
      type: "Course",
      title: "Web Development - 1. Web Design for Beginners",
      institution: "Open Learning Platform",
      period: "2022",
      status: "Completed",
      description: "successfully completed a Web Design for Beginners course",
    },

    {
      type: "Diploma",
      title: "Diploma in IT",
      institution: "SIBA Campus, Kandy",
      period: "2018",
      status: "Completed",
      description: "successfully completed a Diploma in IT course",
    },

    {
      type: "Course",
      title: "Diploma in English",
      institution: "SIBA Campus, Kandy",
      period: "2018",
      status: "Completed",
      description: "successfully completed a Diploma in English course",
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
