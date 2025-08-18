import React, { useState, useEffect } from "react";
import GlassCard from "../ReusableUiComponents/GlassCard";
import { Award, Calendar } from "lucide-react";

const CertificationCard = ({ cert }) => (
  <GlassCard className="transform hover:scale-105">
    <div className="flex items-start justify-between mb-4">
      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
        <Award size={24} className="text-white" />
      </div>
      <span
        className={`px-3 py-1 rounded-full text-sm font-semibold ${
          cert.type === "Professional"
            ? "bg-purple-500/20 text-purple-300"
            : cert.type === "Course"
            ? "bg-blue-500/20 text-blue-300"
            : "bg-yellow-500/20 text-yellow-300"
        }`}>
        {cert.type}
      </span>
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
    <p className="text-white/80 mb-2">{cert.issuer}</p>
    <p className="text-white/60 text-sm mb-4">
      Credential ID: {cert.credentialId}
    </p>
    <div className="flex items-center space-x-2 text-purple-300">
      <Calendar size={16} />
      <span>{cert.date}</span>
    </div>
  </GlassCard>
);

export default CertificationCard;
