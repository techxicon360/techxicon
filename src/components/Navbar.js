'use client';
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  
  { name: 'About', href: '#about' },
  { name: 'Services', href: '/services' },
  { name: "FAQ's", href: "#faq's" },
  { name: 'Contact', href: '#contact' }
];

const serviceDropdown = [
  { name: 'Visual Designing', href: '/visual-designing' },
  { name: 'App Development', href: '/development' },
   { name: 'Software Solutions', href: '/software-development' },
   { name: 'E-commerce Solutions', href: '/ecommerce' },
   { name: 'Digital Marketing', href: '/digital-marketing' },
];

const socialLinks = ['instagram', 'facebook', 'linkedin'];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full h-20 z-50 shadow-lg bg-transparent lg:bg-white"
    >
      <div className="container mx-auto flex justify-between items-center h-full px-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logoo.png"
            alt="logo"
            width={96}
            height={96}
            className="object-cover"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex gap-12 text-blue-800 font-semibold relative">
          {navLinks.map((link, i) =>
            link.name === 'Services' ? (
              <li
                key={i}
                className="relative group"
                onMouseEnter={() => setServiceOpen(true)}
                onMouseLeave={() => setServiceOpen(false)}
              >
                <div className="flex items-center gap-1 cursor-pointer transition-transform duration-300 hover:scale-105">
                  <Link href={link.href}>{link.name}</Link>
                  <i className="uil uil-angle-down text-sm mt-1"></i>
                </div>

                {/* Dropdown */}
                <AnimatePresence>
                  {serviceOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full mt-2 bg-white shadow-md rounded-lg py-2 w-48 text-sm"
                    >
                      {serviceDropdown.map((item, index) => (
                        <li key={index}>
                          <Link
                            href={item.href}
                            className="block px-4 py-2 text-blue-800 hover:bg-blue-100 transition-colors"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <motion.li
                key={i}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link href={link.href} className="transition-colors duration-300">
                  {link.name}
                </Link>
              </motion.li>
            )
          )}
        </ul>

        {/* Desktop Social Icons */}
        <ul className="hidden lg:flex gap-3">
          {socialLinks.map((platform, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.15, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a
                href={`https://${platform}.com`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 grid place-items-center text-white bg-gradient-to-b from-[#5c54d1] to-[#4a76c9] rounded-lg hover:shadow-md"
              >
                <i className={`uil uil-${platform}`}></i>
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-3xl text-blue-800 transition-transform hover:scale-110"
          >
            <i className={`uil ${navOpen ? 'uil-multiply' : 'uil-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      <AnimatePresence>
        {navOpen && (
          <motion.ul
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute top-20 right-0 w-64 bg-[#003347] text-white shadow-lg flex flex-col lg:hidden z-40"
          >
            {navLinks.map((link, i) => {
              if (link.name === 'Services') {
                return (
                  <React.Fragment key={i}>
                    <motion.li
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="h-16 flex items-center justify-between px-6 border-b border-white/10 hover:bg-[#003347]/80 cursor-pointer"
                      onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                    >
                      <span>{link.name}</span>
                      <i className="uil uil-angle-down"></i>
                    </motion.li>
                    <AnimatePresence>
                      {mobileServiceOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col bg-[#002636]"
                        >
                          {serviceDropdown.map((item, index) => (
                            <li
                              key={index}
                              className="px-8 py-3 border-b border-white/10 hover:bg-[#003347]/80"
                            >
                              <Link href={item.href}>{item.name}</Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                );
              }

              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="h-16 flex items-center px-6 border-b border-white/10 hover:bg-[#003347]/80"
                >
                  <Link href={link.href}>{link.name}</Link>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
