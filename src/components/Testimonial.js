"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // ✅ Import Image

const testimonials = [
  {
    name: "John Deo",
    position: "CEO of Innovative Solutions Inc.",
    message:
      "TechXicon transformed our outdated website into a sleek, modern, and user-friendly platform. The team was exceptionally professional and delivered with outstanding precision. The result exceeded our expectations and has significantly improved our online presence.",
  },
  {
    name: "Michael Brown",
    position: "Founder of E-Shop Haven",
    message:
      "Our e-commerce platform needed a complete overhaul, and TechXicon delivered beyond our expectations. Their design sensibility, approach, and execution with expertise and attention to detail. Our sales have increased dramatically after the launch.",
  },
  {
    name: "Lisa Wong",
    position: "Marketing Director, Asia Pacific Ventures, Singapore",
    message:
      "The digital marketing strategies implemented by TechXicon have significantly boosted our lead generation results and online brand awareness. Their creative and data-driven approach has yielded impressive results.",
  },
];

export default function Testimonial() {
  return (
    <section className="w-full bg-gradient-to-r from-[#6C3DF8] to-[#924DFF] py-16 px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-left">
            <div className="">
              {/* ✅ Use Next.js Image component */}
              <Image
  src="/comma.png"
  alt="client-testimonial"
  width={0} // important for original size control
  height={0}
  style={{ width: "auto", height: "auto" }} // forces original image size
  unoptimized // optional: disables next/image optimization
/>

            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Words of Trust from <br /> Our Partners
            </h2>
            <p className="text-sm md:text-base text-gray-200">
              Hear from our satisfied partners who have experienced the impact of our
              solutions
            </p>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white text-gray-800 rounded-md p-4 relative shadow-md"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="text-sm mb-3">{item.message}</p>
              <div className="text-sm font-semibold text-blue-700">
                {item.name}
              </div>
              <div className="text-xs text-gray-600">{item.position}</div>
              <div className="absolute bottom-4 right-4 text-[#00BCD4] text-2xl">
                ””
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
