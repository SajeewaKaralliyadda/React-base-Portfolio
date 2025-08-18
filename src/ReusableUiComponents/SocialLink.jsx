import React from "react";

const SocialLink = ({ href, icon: Icon }) => (
  <a
    href={href}
    className="p-4 bg-white/10 rounded-full hover:bg-white/20 transform hover:scale-110 transition-all duration-300">
    <Icon size={24} />
  </a>
);

export default SocialLink;
