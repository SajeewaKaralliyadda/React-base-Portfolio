import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gray-800 text-white">
      {/* Left: Image */}
      <div className="mb-8 md:mb-0 md:mr-10 flex-shrink-0">
        <img
          src="/your-about-image.png" // replace with your actual image
          alt="About Me"
          className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-blue-400 shadow-lg object-cover"
        />
      </div>

      {/* Right: Text */}
      <div className="max-w-2xl text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi! I’m <span className="text-white font-semibold">Sajeewa</span>, an
          undergraduate at the University of Moratuwa, Sri Lanka, passionate
          about technology, problem-solving, and creative design.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          I love building modern, responsive web applications using the latest
          technologies. My goal is to create digital experiences that are both
          visually appealing and highly functional.
        </p>

        <a
          href="#projects"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default About;
