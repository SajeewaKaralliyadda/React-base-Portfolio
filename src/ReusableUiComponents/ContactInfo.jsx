import React, { useState, useEffect } from "react";
import GlassCard from "../ReusableUiComponents/GlassCard";
import ContactItem from "../ReusableUiComponents/ContactItem";
import SocialLink from "../ReusableUiComponents/SocialLink";
import { Mail, MapPin, FileText, Github, Linkedin } from "lucide-react";

const ContactInfo = () => (
  <GlassCard>
    <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
    <div className="space-y-6">
      <ContactItem
        icon={Mail}
        title="Email"
        value="sajeewakaralliyadda@gmail.com"
      />
      <ContactItem icon={MapPin} title="Location" value="Kandy, Sri Lanka" />
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
          <FileText size={20} className="text-white" />
        </div>
        <div>
          <p className="text-white font-semibold">Blog</p>
          <a
            href="https://codegravy.wordpress.com/"
            className="text-purple-300 hover:text-purple-200 transition-colors">
            Visit My Tech Blog Codegravy
          </a>
        </div>
      </div>
    </div>

    <div className="mt-8">
      <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
      <div className="flex space-x-4">
        <SocialLink
          href="https://github.com/SajeewaKaralliyadda"
          icon={Github}
        />
        <SocialLink
          href="https://www.linkedin.com/in/sajeewa-karalliyadda-37934a2a3"
          icon={Linkedin}
        />
        <SocialLink
          href="mailto:Sajeewa.sajeewakaralliyadda@gmail.com"
          icon={Mail}
        />
      </div>
    </div>
  </GlassCard>
);

export default ContactInfo;
