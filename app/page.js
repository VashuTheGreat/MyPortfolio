"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Typed from "typed.js";

<style>
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Martel+Sans:wght@200;300;400;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>

const Page = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Web Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        showCursor: true, // Enable blinking cursor
        cursorChar: "|", // Set custom cursor symbol
      });

      return () => typed.destroy(); // Clean up on unmount
    }
  }, []);

  return (
    <div>
      <div className="section_1 relative flex h-[calc(100vh-100px)] bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="left w-1/2 h-full text-white p-4 font-bold text-4xl flex flex-col justify-center text-center">
          <div>Hi, My name is <span className="text-yellow-400">Vashu</span></div>
          <div>
  and I am a <span 
    ref={typedRef} 
    className="text-yellow-400" 
    style={{ fontFamily: '"Martel Sans", sans-serif', fontWeight: 200 }}
  >
    &nbsp;
  </span>
</div>
          <div className="buttons flex gap-2 justify-center text-center align-middle">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Hire Me</button>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Download CV</button>
          </div>
          <button className="github flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg border border-gray-700 hover:text-blue-400 hover:border-blue-400 transition-all duration-300 mt-4 mx-auto">
            <img src="github.png" alt="GitHub" className="w-4 h-4" />
            View GitHub
          </button>

        </div>
        <div className="right w-1/2 h-full flex justify-center items-center">
          <img src="/Developer.png" alt="Developer" className="lg:w-4/5 w-full object-cover mx-auto my-12" />
        </div>
        <hr className="bg-[#9c97f1;] border-0 h-0.5 w-9/10 bottom-0 absolute left-1/2 transform -translate-x-1/2" />

      </div>
      <div className="Section_2 bg-black min-h-[50vh] text-white flex flex-col items-center justify-center px-6 py-12">
  {/* Section Heading */}
  <p className="text-lg text-gray-500">What I have done so far</p>
  <img src='Work.png'className="w-[101px]" alt='work'/>
  <h2 className="text-3xl font-bold mb-6">Work Experience</h2>

  {/* Centered Horizontal Line */}
  <hr className="bg-white border-0 h-[2px] w-3/4 mb-8" />

  {/* Work Experience Container */}
  <div className="work grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
    {[
      { title: "HTML Developer", company: "Pinterest", duration: "2010-2012",icon: "html.png" },
      { title: "You Tube", company: "Google", duration: "2012-2014",icon: "yt.png" },
      { title: "React Developer", company: "Facebook", duration: "2014-2016",icon: "react.png" },
      { title: "Full Stack Developer", company: "Amazon", duration: "2016-2018",icon: "fullstackdeveloper.webp" },
      { title: "Software Engineer", company: "Microsoft", duration: "2018-Present",icon: "software.png" }
    ].map((job, index) => (
      <div key={index} className="relative bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
        {/* Timeline Vertical Line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-purple-500 h-12"></div>
        <img src={job.icon} alt={job.title} className="w-12 h-12 mb-4 mx-auto" />

        {/* Job Info */}
        <h3 className="text-xl font-semibold text-purple-400">{job.title}</h3>
        <span className="text-gray-400">{job.company} ({job.duration})</span>
        <p className="text-gray-300 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ratione.
        </p>
      </div>
    ))}
  </div>
</div>



    </div>
  );
};

// Ensure this component only renders on the client side
export default dynamic(() => Promise.resolve(Page), { ssr: false });
