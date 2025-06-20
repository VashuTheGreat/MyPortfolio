"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-blue-900 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-evenly max-md:justify-between items-center">
        <Link href="/">
<div className="logo text-xl md:text-2xl font-bold">
  <span className="text-white">Vashu&apos;s</span>{' '}
  <span className="text-yellow-400">Portfolio</span>
</div>

        </Link>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`md:flex space-x-6 text-white hidden`}> 
          <li className="cursor-pointer font-semibold hover:text-yellow-400 hover:text-2xl text-red-500 transition-all duration-200">
    <Link href="/">Home</Link>
  </li>
  <li className="cursor-pointer font-semibold hover:text-yellow-400 hover:text-2xl transition-all duration-200">
    <Link href="/about">About</Link>
  </li>
  <li className="cursor-pointer font-semibold hover:text-yellow-400 hover:text-2xl transition-all duration-200">
    <Link href="/projects"     className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent hover:from-yellow-300 hover:via-orange-400 hover:to-red-500"
>Projects</Link>
  </li>
  <li className="cursor-pointer font-semibold hover:text-yellow-400 hover:text-2xl text-red-500 transition-all duration-200">
    <Link href="/contact">Contact Me</Link>
  </li>
        </ul>
      </div>
      
      {isOpen && (
        <ul className="md:hidden bg-gray-800 text-white p-4 flex flex-col space-y-4 items-center">
           <li className="cursor-pointer font-semibold hover:text-yellow-400 hover:text-2xl text-red-500 transition-all duration-200">
    <Link href="/">Home</Link>
  </li>
  <li className="cursor-pointer font-semibold hover:text-yellow-400 hover:text-2xl transition-all duration-200">
    <Link href="/about">About</Link>
  </li>
  <li className="cursor-pointer font-semibold hover:text-yellow-400 hover:text-2xl transition-all duration-200">
    <Link href="/projects"     className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent hover:from-yellow-300 hover:via-orange-400 hover:to-red-500"
>Projects</Link>
  </li>
  <li className="cursor-pointer font-semibold hover:text-yellow-400 hover:text-2xl text-red-500 transition-all duration-200">
    <Link href="/contact">Contact Me</Link>
  </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
