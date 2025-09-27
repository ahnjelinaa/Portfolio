import React, { useState, useEffect } from 'react';
import { Typewriter } from "react-simple-typewriter";
import { Menu, X } from "lucide-react"; // icon hamburger & close

const Navbar = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="relative flex justify-between items-center">
          {/* Logo */}
          <div className="z-10">
            <div className="w-10 h-10 bg-gradient-to-br from-[#ffd1dc] to-pink-300 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
          </div>

          {/* Menu Tengah (Desktop) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase())}
                className="text-gray-700 hover:text-[#ffd1dc] transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Typewriter (Desktop Only) */}
          <div className="z-10 hidden md:flex text-pink-400 font-semibold text-sm">
            <Typewriter
              words={['Hello!', 'Halo!', '안녕하세요!', 'Bonjour!', 'こんにちは!', '你好!']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>

          {/* Hamburger Menu (Mobile Only) */}
          <div className="md:hidden z-20">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pink-400"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="mt-4 flex flex-col space-y-4 md:hidden text-center">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  onNavigate(item.toLowerCase());
                  setIsMenuOpen(false); // close menu setelah klik
                }}
                className="text-gray-700 hover:text-[#ffd1dc] transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
