import React from 'react';
import Image from 'next/image';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20">
          {/* Company Info */}
          <div className="md:w-1/3">
            <Image
              src="/footer.png"
              alt="Company Logo"
              width={140}
              height={56}
              className="mb-5"
            />
            <p className="mb-8 leading-relaxed text-sm md:text-base max-w-xs">
              Building the future of business with tech.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              {[
                {
                  href: "https://www.facebook.com/techxicon360/",
                  icon: <FaFacebookF />,
                  label: "Facebook",
                },
                {
                  href: "https://twitter.com/techxicon360",
                  icon: <FaTwitter />,
                  label: "Twitter",
                },
                {
                  href: "https://www.instagram.com/techxicon360/",
                  icon: <FaInstagram />,
                  label: "Instagram",
                },
                {
                  href: "https://www.linkedin.com/company/techxicon360",
                  icon: <FaLinkedinIn />,
                  label: "LinkedIn",
                },
              ].map(({ href, icon, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white text-purple-800 hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap md:gap-24 gap-12">
            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-sm md:text-base">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Free Consultation
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-3 text-sm md:text-base">
                <li>
                  <a href="#" className="hover:underline">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    App Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Software Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    E-commerce Solutions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
