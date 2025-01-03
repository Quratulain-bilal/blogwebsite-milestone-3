import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo & Description */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Blogify</h2>
            <p className="mt-2 text-sm text-gray-400">
              Your daily dose of insightful articles and blog posts.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-2">
              Quick Links
            </h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <a href="#home" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-gray-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-200"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Blogify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
