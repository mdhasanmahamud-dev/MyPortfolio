import React, { useState } from "react";
import Mobile from "./Mobile";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, name: "Home", path: "#home" },
  { id: 2, name: "Skills", path: "#skills" },
  { id: 3, name: "Projects", path: "#projects" },
  { id: 4, name: "About", path: "#about" },
  { id: 5, name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-slate-100">
          H<span className="text-blue-500">.</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 px-6 py-2 rounded-full bg-slate-800 border border-slate-700 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.path}
              className="text-slate-300 font-medium transition hover:text-slate-100"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right section: Resume + Mobile menu icon */}
        <div className="flex items-center gap-4">
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="hidden md:inline-block px-6 py-2 rounded-full bg-blue-600/90 text-white font-medium shadow-md hover:bg-blue-500 transition"
          >
            Resume
          </a>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden p-2 cursor-pointer bg-slate-800 text-white transition"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && <Mobile navLinks={navLinks} onLinkClick={() => setOpenMenu(false)}/>}
    </header>
  );
};

export default Navbar;
