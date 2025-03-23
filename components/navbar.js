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
          <div className="logo text-white text-xl md:text-2xl font-bold">Chhavi's Portfolio</div>
        </Link>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`md:flex space-x-6 text-white hidden`}> 
          <Link href="/">
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link href="/about">
            <li className="cursor-pointer">About</li>
          </Link>
          <Link href="/contact">
            <li className="cursor-pointer">Contact Me</li>
          </Link>
        </ul>
      </div>
      
      {isOpen && (
        <ul className="md:hidden bg-gray-800 text-white p-4 flex flex-col space-y-4 items-center">
          <Link href="/">
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link href="/about">
            <li className="cursor-pointer">About</li>
          </Link>
          <Link href="/contact">
            <li className="cursor-pointer">Contact Me</li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
