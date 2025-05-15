import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold">TECHXiCON</h2>
            <p className="mt-2">Building the future of business with tech.</p>
            
        {/* Social Media Icons */}
        <div className="flex justify-center mt-6">
          <a href="https://www.facebook.com/techxicon360/" className="mx-2"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/company/techxicon360" className="mx-2"><FaTwitter /></a>
          <a href="https://www.instagram.com/techxicon360/" className="mx-2"><FaInstagram /></a>
          <a href="http://linkedin.com/company/techxicon360" className="mx-2"><FaLinkedinIn /></a>
        </div>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row">
            <div className="mr-10">
              <h3 className="font-semibold mb-2">Company</h3>
              <ul>
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Free Consultation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Services</h3>
              <ul>
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
