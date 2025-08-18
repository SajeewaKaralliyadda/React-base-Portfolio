import React from "react";

const ContactItem = ({ icon: Icon, title, value }) => (
  <div className="flex items-center space-x-4">
    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
      <Icon size={20} className="text-white" />
    </div>
    <div>
      <p className="text-white font-semibold">{title}</p>
      <p className="text-white/70">{value}</p>
    </div>
  </div>
);

export default ContactItem;
