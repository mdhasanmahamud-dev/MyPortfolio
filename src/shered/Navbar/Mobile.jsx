import React from "react";

const Mobile = ({ navLinks, onLinkClick  }) => {
  return (
    <div className="md:hidden bg-slate-900 border-t border-slate-700 z-50 px-6 py-4 flex flex-col gap-4">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={link.path}
          onClick={onLinkClick}
          className="text-white font-medium text-sm py-0.5 text-center border-b border-slate-600 hover:text-blue-400 transition"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default Mobile;
