import React from "react";

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

const Scroller = () => {
  return (
    <div className="overflow-hidden w-full">
      {/* Konten scroll */}
      <div className="animate-scroll flex whitespace-nowrap gap-3 sm:gap-5 md:gap-7">
        {[...Array(2)].flatMap((_, loopIndex) =>
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
              <span className="text-[10px] sm:text-xs text-gray-800 font-medium whitespace-nowrap">
                {icon.label}
              </span>
            </div>
          ))
        )}
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
    </div>
  );
};

export default Scroller;
