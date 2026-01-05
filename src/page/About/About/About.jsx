import React from "react";
import {
  Terminal,
  Code2,
  Sparkles,
  Music,
  Gamepad2,
  Palette,
} from "lucide-react";
import InfoCard from "../InfoCard/InfoCard";
import HobbyCard from "../HobbyCard/HobbyCard";

const About = () => {
  return (
    <section
      id="about"
      className="pt-24 pb-10 px-6 md:px-12 bg-(--bg-main) text-(--text-primary) relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Side: Profile Image & Experience Badge */}
          <div className="lg:col-span-5 relative group">
            <div className="relative z-10 w-full aspect-4/5 rounded-2xl overflow-hidden border border-(--border-color) bg-(--bg-secondary) shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
              <img
                src={"https://i.ibb.co.com/CCVNHt4/h.jpg"}
                alt="Profile"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--bg-secondary) via-transparent to-transparent opacity-60"></div>
            </div>
            {/* Decorative Border */}
            <div className="absolute -inset-4 border border-(--accent) opacity-20 rounded-2xl -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 z-20 bg-(--bg-secondary) border border-(--border-color) p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-(--accent) blur-lg opacity-40 animate-pulse"></div>
                  <div className="relative p-3 bg-(--accent) rounded-xl">
                    <Terminal className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-(--text-secondary) uppercase tracking-[0.2em] font-bold">
                    Journey Started
                  </p>
                  <p className="font-bold text-lg text-(--text-secondary) leading-none mt-1">
                    Beginner - 0 Years Exp.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: About Content */}
          <div className="lg:col-span-7 mt-12 lg:mt-0">
            <div className="space-y-6">
              {/* Section Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--accent)/10 border border-(--accent)/20 text-(--accent) text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--accent) opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-(--accent)"></span>
                </span>
                About Me
              </div>

              {/* Heading */}
              <h2 className="text-4xl text-white md:text-6xl font-black tracking-tight leading-[1.1]">
                Crafting Digital <br />
                <span className="text-(--accent)">Experiences</span>
              </h2>

              {/* Quote / Intro */}
              <p className="text-(--text-secondary) text-lg leading-relaxed max-w-2xl font-normal italic border-l-2 border-[var(--border-color)] pl-6">
                "As a web developer, my goal is to solve real-world problems
                through clean and efficient code. I believe technology combined
                with elegant design creates meaningful user experiences."
              </p>

              <InfoCard />
              <HobbyCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
