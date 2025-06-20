'use client'; // If you're using Next.js with app directory

import React, { useEffect,useState } from 'react';
import { FaGithub,FaEye } from "react-icons/fa";


const ProjectsPage = () => {

      const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('./projects.json')
      .then(res => res.json())
      .then(data => {setProjects(data); console.log("recieved json : ",data)});
      console.log("saved json : ",projects)
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); // Optional scroll reset
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-purple-600 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
           




              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className='flex justify-between'>
              {project.link.trim() ? (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="mt-2 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-all duration-300">
      <FaEye className="text-lg" />
      See Project
    </button>
  </a>
) : (
  <button
    onClick={() => alert("Link will be added soon")}
    className="mt-2 flex items-center gap-2 bg-gray-400 cursor-not-allowed px-4 py-2 rounded text-white"
  >
    <FaEye className="text-lg" />
    Link Not Available
  </button>
)}


              <a href={project.github} target="_blank" rel="noopener noreferrer">
  <button className="mt-2 flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white border border-gray-700 hover:border-white px-4 py-2 rounded transition-all duration-300">
    <FaGithub className="text-xl" />
    See on GitHub
  </button>
</a>

              </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
