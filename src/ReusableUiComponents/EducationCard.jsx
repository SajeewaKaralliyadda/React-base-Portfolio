import React, { useState, useEffect } from "react";
import GlassCard from "../ReusableUiComponents/GlassCard";
import StatusBadge from "../ReusableUiComponents/StatusBadge";
import { BookOpen, Calendar } from "lucide-react";

const EducationCard = ({ item }) => (
  <GlassCard className="transform hover:scale-105">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div className="mb-4 md:mb-0">
        <div className="flex items-center space-x-2 mb-2">
          <BookOpen className="text-purple-400" size={20} />
          <span className="text-purple-300 font-semibold">{item.type}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-white/80">{item.institution}</p>
      </div>
      <div className="text-right">
        <div className="flex items-center justify-end space-x-2 mb-2">
          <Calendar size={16} className="text-purple-400" />
          <span className="text-white/60">{item.period}</span>
        </div>
        <StatusBadge status={item.status} />
      </div>
    </div>
    <p className="text-white/70">{item.description}</p>
  </GlassCard>
);

export default EducationCard;
