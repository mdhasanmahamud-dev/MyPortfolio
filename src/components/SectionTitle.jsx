import React from "react";

const SectionTitle = ({ title, highlight, subtitle }) => {
  return (
    <div className="text-center max-w-2xl mx-auto my-12">
      {/* Subtitle */}
      {subtitle && (
        <span className="subtitle text-sm uppercase tracking-widest text-(--text-secondary) font-medium">
          {subtitle}
        </span>
      )}

      {/* Main Title */}
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white/70">
        {title}{" "}
        <span className="text-(--accent) relative">
          {highlight}
          {/* underline effect */}
          <span className="absolute  bg-(--accent) opacity-30 rounded-full"></span>
        </span>
      </h2>

      {/* Divider */}
      <div className="mt-6 flex justify-center">
        <span className="w-16 h-0.5 bg-(--accent) rounded-full"></span>
      </div>
    </div>
  );
};

export default SectionTitle;
