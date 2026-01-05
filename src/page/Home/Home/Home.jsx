import React from "react";
import Hero from "../Hero/Hero";
import About from "../../About/About/About";
import Skills from "../../Skills/Skills/Skills";
import Educational from "../../Educational/Educational";
import Contact from "../../Contact/Contact/Contact";
import Projects from "../../Projects/Projects/Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Skills />
      <Projects/>
      <Educational/>
      <Contact/>
    </div>
  );
};

export default Home;
