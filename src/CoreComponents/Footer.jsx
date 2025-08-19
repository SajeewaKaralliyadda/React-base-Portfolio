import React, { useState, useEffect } from "react";
import {
  MapPin,
  Mail,
  FileText,
  Github,
  Linkedin,
  ChevronDown,
} from "lucide-react";

const Footer = ({ setActiveSection }) => {
  const currentYear = new Date().getFullYear();

  const footerNavItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/SajeewaKaralliyadda",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/sajeewa-karalliyadda-37934a2a3",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:Sajeewa.sajeewakaralliyadda@gmail.com",
      icon: Mail,
      label: "Email",
    },
    { href: "https://codegravy.wordpress.com/", icon: FileText, label: "Blog" },
  ];

  return (
    <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Sajeewa Karalliyadda
            </div>
            <p className="text-white/70 mb-4 leading-relaxed">
              IT & M Level 3 Undergraduate passionate about creating innovative
              solutions through modern technology and clean code.
            </p>
            <div className="flex items-center space-x-2 text-white/60">
              <MapPin size={16} />
              <span>Kandy, Sri Lanka</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              {footerNavItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className="block text-white/70 hover:text-purple-300 transition-colors duration-300">
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <div className="space-y-2 text-white/70">
              <div>Web Development</div>
              <div>UI/UX Design</div>
              <div>TripAdvisor Account Verification</div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          {/* Connect */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center space-x-2 p-3 bg-white/5 rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300 group"
                    title={label}>
                    <Icon
                      size={18}
                      className="text-purple-400 group-hover:text-pink-400 transition-colors"
                    />
                    <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                      {label}
                    </span>
                  </a>
                ))}
              </div>

              {/* Newsletter Signup 
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white mb-2">
                  Stay Updated
                </h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                    <Mail size={16} />
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4 text-white/60 text-sm">
              <span>
                © {currentYear} Sajeewa Karalliyadda. All rights reserved.
              </span>
              <span className="hidden md:block">•</span>
              <span className="hidden md:block">
                Made with Love ❤️ & Coffee ☕{" "}
              </span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center space-x-3">
              <span className="text-white/40 text-xs">Built with:</span>
              <div className="flex items-center space-x-2">
                {[
                  { name: "React", color: "text-blue-400" },
                  { name: "Tailwind", color: "text-cyan-400" },
                  { name: "Vercel", color: "text-white" },
                ].map(({ name, color }) => (
                  <span
                    key={name}
                    className={`text-xs px-2 py-1 bg-white/5 rounded-full ${color} hover:bg-white/10 transition-colors`}>
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => setActiveSection("home")}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transform hover:scale-105 transition-all duration-300 group">
              <ChevronDown
                size={16}
                className="text-white/70 group-hover:text-white transform rotate-180 transition-all"
              />
              <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                Back to Top
              </span>
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;
