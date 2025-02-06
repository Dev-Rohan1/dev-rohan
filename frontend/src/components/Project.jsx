import React, { useState } from "react";

// Sample project data with images and links
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce website built with React and Node.js.",
    tags: ["Web Development", "React"],
    image:
      "https://cdn.ostad.app/public/upload/2024-03-22T07-38-38.374Z-WhatsApp%20Image%202024-03-21%20at%2019.26.21_ec2026b8.jpg", // Placeholder image URL
    sourceCode: "https://github.com/example/ecommerce",
    liveLink: "https://ecommerce-example.com",
  },
  {
    id: 2,
    title: "Mobile Task Manager",
    description:
      "A task management app for iOS and Android built with React Native.",
    tags: ["Mobile Apps", "React Native"],
    image:
      "https://cdn.ostad.app/public/upload/2024-03-22T07-39-00.403Z-WhatsApp%20Image%202024-03-21%20at%2019.26.21_7f78c021.jpg", // Placeholder image URL
    sourceCode: "https://github.com/example/task-manager",
    liveLink: "https://taskmanager-example.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects and skills.",
    tags: ["Web Development", "Design"],
    image:
      "https://cdn.ostad.app/public/upload/2024-03-19T09-53-16.105Z-original-da6fc11e43604bf3d4ae9ae5610793db.png", // Placeholder image URL
    sourceCode: "https://github.com/example/portfolio",
    liveLink: "https://portfolio-example.com",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "A collection of UI/UX designs for various applications.",
    tags: ["Design"],
    image: "https://myteacher.ng/wp-content/uploads/2024/03/myteacher-uiux.jpg", // Placeholder image URL
    sourceCode: "https://github.com/example/ui-ux-design",
    liveLink: "https://uiux-example.com",
  },
];

// Filter buttons data
const filters = [
  "All",
  "Web Development",
  "Mobile Apps",
  "Design",
  "React",
  "React Native",
];

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter projects based on the selected tag
  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.tags.includes(activeFilter));

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16 bg-purple-50 min-h-screen mt-4 rounded-2xl mb-6">
      <h1 className="text-4xl font-bold text-center mb-3">Project Showcase</h1>
      <span className="block h-1 w-25 bg-blue-600 rounded-full mx-auto mb-8"></span>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
              activeFilter === filter
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 hover:bg-blue-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Project Image */}
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg mb-4"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-600 px-3 py-1.5 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Buttons for Source Code and Live Link */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-blue-50 text-gray-700 border border-blue-300 px-4 py-2 rounded-md hover:bg-blue-100 transition-colors duration-300"
              >
                Source Code
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-gray-700 px-4 py-2 rounded-md bg-red-50 border border-red-300 hover:bg-red-100 transition-colors duration-300"
              >
                Live Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
