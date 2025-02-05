// src/CounterSection.js
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  const targetYears = 1.5;
  const targetProjects = 250;
  const targetClients = 150;

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const increment = (target, setState) => {
      const step = (target / duration) * 10;
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          clearInterval(timer);
          setState(target);
        } else {
          setState(Math.ceil(current));
        }
      }, 10);
    };

    increment(targetYears, setYears);
    increment(targetProjects, setProjects);
    increment(targetClients, setClients);
  }, []);

  return (
    <section className="bg-purple-50 py-16 rounded-2xl mb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-20">
          {/* Years of Experience */}
          <div className="text-center">
            <span className="text-5xl font-bold text-blue-600">{years}</span>
            <span className="text-2xl text-gray-600">+</span>
            <p className="text-lg text-gray-600 mt-2">Years of Experience</p>
          </div>

          {/* Projects Completed */}
          <div className="text-center">
            <span className="text-5xl font-bold text-blue-600">{projects}</span>
            <span className="text-2xl text-gray-600">+</span>
            <p className="text-lg text-gray-600 mt-2">Projects Completed</p>
          </div>

          {/* Satisfied Clients */}
          <div className="text-center">
            <span className="text-5xl font-bold text-blue-600">{clients}</span>
            <span className="text-2xl text-gray-600">+</span>
            <p className="text-lg text-gray-600 mt-2">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
