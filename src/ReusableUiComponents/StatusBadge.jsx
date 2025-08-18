import React from "react";

const StatusBadge = ({ status }) => (
  <span
    className={`px-4 py-2 rounded-full text-sm font-semibold ${
      status.includes("Progress")
        ? "bg-yellow-500/20 text-yellow-300"
        : "bg-green-500/20 text-green-300"
    }`}>
    {status}
  </span>
);
export default StatusBadge;
