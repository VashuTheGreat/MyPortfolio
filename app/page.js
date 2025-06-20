"use client";
import Image from 'next/image';
import React, { useEffect, useRef ,useState} from "react";
import dynamic from "next/dynamic";
import Typed from "typed.js";
import Link from "next/link";
import Head from 'next/head';

<Head>
  <link href="https://fonts.googleapis.com/css2?family=Martel+Sans&display=swap" rel="stylesheet" />
</Head>

const Page = () => {



   const [skills, setskills] = useState([]);
  
    useEffect(() => {
      fetch('./skills.json')
        .then(res => res.json())
        .then(data => setskills(data));
    }, []);
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Software Developer", "Web Devloper",'Full Stack Developer','AI & ML Engineer','App Developer','Data Scientist'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });

      return () => typed.destroy();
    }
  }, []);



  

  const experiences = [
    {
      company: `Ajay Kumar Garg Engineering College (AKGEC)`,
      role: "B.Tech CSE (AI & ML)",
      duration: "2023 - Present",
      tasks: [
  `Built Vinsta - A full-fledged Instagram clone using React Native, Expo, sql and nodejs.`,
  `Developed Vtron - a custom Android framework for running HTML-based apps with native features like file access and vibration.`,
  `Built a working Spotify clone that plays trending songs using the JioSaavn and YouTube APIs.`,
  `Developed a file transfer app (Vshare) like ShareIt using Node.js and Socket.io.`,
  `Trained a chatbot using NLP and neural networks with the DailyDialog dataset and GPT-2 fine-tuning.`,
  `Made a Netflix-style homepage with animated hero section and dynamic Tailwind UI.`,
  `Built my personal portfolio with TailwindCSS and dynamic sections.`,
  `Created 'Get Me a Chai' – a complete web app with full login handling and end-to-end frontend/backend development.`,
  `Developed 'VashuCodersStyle' – a full-stack e-commerce web application.`,
  `Built a terminal-based machine learning AI agent to classify dog and cat images.`,
  `Created an NLP model for intent classification and smart responses.`,
  `Built Votify – a full-featured Spotify clone APK using React Native and Expo.`,
  `Developed a stock market predictor using neural networks for future trend analysis.`,
  `...and many more experimental and real-world AI and full-stack projects.`
]

    }
  ];

  return (
    <div className="bg-black text-white">
      <div className="section_1 relative flex flex-col md:flex-row h-[calc(100vh-100px)] bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="left w-full md:w-1/2 h-full text-white p-4 font-bold text-2xl md:text-4xl flex flex-col justify-center text-center">
          <div>Hi, My name is <span className="text-yellow-400">Vashu</span></div>
          <div>
            and I am a <span
              ref={typedRef}
              className="text-yellow-400"
              style={{ fontFamily: '"Martel Sans", sans-serif', fontWeight: 200 }}>
              &nbsp;
            </span>
          </div>
          <div className="buttons flex flex-col md:flex-row gap-2 justify-center text-center align-middle mt-4">
            <Link href='/contact' target="_blank">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Hire Me</button>
            </Link>
            <a href='/Vashu_Resume.pdf' download>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Download CV
              </button>
            </a>
          </div>
          <Link href="https://www.linkedin.com/in/vansh-sharma-074698331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <button className="github flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg border border-gray-700 hover:text-blue-400 hover:border-blue-400 transition-all duration-300 mt-4 mx-auto">
              <Image src="/LinkedIn.webp" alt="LinkedIN" width={16} height={16} className="w-4 h-4" />
              View LinkedIn Profile
            </button>
          </Link>
          <Link href="https://github.com/VashuTheGreat" target="_blank">
            <button className="github flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg border border-gray-700 hover:text-blue-400 hover:border-blue-400 transition-all duration-300 mt-4 mx-auto">
              <Image src="/github.png" alt="LinkedIN" width={16} height={16} className="w-8 h-8 invert" />
              View github Profile
            </button>
          </Link>
        </div>

        <div className="right w-full md:w-1/2 h-full flex justify-center items-center">
          <Image
            src="/poimg-.png"
            alt="Developer"
            width={800}
            height={600}
            className="w-3/5 md:w-3/5 object-cover mx-auto my-6 md:my-12"
          />
        </div>

        <hr className="bg-[#9c97f1] border-0 h-0.5 w-9/10 bottom-0 absolute left-1/2 transform -translate-x-1/2" />
      </div>
<div className="flex flex-col items-center justify-center px-4 py-12">


  
<Image src="/work.png" alt="Work" width={100} height={100} />
<h2 className="text-3xl font-bold mb-6">IT SKILLS</h2>
<hr className="bg-white border-0 h-[2px] w-3/4 mb-8" />

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-center align-middle items-center">
  {skills.map((job, index) => (
    <div
      key={index}
      className="relative bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-purple-500 hover:scale-105 transition-transform duration-300"
    >
      <Image
        src={job.image}
        alt={job.name}
        width={48}
        height={48}
        className="mb-4 mx-auto"
      />
      <h3 className="text-xl font-semibold text-purple-400">{job.name}</h3>
      <span className="text-gray-400 text-sm">{job.position}</span>
      <p className="text-gray-300 mt-2 text-sm">{job.description}</p>
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

export default dynamic(() => Promise.resolve(Page), { ssr: false });