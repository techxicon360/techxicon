'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Client Centric Approach',
    desc: "We focus on our clients' needs and work closely with them every step of the journey.",
    icon: '/log4.png',
  },
  {
    title: 'Ongoing Support',
    desc: 'We continue to help you even after the project is done, ensuring you keep succeeding.',
    icon: '/log5.png',
  },
  {
    title: 'Complete Services',
    desc: 'We handle everything from the initial idea to the final product. YOUR VISION, SERVICES TO SUCCESS.',
    icon: '/dig.png',
  },
  {
    title: 'Custom Solutions',
    desc: 'We know every business is different, so we create solutions that are specific just for you.',
    icon: '/log3.png',
  },
  {
    title: '100% Success',
    desc: 'Our past projects showcase our approach towards success.',
    icon: '/log2.png',
  },
];

export default function Client() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-start max-w-3xl mx-auto mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[#4f46e5] mb-2">
          Reasons to Choose Us
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          Your success is our mission, and we deliver it with expertise, care, and commitment!
        </p>
      </motion.div>

      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            className="border border-[#c3c3ff] rounded-lg flex items-center gap-3 px-4 py-3 hover:shadow-md bg-white"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Image
              src={reason.icon}
              alt={reason.title}
              width={48}
              height={48}
              className="object-contain flex-shrink-0"
              priority={false} // lazy loading by default
            />
            <div>
              <h3 className="font-semibold text-lg text-[#111827] mb-1">{reason.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{reason.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
