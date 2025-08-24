import React, { useState, useEffect } from "react";
import SocialLink from "../ReusableUiComponents/SocialLink";
import {
  User,
  Mail,
  FileText,
  Github,
  Linkedin,
  ChevronDown,
} from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen py-20">
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1 mb-8">
            <img
              src="src/assets/img/profilepic.jpg"
              alt="{'user'}"
              className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Sajeewa Karalliyadda
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 mb-8">
            Undergraduate at University of Moratuwa, Sri Lanka.
          </p>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about creating innovative solutions through code.
            Specializing in full-stack development, and modern web applications.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
              <Mail size={20} />
              <span>Get In Touch</span>
            </button>
            <a
              href="/Sajeewa_Karalliyadda.pdf"
              download
              className="flex items-center space-x-2 border border-white/30 px-8 py-4 rounded-full text-white font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
              <FileText size={20} />
              <span>View Resume</span>
            </a>
          </div>
          <div className="flex justify-center space-x-6">
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
        <div className="animate-bounce mt-16">
          <ChevronDown size={32} className="mx-auto text-white/60" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
