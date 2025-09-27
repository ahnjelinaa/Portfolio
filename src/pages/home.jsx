import React from 'react';
import { Download, ChevronDown } from 'lucide-react';
import Navbar from '../assets/navbar.jsx';
import ProjectCards from '../assets/projectCards.jsx';
import AboutOverview from '../assets/aboutOverview.jsx';
import Footer from '../assets/footer.jsx';
import profileImg from '/assets/profilePhoto.png';
import Activities from '../assets/activity.jsx';

const Portfolio = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white to-[#ffd1dc]/30">
      {/* NAVBAR */}
      <Navbar onNavigate={scrollToSection} />

      {/* HOME SECTION */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text kiri */}
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl text-pink-400 font-semibold">
                <span className="typing-animation">Hello!</span>
              </h1>
              <h1 className="text-xl sm:text-3xl lg:text-6xl font-semibold text-gray-900 mb-4 lg:mb-6 leading-tight">
                I'm Angelina Oktaviani Putri
              </h1>
              <p className="text-sm sm:text-base lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed font-light">
                BINUS @Alam Sutera Part Time Software Lab Assistant
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-[#ffd1dc] to-pink-300 text-white px-5 sm:px-7 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg"
                >
                  <Download size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  Download CV
                </button>
              </div>
            </div>

            {/* Gambar kanan */}
            <div className="flex justify-center lg:justify-end -mt-6 sm:-mt-8 lg:mt-0">
              <img
                src={profileImg}
                alt="Profile"
                className="w-32 h-40 sm:w-48 sm:h-60 lg:w-80 lg:h-96 object-cover rounded-xl shadow-lg border-2 border-gray-100"
              />
            </div>
          </div>
        </div>

        {/* SCROLL DOWN INDICATOR */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={() => scrollToSection('about')}
            className="group cursor-pointer flex flex-col items-center"
          >
            <span className="text-gray-500 text-xs sm:text-sm font-medium mb-2 opacity-75 group-hover:opacity-100 transition-opacity">
              Scroll Down
            </span>
            <div className="w-5 sm:w-6 lg:w-8 h-8 sm:h-10 lg:h-12 border-2 border-gray-700 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-1 h-3 bg-gradient-to-b from-pink-400 to-pink-300 rounded-full animate-bounce-down absolute top-2"></div>
            </div>
            <ChevronDown
              size={20}
              className="sm:size-6 lg:size-8 text-pink-300 mt-2 animate-bounce-gentle group-hover:text-pink-400 transition-colors"
            />
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <AboutOverview />
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="pt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <ProjectCards />
        </div>
      </section>

      {/* ACTIVITIES */}
      <section id="activities">{/* <Activity /> */}</section>

      {/* ACTIVITIES */}
      <section id="contact">{/* <Contact /> */}
        <Activities />
      </section>

      {/* FOOTER */}
      <section>
        <Footer />
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes bounce-down {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2s infinite ease-in-out;
        }
        .animate-bounce-down {
          animation: bounce-down 1.5s infinite ease-in-out;
        }
      `}</style>

      <style jsx>{`
        .typing-animation {
          display: inline-block;
          overflow: hidden;
          border-right: 3px solid #f472b6;
          white-space: nowrap;
          animation: typing 3s steps(30, end), blink 0.7s step-end infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 20%;
          }
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
