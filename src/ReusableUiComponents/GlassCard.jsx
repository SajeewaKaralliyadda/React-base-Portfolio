import React from "react";

const GlassCard = ({ children, className = "" }) => (
  <div
    className={`backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export default GlassCard;
