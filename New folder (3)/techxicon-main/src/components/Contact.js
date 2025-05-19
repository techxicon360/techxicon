import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div id='contact' className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-5xl sm:mx-auto">
        {/* Animated Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
        ></motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-white bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-16 px-4 py-10"
        >
          <div className="flex flex-col sm:flex-row gap-10">
            {/* Contact Info - Left */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="sm:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-100 mb-6">
                We’d love to hear from you! Reach out using the form or contact us directly.
              </p>
              <ul className="text-gray-200 space-y-4">
                <li><strong>📍 Address:</strong> 123 Developer Street, Web City</li>
                <li>
  <strong>📞 Phone:</strong>
  <a href="https://wa.me/923258429083" target="_blank">+92 325 8429083</a>
</li>
                <li><strong>📧 Email:</strong> contact@example.com</li>
              </ul>
            </motion.div>

            {/* Contact Form - Right */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="sm:w-1/2"
            >
              <div className="text-center pb-6">
                <h1 className="text-2xl font-semibold">Contact Us!</h1>
                <p className="text-gray-100">
                  Fill up the form below to send us a message.
                </p>
              </div>

              <form>
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                  name="name"
                />
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Subject"
                  name="_subject"
                />
                <textarea
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Type your message here..."
                  name="message"
                  style={{ height: '121px' }}
                ></textarea>

                <div className="flex justify-between">
                  <input
                    className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    value="Send ➤"
                  />
                  <input
                    className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="reset"
                  />
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
