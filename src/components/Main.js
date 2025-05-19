'use client';
import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react"; 
import { loadFull } from "tsparticles";      

const Main = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-blue-700 flex items-center justify-center">
      {/* Particle Background */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: { value: "#1e3a8a" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: { opacity: 1 },
              },
            },
          },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              outModes: { default: "bounce" },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl">
        <motion.h1
          className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Where Technology Meets <br /> Your Business Vision
        </motion.h1>

        <motion.p
          className="text-white text-sm font-sans sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Building the Future of Your Business with <br /> Personalized Solutions
        </motion.p>

        <motion.div
          className="mt-6 flex flex-col sm:flex-row sm:justify-center items-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-3 bg-[#00CFDD] text-white font-semibold text-base sm:text-lg rounded-md shadow-lg hover:bg-[#00b4c4]"
          >
            Contact Us
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-3 bg-[#00CFDD] text-white font-semibold text-base sm:text-lg rounded-md shadow-lg hover:bg-[#00b4c4]"
          >
            Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
