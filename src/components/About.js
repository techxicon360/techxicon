'use client';
import React from 'react';
import { motion } from 'framer-motion';

const logos = ['logo1', 'logo2', 'logo3', 'logo4', 'logo5', 'logo6', 'logo7', 'logo8', 'logo9', 'logo10', 'logo11'];

export default function About() {
  return (
    <section id="about" className="py-12 px-4 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/luy.png"
            alt="About TechXicon360"
            className="rounded-xl shadow-xl max-w-full h-auto"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">About</h2>
          <p className="text-gray-700 mb-4">
            TechXicon360 is a software company focused on solving business challenges
            and driving growth for companies of all sizes...
          </p>
          <p className="text-gray-700 mb-4">
            A range of services is offered including Digital marketing, Visual designing,
            Web/App development...
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="flex items-center gap-2 text-blue-700 px-4 py-2">
              <img src="/1.png" alt="Strategy Icon" className="h-auto w-14" />
              <span className="font-medium">Industry-Specific Strategies for Success</span>
            </div>

            <div className="flex items-center gap-2 text-purple-700 px-4 py-2">
              <img src="/circle.png" alt="Growth Icon" className="h-auto w-14" />
              <span className="font-medium">End-to-End Services for Your Growth</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Logos Marquee */}
      <div className="mt-12 overflow-hidden py-6 relative">
        <div className="marquee">
          <div className="marquee-content">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={`${logo}-${index}`}
                src={`/${logo}.png`}
                alt={`${logo} logo`}
                className="mx-4 h-auto w-auto max-h-24"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Styles */}
      <style jsx>{`
        .marquee {
          display: flex;
          overflow: hidden;
          position: relative;
        }

        .marquee-content {
          display: flex;
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
