import React, { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 shadow-md fixed w-full top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo / Name */}
        <a href="#home" className="text-xl font-bold tracking-wide">
          Sajeewa's Portfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Projects", "Skills", "Education", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-colors">
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Right: Theme toggle + Profile */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition">
            ☀️
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-2">
          {["Home", "About", "Projects", "Skills", "Education", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
                onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
