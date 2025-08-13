import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-20 bg-gray-900 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="w-full h-full bg-gradient-to-tr from-blue-800 via-gray-900 to-black opacity-40 blur-3xl animate-pulse"></div>
      </div>

      {/* Text Section */}
      <div className="z-10 text-center md:text-left max-w-lg space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hello, I'm{" "}
          <span className="text-blue-400 drop-shadow-lg">Sajeewa</span>
        </h1>

        <h2 className="text-lg md:text-xl font-medium">
          Undergraduate at University of Moratuwa, Sri Lanka.
          <br />
          <span className="text-sm text-gray-400">
            Faculty of Information Technology
          </span>
        </h2>

        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition">
          Get My CV <HiArrowNarrowRight className="text-xl" />
        </a>
      </div>
      {/* Profile Image */}
      <div className="z-10 mb-10 md:mb-0">
        <img
          src="../../src/assets/img/profilepic.jpg" // replace with actual profile image
          alt="Sajeewa's Profile"
          className="w-60 h-60 md:w-94 md:h-94 rounded-full border-4 border-blue-400 shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Home;
