import React, { useState, useEffect } from "react";
import SectionHeader from "../ReusableUiComponents/SectionHeader";
import ContactInfo from "../ReusableUiComponents/ContactInfo";
import ContactForm from "../ReusableUiComponents/ContactForm";

const ContactSection = () => (
  <section className="min-h-screen py-20">
    <div className="max-w-7xl mx-auto px-6 pt-32">
      <SectionHeader
        title="Get In Touch"
        description="Let's connect and discuss opportunities, collaborations, or just have a chat about technology"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  </section>
);

export default ContactSection;
