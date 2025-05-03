'use client'
import React, { useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="w-full h-screen ">
      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full h-20 grid place-items-center z-50 transition-all ">
        <div className="container mx-auto flex justify-between items-center h-full px-6">
          {/* LOGO */}
          <a href="/" className="w-12">
            <img
              src="/logo.png"
              alt="nav logo"
              className="object-cover object-center"
            />
          </a>

          {/* NAV LINKS */}
          <ul className="hidden lg:flex gap-16 text-white">
            <li><a href="#" className="hover:text-[#ff7b02] transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-[#ff7b02] transition-colors">About</a></li>
            <li><a href="#" className="hover:text-[#ff7b02] transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-[#ff7b02] transition-colors">Resources</a></li>
            <li><a href="#" className="hover:text-[#ff7b02] transition-colors">Contact</a></li>
          </ul>

          {/* SOCIAL LINKS */}
          <ul className="hidden lg:flex gap-4">
            {["instagram", "twitter", "youtube"].map((platform, index) => (
              <li key={index}>
                <a
                  href={`https://${platform}.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 grid place-items-center text-[#003347] bg-gradient-to-b from-[#e5a55d] to-[#ff7b02] rounded-lg hover:shadow-lg"
                >
                  <i className={`uil uil-${platform}`}></i>
                </a>
              </li>
            ))}
          </ul>

          {/* TOGGLE BUTTONS */}
          <button
            className={`block lg:hidden text-3xl text-white ${navOpen ? "hidden" : "block"}`}
            onClick={() => setNavOpen(true)}
          >
            <i className="uil uil-bars"></i>
          </button>
          <button
            className={`block lg:hidden text-3xl text-white ${navOpen ? "block" : "hidden"}`}
            onClick={() => setNavOpen(false)}
          >
            <i className="uil uil-multiply"></i>
          </button>
        </div>
      </nav>

      {/* MOBILE NAV LINKS */}
      {navOpen && (
        <ul className="absolute top-[4rem] right-0 text-white flex-col lg:hidden w-48 shadow-lg z-40">
          {["Home", "About", "Services", "Resources", "Contact"].map((item, i) => (
            <li
              key={item}
              className={`h-20 bg-[#003347] hover:bg-[#003347]/80 shadow-[-3rem_3rem_3rem_rgba(0,0,0,0.7)] animate-navAnimation`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <a href="#" className="flex items-center h-full px-6">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
