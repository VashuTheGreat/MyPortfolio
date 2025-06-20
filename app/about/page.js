import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-yellow-400">About Me</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Hi, I&apos;m <span className="text-yellow-400">Vashu</span> — a passionate full-stack developer, data science enthusiast, and creative builder. I love solving real-world problems through technology. From developing Android apps and full-stack websites , custom programming languages, operating systems, and AI chatbots — I explore it all with curiosity and code!
        </p>
      </div>

      <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <Image
          src="/Developer.png"
          alt="Developer"
          width={500}
          height={500}
          className="mx-auto rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold text-purple-400">Who am I?</h2>
          <p className="text-gray-300 mt-2">
            I&apos;m currently a B.Tech CSE (AI & ML) student, exploring everything from full-stack development and data science . I enjoy building impactful projects like Spotify clones, food delivery systems, offline AI chatbots, Hindi-based compilers, and custom frameworks for Android.
          </p>
          <div className="mt-4 flex gap-4">
            <Link href="/contact">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Contact Me
              </button>
            </Link>
            <a href="/Vashu_Resume.pdf" download>
              <button className="bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-400 hover:border-transparent rounded">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Education & Skills Section */}
      <div className="container mx-auto px-6 py-12 bg-gray-800 rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl font-bold text-yellow-400 text-center">Education & Skills</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Education */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-400">Education</h3>
            <ul className="mt-3 text-gray-300 list-disc list-inside">
              <li className="font-extrabold text-2xl text-gray-300">B.Tech in Computer Science (AI & ML)</li>
              <li>Current Semester: 2nd | Passionate about Data Science & AI</li>
            </ul>
          </div>

          {/* Skills & Achievements */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-400">Technical Skills</h3>
            <ul className="mt-3 text-gray-300 list-disc list-inside">
              <li>Full-Stack Web & App Development</li>
              <li>Machine Learning & Data Science</li>
              <li>Custom OS & Language Design</li>
              <li>Backend: Node.js, Express, MongoDB</li>
              <li>Frontend: React, Tailwind, Next.js</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-400 mt-6">Achievements</h3>
            <ul className="mt-3 text-gray-300 list-disc list-inside">
              <li>Developed Vtron: Android Framework like Electron</li>
              <li>Created VashuScript: Hindi-style language compiler</li>
              <li>Built Swiggy & Spotify clones</li>
              <li>Working on own AI-powered chatbot</li>
            </ul>
          </div>
        </div>

        {/* Interests Section */}
        <div className="mt-8 bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-400 text-center mb-6">Hobbies & Specializations</h3>
          <div className="flex flex-col md:flex-row justify-evenly items-start gap-8">
            {/* Hobbies */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2 underline">Hobbies</h3>
              <ul className="text-gray-300 list-disc list-inside space-y-1">
                <li>Chess</li>
                <li>Cricket</li>
                <li>Gaming</li>
                <li>Code Experiments</li>
                <li>Tech Blogging</li>
              </ul>
            </div>

            {/* Specializations */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2 underline">Specializations</h3>
              <ul className="text-gray-300 list-disc list-inside space-y-1">
                <li>Data Science & Machine Learning</li>
                <li>Mobile App Development</li>
                <li>Web Dev (MERN Stack)</li>
                <li>Custom OS / Compilers</li>
                <li>AI/Chatbot Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
