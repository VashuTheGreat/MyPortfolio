import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Section - Logo */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-purple-500">Vashu</h2>
        </div>

        {/* Center Section - Links */}
        <ul className="flex space-x-6 text-gray-400">
          <Link href='/'><li className="hover:text-purple-400 cursor-pointer">Home</li></Link>
          <Link href='/about'><li className="hover:text-purple-400 cursor-pointer">About</li></Link>
          <Link href='/contact'><li className="hover:text-purple-400 cursor-pointer">Contact</li></Link>
          
        </ul>

        {/* Right Section - Social Links */}
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-purple-400">
            <i className="fab fa-github text-2xl"></i>
          </Link>
          <Link href="#" className="hover:text-purple-400">
            <i className="fab fa-linkedin text-2xl"></i>
          </Link>
          <Link href="#" className="hover:text-purple-400">
            <i className="fab fa-twitter text-2xl"></i>
          </Link>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-500 text-sm mt-4">
        © {new Date().getFullYear()} Vashu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
