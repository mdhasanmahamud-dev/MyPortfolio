import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import SocialLinks from "../../../components/socialLinks";
import banner from "../../../assets/Banner.jpg";
const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[70vh] sm:min-h-[75vh] md:min-h-[70vh] flex items-center justify-center bg-linear-to-b from-slate-900 to-slate-800 px-6"
    >
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 px-6">
        {/* Left Content */}
        <div className="flex-2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-100 mb-3">
            Hi, I'm <span className="text-blue-500">Hasan</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium mb-4">
            Full Stack Web Developer
          </p>
          <p className="text-slate-400 mb-6 max-w-md md:max-w-lg mx-auto md:mx-0">
            I create responsive and modern web applications using React,
            Tailwind CSS, and other modern technologies. I enjoy coding
            interactive and user-friendly interfaces.
          </p>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="
            inline-flex items-center gap-2 px-6 py-3
            border border-blue-500 text-blue-500
            rounded-r-full rounded-l-sm
            font-poppins font-medium
            hover:bg-blue-900 hover:text-white
            transition-all duration-300
            mb-4 md:mb-0
          "
          >
            Download Resume
            <FaArrowRightLong className="ml-1 text-lg" />
          </a>

          {/* Social Links */}
          <SocialLinks />
        </div>

        {/* Right Content (Profile Photo) */}
        {/* Right Content (Profile Photo) */}
        <div className="flex items-center justify-center mt-7 md:mt-0">
          <img
            className="
            w-full max-w-sm sm:max-w-md md:max-w-md
            rounded-3xl
            object-cover
            transition-transform duration-500
            hover:scale-105"
            src={banner}
            alt="Hasan Banner"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
