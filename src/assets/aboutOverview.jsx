// AboutOverview.jsx
import React, { useState, useEffect } from 'react';
import Experience from './experience'; // <-- Pastikan path ini benar

// --- DATA ICONS LENGKAP UNTUK SCROLLER ---
const scrollerIcons = [
  { src: "/icons/html.png", label: "HTML" },
  { src: "/icons/css.png", label: "CSS" },
  { src: "/icons/javascript.png", label: "JavaScript" },
  { src: "/icons/react.png", label: "React" },
  { src: "/icons/typescript.png", label: "TypeScript" },
  { src: "/icons/tailwind.png", label: "Tailwind CSS" },
  { src: "/icons/git.png", label: "GitHub" },
  { src: "/icons/python.png", label: "Python" },
  { src: "/icons/java.png", label: "Java" },
  { src: "/icons/c.png", label: "C++/C" },
  { src: "/icons/laravel.png", label: "Laravel" },
  { src: "/icons/mysql.png", label: "MySQL" },
  { src: "/icons/oracle.png", label: "Oracle" },
  { src: "/icons/sqlserver.png", label: "SQL Server" },
  { src: "/icons/r.png", label: "R" },
  { src: "/icons/powerbi.png", label: "PowerBI" },
  { src: "/icons/tableau.png", label: "Tableau" },
  { src: "/icons/figma.png", label: "Figma" },
  { src: "/icons/axure.png", label: "Axure" },
];

// --- DATA SKILLS UTAMA ---
const skills = [
  { id: '01', title: 'Web Development', items: ['Laravel', 'React', 'TypeScript', 'Tailwind CSS'] },
  { id: '02', title: 'UI/UX Design', items: ['Figma', 'Axure'] },
  { id: '03', title: 'Data Visualization', items: ['Power BI', 'Tableau'] },
  { id: '04', title: 'Programming & Databases', items: ['Python', 'Java', 'C++/C', 'MySQL', 'Oracle', 'SQL Server', 'R'] }
];

const AboutOverview = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    // Animate cards one by one
    skills.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <section id="aboutme" className="pt-16 sm:pt-20"> 
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* HEADER */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 text-center">
          About Me
        </h2>
        <div className="w-16 sm:w-20 lg:w-24 h-1 mx-auto mb-6 sm:mb-8 bg-gradient-to-r from-[#ffd1dc] to-pink-400 rounded-full"></div>

        {/* INTRO */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-8 sm:mb-12 text-center max-w-3xl mx-auto px-2">
          <span className="font-bold text-xl sm:text-2xl lg:text-3xl text-pink-400 mb-4 animate-bounce">Hello! </span>  
          I'm a second year <span className="font-semibold text-gray-900">Information Systems</span> undergraduate student majoring in <span className="font-semibold text-gray-900">Applied Database</span>. 
          I'm deeply interested in <span className="font-semibold text-gray-900">business analytics</span>, <span className="font-semibold text-gray-900">data analytics</span>, and <span className="font-semibold text-gray-900">UI/UX design</span>. 
          I enjoy exploring the intersection of technology and problem-solving.
        </p>

        {/* SKILLS GRID */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`border rounded-xl p-4 sm:p-6 text-center shadow-md sm:shadow-lg bg-white
                transform transition-all duration-700 ease-out
                hover:shadow-xl sm:hover:shadow-2xl hover:scale-[1.02] 
                ${visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }
                group cursor-pointer`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 text-gray-100 text-sm sm:text-base font-bold rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 
                           transition-all duration-300 group-hover:bg-pink-500 group-hover:scale-110">
                {skill.id}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 group-hover:text-pink-500 transition-colors duration-300">
                {skill.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium 
                             transform transition-all duration-300 hover:bg-pink-400 hover:text-white hover:scale-105"
                    style={{ animationDelay: `${(index * 200) + (idx * 100)}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* EXPERIENCE */}
        <div className="mt-6 sm:mt-8"> 
          <Experience />  
        </div>

        {/* ICONS SCROLLER */}
<div className="pt-12 sm:pt-16 lg:pt-20">
  <div className="overflow-hidden relative border-y-2 border-gray-200 py-2 sm:py-3">
    
    {/* Gradient kiri */}
    <div className="absolute left-0 top-0 h-full w-12 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
    
    {/* Gradient kanan */}
    <div className="absolute right-0 top-0 h-full w-12 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

    {/* Konten scroll */}
    <div className="animate-scroll flex whitespace-nowrap gap-3 sm:gap-5 md:gap-7"> 
      {[...Array(2)].flatMap((_, loopIndex) => (
        scrollerIcons.map((icon, idx) => (
          <div 
            key={`${loopIndex}-${idx}`} 
            className="flex items-center px-3 sm:px-4 py-1 bg-white rounded-full shadow-sm border border-gray-100 transition-all duration-300 hover:scale-[1.05] cursor-pointer" 
          >
            <img 
              src={icon.src} 
              alt={icon.label} 
              className="max-h-3 sm:max-h-5 object-contain mr-1 sm:mr-2" 
            />
            <span className="text-[10px] sm:text-xs text-gray-800 font-medium whitespace-nowrap">{icon.label}</span>
          </div>
        ))
      ))}
    </div>
  </div>
</div>
      </div>

      {/* STYLES UNTUK ANIMASI SCROLLER */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite; 
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default AboutOverview;
