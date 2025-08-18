import React, { useState, useEffect } from "react";
import SectionHeader from "../ReusableUiComponents/SectionHeader";
import CertificationCard from "../ReusableUiComponents/CertificationCard";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      type: "Professional",
      credentialId: "AWS-CCP-2023-001",
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2024",
      type: "Course",
      credentialId: "META-REACT-2024",
    },
    {
      title: "Hackathon Winner - Best Innovation",
      issuer: "TechFest 2024",
      date: "2024",
      type: "Competition",
      credentialId: "HACK-2024-WIN",
    },
  ];

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <SectionHeader
          title="Certifications"
          description="Professional certifications and achievements that validate my expertise"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
