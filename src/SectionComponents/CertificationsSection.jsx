import React, { useState, useEffect } from "react";
import SectionHeader from "../ReusableUiComponents/SectionHeader";
import CertificationCard from "../ReusableUiComponents/CertificationCard";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AlgoXPLORE 1.0 a Hackathon and Capture the flag Challange",
      issuer: "Faculty of Computing, NIBM Green University.",
      date: "2024",
      type: "Competition",
      //credentialId: "AWS-CCP-2023-001",
    },
    {
      title: "Python for Beginners E-Certificate",
      issuer: "Open Learning Platform, University of Moratuwa",
      date: "2022",
      type: "Course",
      //credentialId: "META-REACT-2024",
    },
    {
      title: "Web Design for Beginners E-Certificate",
      issuer: "Open Learning Platform, University of Moratuwa",
      date: "2022",
      type: "Course",
      //credentialId: "HACK-2024-WIN",
    },

    /*{
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      type: "Professional",
      credentialId: "AWS-CCP-2023-001",
    },*/
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
