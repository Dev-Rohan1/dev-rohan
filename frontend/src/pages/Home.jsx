import React from "react";
import Hero from "../components/Hero";
import ProjectShowcase from "../components/Project";
import About from "../components/About";
import CounterSection from "../components/Counter";
import TeamSection from "../components/Team";
import BlogSection from "../components/Blogs";
import ContactSection from "../components/Contact";
import ServicesSection from "../components/Service";
import SkillSection from "../components/Skill";
import EducationSection from "../components/Education";

const Home = () => {
  return (
    <>
      <Hero />
      <CounterSection />
      <About />
      <SkillSection />
      <EducationSection />
      <ServicesSection />
      <TeamSection />
      <ProjectShowcase />
      <BlogSection />
      <ContactSection />
    </>
  );
};

export default Home;
