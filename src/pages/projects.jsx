import React, { useState, useEffect } from "react"; // 👈 Import useState dan useEffect
import { Link } from "react-router-dom";
import { ProjectsContainerScroll } from "../assets/containerScrollDemo";

const Projects = () => {
  // State untuk mengontrol visibilitas konten
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Penundaan yang sedikit lebih lama dari timeout di App.jsx (100ms)
    // Ini memberi waktu kepada Lenis untuk menyelesaikan proses scroll-to-top (yang 100ms)
    const visibilityTimer = setTimeout(() => {
      setIsContentVisible(true);
    }, 150); // 👈 Tunda 150ms

    return () => clearTimeout(visibilityTimer);
  }, []); // Hanya berjalan saat komponen pertama kali dimuat

  return (
    // Gunakan class transition dan opacity di div terluar
    // Tambahkan juga min-h-screen (jika belum ada)
    <div 
      className={`min-h-screen w-full transition-opacity duration-300 ${
        isContentVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* --- NAVBAR TOP (di luar ContainerScroll agar selalu terlihat) --- */}
      <div className="relative pt-10 px-6 md:px-12">
        {/* Link ke Home */}
        <Link
          to="/"
          className="px-4 sm:px-6 py-2 border border-pink-400 rounded-full text-sm sm:text-base text-pink-600 font-medium hover:bg-pink-50 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      {/* --- CONTAINER SCROLL DENGAN DAFTAR PROYEK --- */}
      <ProjectsContainerScroll />
    </div>
  );
};

export default Projects;