// src/components/SkillsSection.js
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const SkillsSection = () => {
  const skills = [
    {
      id: 1,
      name: "HTML",
      level: 95,
      icon: <FaHtml5 className="text-orange-500" />,
    },
    {
      id: 2,
      name: "CSS",
      level: 90,
      icon: <FaCss3Alt className="text-blue-500" />,
    },
    {
      id: 3,
      name: "JavaScript",
      level: 85,
      icon: <FaJs className="text-yellow-500" />,
    },
    {
      id: 4,
      name: "React",
      level: 80,
      icon: <FaReact className="text-blue-400" />,
    },
    {
      id: 5,
      name: "Tailwind CSS",
      level: 90,
      icon: <SiTailwindcss className="text-teal-500" />,
    },
    {
      id: 6,
      name: "Node.js",
      level: 75,
      icon: <FaNodeJs className="text-green-500" />,
    },
    {
      id: 7,
      name: "Express.js",
      level: 70,
      icon: <SiExpress className="text-gray-800" />,
    },
    {
      id: 8,
      name: "MongoDB",
      level: 65,
      icon: <SiMongodb className="text-green-600" />,
    },
  ];

  return (
    <section className="bg-purple-50 py-12 px-4 sm:px-8 lg:px-16 rounded-2xl mb-6">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-3">
          My Skills
        </h2>
        <span className="block h-1 w-25 bg-blue-600 rounded-full mx-auto mb-8"></span>
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.id} className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-lg font-semibold">{skill.name}</span>
                </div>
                <span className="text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
