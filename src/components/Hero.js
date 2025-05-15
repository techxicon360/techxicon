'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Digital Marketing",
    description: "We help businesses grow online by using effective strategies like social media, search engine optimization, and paid ads to reach more customers and boost sales.",
    icon: <img src='digital.png' className="w-10 h-10 mx-auto" />,
  },
  {
    title: "Visual Designing",
    description: "Our creative designs make your brand stand out. We create eye-catching visuals like logos, graphics, and promotional materials to give your business a unique identity.",
    icon: <img src='visual.png' className="w-10 h-10 mx-auto" />,
  },
  {
    title: "Web Development",
    description: "We build user-friendly, responsive websites that work across all devices. Our websites are designed to provide a smooth experience for your customers while enhancing your online presence.",
    icon: <img src='web.png' className="w-10 h-10 mx-auto" />,
  },
  {
    title: "App Development",
    description: "We develop fast and secure mobile applications tailored to your business goals, helping you stay connected with customers on-the-go.",
    icon: <img src='app.png' className="w-10 h-10 mx-auto" />,
  },
  {
    title: "SEO Services",
    description: "Rank higher in search results and get discovered by your audience. We optimize your website to meet search engine standards.",
    icon: <img src='seo.png' className="w-10 h-10 mx-auto" />,
  },
  {
    title: "Content Writing",
    description: "Professional content that converts. We craft compelling and SEO-friendly content for websites, blogs, and ads.",
    icon: <img src='content.png' className="w-10 h-10 mx-auto" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      type: 'spring',
      stiffness: 120,
      damping: 20,
    },
  }),
};

export default function CustomServices() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (index + itemsPerPage < services.length) {
      setIndex(index + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (index - itemsPerPage >= 0) {
      setIndex(index - itemsPerPage);
    }
  };

  const visibleServices = services.slice(index, index + itemsPerPage);

  return (
    <>
      <div className="bg-[#4f2cd0] text-white pt-16 pb-32 px-4 md:px-20 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 underline underline-offset-4 decoration-white text-left">
          Our Custom Services
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12 max-w-6xl mx-auto">
          <p className="text-md md:text-lg text-left flex-1">
            TechXicon is here to support your business every step of the way. We provide effective and sales-driven business
            solutions to help our clients grow. With a strong commitment to honesty, integrity, and dedication, we help
            businesses reach new heights and uncover new opportunities for their success.
          </p>

          <div className="flex gap-4">
            <button onClick={handlePrev} className="bg-white text-[#4f2cd0] p-2 rounded-full shadow-md hover:bg-[#4f2cd0] hover:text-white transition">
              <ChevronLeft />
            </button>
            <button onClick={handleNext} className="bg-white text-[#4f2cd0] p-2 rounded-full shadow-md hover:bg-[#4f2cd0] hover:text-white transition">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div className="-mt-24 px-4 md:px-20 flex justify-center items-center gap-6 flex-wrap relative z-20">
        {visibleServices.map((service, i) => (
          <motion.div
            key={service.title}
            className="relative bg-white text-black rounded-2xl shadow-xl p-6 flex flex-col w-72 h-[360px]"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="absolute top-2 right-3 text-gray-200 text-4xl font-bold opacity-20 select-none">
              {index + i + 1}
            </div>

            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-lg font-semibold text-center">{service.title}</h3>
            <p className="text-sm text-center leading-relaxed flex-grow">{service.description}</p>
            <button className="bg-transparent text-[#4f2cd0] border border-[#4f2cd0] px-4 py-2 rounded-md mx-auto hover:bg-[#4f2cd0] hover:text-white transition-all">
              Read More &gt;&gt;
            </button>
          </motion.div>
        ))}
      </div>
    </>
  );
}
