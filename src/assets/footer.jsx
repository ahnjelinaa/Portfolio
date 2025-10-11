import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pb-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      <div className="max-w-6xl mx-auto rounded-3xl bg-white shadow-lg px-6 sm:px-10 py-10 sm:py-12 flex flex-col md:flex-row justify-between items-center gap-6 ">
        {/* Left Section */}
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            Let's create something amazing together
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            Interested in collaborating? Reach out to me via email to discuss how we can turn your vision into reality.
          </p>
        </div>

        {/* Contact Button */}
        <a
          href="mailto:angelina@example.com"
          className="bg-pink-400 hover:bg-pink-500 text-white px-5 py-3 rounded-xl 
                     text-sm sm:text-base font-semibold shadow-md transition 
                     flex items-center gap-2"
        >
          Contact Me <ExternalLink size={16} />
        </a>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto mt-10 border-t border-gray-300 pt-6 
                      flex flex-col md:flex-row justify-between items-center 
                      text-xs sm:text-sm text-gray-600 gap-4">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Built by Angelina. All rights reserved.
        </p>

        <div className="flex gap-4 flex-wrap justify-center md:justify-end">
          <a href="#" className="hover:underline flex items-center gap-1">
            Github <ExternalLink size={12} />
          </a>
          <a
            href="https://www.instagram.com/ahnjelinaa"
            className="hover:underline flex items-center gap-1"
          >
            Instagram <ExternalLink size={12} />
          </a>
          <a
            href="https://www.linkedin.com/in/angelina-oktaviani-putri-0840b4290"
            className="hover:underline flex items-center gap-1"
          >
            LinkedIn <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
