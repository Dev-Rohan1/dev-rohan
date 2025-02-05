// src/components/EducationSection.js
import React from "react";
import { FaGraduationCap, FaSchool, FaCertificate } from "react-icons/fa";

const EducationSection = () => {
  const education = [
    {
      id: 1,
      degree: "Diploma in Computer Science & Technology",
      institution: "Institute of Example",
      year: "Running",
      description:
        "Currently pursuing a diploma in Computer Science & Technology with a focus on software development and data structures.",
      icon: <FaGraduationCap className="text-blue-500 text-2xl" />,
    },
    {
      id: 2,
      degree: "High School",
      institution: "Example High School",
      year: "2016 - 2021",
      description:
        "Completed high school with a focus on mathematics and science.",
      icon: <FaSchool className="text-blue-500 text-2xl" />,
    },
    {
      id: 3,
      degree: "Certification in Full-Stack Development",
      institution: "Ostad Platform",
      year: "2024 - 2025",
      description:
        "Enrolled in a comprehensive course on full-stack development, covering React, Node.js, and MongoDB.",
      icon: <FaCertificate className="text-blue-500 text-2xl" />,
    },
  ];

  return (
    <section className="bg-purple-50 py-12 px-4 sm:px-8 lg:px-16 rounded-2xl mb-6">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-3">
          Education
        </h2>
        <span className="block h-1 w-25 bg-blue-600 rounded-full mx-auto mb-8"></span>
        <div className="space-y-8 relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-500"></div>

          {education.map((edu, index) => (
            <div key={edu.id} className="relative pl-12">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 h-4 w-4 bg-blue-500 rounded-full"></div>

              {/* Education Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <span>{edu.icon}</span>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                </div>
                <p className="text-gray-600 font-medium mb-2">
                  {edu.institution} | {edu.year}
                </p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
