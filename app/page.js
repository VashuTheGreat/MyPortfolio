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
        strings: ["Company Secretary", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        showCursor: true, // Enable blinking cursor
        cursorChar: "|", // Set custom cursor symbol
      });

      return () => typed.destroy(); // Clean up on unmount
    }
  }, []);



  const experiences = [
    {
      company: "Aadya Multi Professional LLP [AMPLLP]",
      role: "CS Management Trainee",
      duration: "July 2023",
      tasks: [
        "Handled Secretarial Compliances including Private and Public Company Compliances.",
        "Handled LLP related Compliances including Filing of Form 8, Form 11, Form 3 and Form 4.",
        "Responsible for Incorporation of an LLP.",
        "Handled Incorporation Process of a Private Company.",
        "Handled assignment related to Change in Contribution of LLP.",
        "Handled Complete annual filing process and MGT-8.",
        "Handled Name Change Assignment of a Private Company.",
        "Preparation and filing of Various ROC Forms like MGT-14, DIR-12, INC-22, GNL-1.",
        "Handled CSR Related Compliances and attended various Training sessions on CSR.",
        "Handled assignments with respect to changes in Share capital including Buyback, Right Issue, Preferential Allotment and Private Placement.",
        "Handled Alteration of MOA and AOA.",
        "Handled Director and Auditor related Compliances.",
        "Handled Charge Related Compliances."
      ]
    }
  ];

  return (
    <div>
      <div className="section_1 relative flex flex-col md:flex-row h-[calc(100vh-100px)] bg-gradient-to-r from-gray-800 to-gray-900">
  <div className="left w-full md:w-1/2 h-full text-white p-4 font-bold text-2xl md:text-4xl flex flex-col justify-center text-center">
    <div>Hi, My name is <span className="text-yellow-400">Chhavi</span></div>
    <div>
      and I am a <span 
        ref={typedRef} 
        className="text-yellow-400" 
        style={{ fontFamily: '"Martel Sans", sans-serif', fontWeight: 200 }}
      >
        &nbsp;
      </span>
    </div>
    <div className="buttons flex flex-col md:flex-row gap-2 justify-center text-center align-middle mt-4">
      <a href='/contact' target="_blank">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Hire Me</button>
      </a>
      <a href='/chhavi cv.pdf' download >
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Download CV
      </button>
      </a>
    </div>
    <a href="https://www.linkedin.com/in/chhavi-sharma-b2222122a" target="_blank">
      <button className="github flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg border border-gray-700 hover:text-blue-400 hover:border-blue-400 transition-all duration-300 mt-4 mx-auto">
        <img src="LinkedIn.webp" alt="LinkedIN" className="w-4 h-4" />
        View LinkedIn Profile
      </button>
    </a>
  </div>

  <div className="right w-full md:w-1/2 h-full flex justify-center items-center">
    <img src="/Developer.png" alt="Developer" className="w-4/5 md:w-3/5 object-cover mx-auto my-6 md:my-12" />
  </div>

  <hr className="bg-[#9c97f1;] border-0 h-0.5 w-9/10 bottom-0 absolute left-1/2 transform -translate-x-1/2" />
</div>

      <div className="Section_2 bg-black min-h-[50vh] text-white flex flex-col items-center justify-center px-6 py-12">
  {/* Section Heading */}
  <p className="text-lg text-gray-500">What I have done so far</p>
  <img src='Work.png'className="w-[101px]" alt='work'/>
  <h2 className="text-3xl font-bold mb-6">IT SKILS</h2>

  {/* Centered Horizontal Line */}
  <hr className="bg-white border-0 h-[2px] w-3/4 mb-8" />

  {/* Work Experience Container */}
  <div className="work grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
    {[
      { title: "MS Word", company: "Pinterest", duration: "2020-Present",icon: "msword.webp" },
      { title: "MS Excel", company: "Facebook", duration: "2020-Present",icon: "msexcel.webp" },
      { title: "MS Power point", company: "Amazon", duration: "2020-Present",icon: "mspowerpoint.webp" },
      { title: "Tally", company: "Microsoft", duration: "2020-Present",icon: "tally.webp" },
      { title: "MCA-21", company: "Microsoft", duration: "2022-Present",icon: "mca.webp" },
      { title: "NCLT Portal", company: "Microsoft", duration: "2023-Present",icon: "nclt.webp" }
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

<div className="work-experience bg-gradient-to-r from-black to-gray-900 text-white py-12 px-6">
      <div className="text-center mb-8 relative">
        <p className="text-lg text-gray-500">Where I have worked</p>
        <h2 className="text-3xl font-bold">WORK EXPERIENCE</h2>
        <hr className="bg-white border-0 h-[2px] w-3/4 mx-auto mb-8" />

      </div>

      <div className="max-w-5xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
        {experiences.map((exp, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-blue-400">{exp.company}</h3>
            <p className="text-gray-400">{exp.role} ({exp.duration})</p>
            <ul className="mt-4 list-disc list-inside text-gray-300">
              {exp.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>


    </div>
  );
};

// Ensure this component only renders on the client side
export default dynamic(() => Promise.resolve(Page), { ssr: false });
