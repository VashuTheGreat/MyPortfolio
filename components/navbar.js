import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-blue-900 p-4 sticky top-0 z-50">
      <div className="flex justify-around items-center">
        <Link href={"/"}><div className="logo text-white text-2xl font-bold">Vashu'sPortfolio</div></Link>
        <ul className="flex space-x-6 text-white">
          <Link href={"/"}><li>Home</li></Link>
          <Link href={"/about"}><li>About</li></Link>
          <Link href={"/services"}><li>Services</li></Link>
          <Link href={"/project"}><li>Project</li></Link>
          <Link href={"/contact"}><li>Contact Me</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
