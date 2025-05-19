import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Company Info */}
          <div className="md:w-1/3">
            <img src="/footer.png" alt="Company Logo" className="h-12 mb-4" />
            <p className="mb-6 leading-relaxed">
              Building the future of business with tech.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/techxicon360/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-purple-800 hover:bg-purple-600 hover:text-white transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/techxicon360"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-purple-800 hover:bg-purple-600 hover:text-white transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/techxicon360/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-purple-800 hover:bg-purple-600 hover:text-white transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/techxicon360"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-purple-800 hover:bg-purple-600 hover:text-white transition duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap md:gap-20 gap-10">
            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Free Consultation</a></li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Digital Marketing</a></li>
                <li><a href="#" className="hover:underline">Web Development</a></li>
                <li><a href="#" className="hover:underline">App Development</a></li>
                <li><a href="#" className="hover:underline">Software Solutions</a></li>
                <li><a href="#" className="hover:underline">E-commerce Solutions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
