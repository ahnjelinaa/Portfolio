import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-6 mt-10 text-gray-800">
      <div className="max-w-5xl mx-auto rounded-3xl bg-white shadow-lg px-10 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-xl font-semibold mb-2">Let's create something amazing together</h2>
          <p className="text-md md:text-m text-gray-700">Interested in collaborating? Reach out to me via email to discuss how we can turn your vision into reality.</p>
        </div>

        <a
          href="mailto:angelina@example.com"
          className="bg-pink-300 hover:bg-gray-400 text-white px-2 py-5 rounded-xl text-sm md:text-base font-semibold shadow-md transition flex items-center gap-2"
        >
          Contact Me <ExternalLink size={15} />
        </a>
      </div>

      <div className="max-w-6xl mx-auto mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Built by Angelina. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline flex items-center gap-1">Github <ExternalLink size={12} /></a>
          <a href="https://www.instagram.com/ahnjelinaa" className="hover:underline flex items-center gap-1">Instagram <ExternalLink size={12} /></a>
          <a href="https://www.linkedin.com/in/angelina-oktaviani-putri-0840b4290" className="hover:underline flex items-center gap-1">LinkedIn <ExternalLink size={12} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
