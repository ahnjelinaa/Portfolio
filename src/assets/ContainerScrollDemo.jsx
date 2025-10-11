// src/assets/containerScrollDemo.jsx

"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react'; // Menghapus Github karena tidak digunakan
import { Link } from 'react-router-dom'; 
import { ContainerScroll } from "../ui/container-scroll-animation"; 
import NavbarTabs from './navbarProjects.jsx'; // 👈 PASTIKAN PATH INI BENAR (misalnya './NavbarProjects.jsx')

// ===================================================
// DATA PROYEK DENGAN KATEGORI YANG DIUBAH
// ===================================================
const projects = [
  {
    id: 1,
    year: "2025",
    title: "TBC IX : PIONEER Pitch Deck",
    description: "Deck of Tarumanagara Business Case Competition IX 'PIONEER'",
    longDescription : "This pitch deck was created for TBC IX: PIONEER, where we developed the proposal “Live Better in URES” to position UNTAR’s new dormitory as a lifestyle choice for students and lecturers. Focusing on brand presence, clear value communication, and market pricing validation, this deck successfully brought our team to the 2nd Runner Up award in the competition.",
    category: "Deck",
    image: "/assets/otherProjects/ures1.png",
    galleryImages: ["/assets/otherProjects/ures1.png", "/assets/otherProjects/ures2.png", "/assets/otherProjects/ures3.png", "/assets/otherProjects/ures4.png"],
    liveLink: "https://www.canva.com/design/DAGqHNRj3mc/mzCYDRE1-zQa64BLPAG__w/edit?utm_content=DAGqHNRj3mc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" // Contoh link aktif
  },
  {
    id: 2,
    year: "2025",
    title: "GarudaHacks 6.0 Pitch Deck",
    description: "Deck of GarudaHacks 6.0 Track Sustainability : Limbahku",
    longDescription : "LimbahKu is a waste management platform that helps users repurpose valuable household waste by connecting them with verified waste buyers. From stacks of old paper to broken electronics and used plastic, our app ensures that your waste doesn't go to waste.",
    category: "Deck",
    image: "/assets/otherProjects/limbahku1.png",
    galleryImages: ["/assets/otherProjects/limbahku1.png", "/assets/otherProjects/limbahku3.png", "/assets/otherProjects/limbahku2.png", "/assets/otherProjects/limbahku4.png"],
    liveLink: "https://www.canva.com/design/DAGuI7LgGxM/K-ySB_28ciaElkOf5v3wyw/edit?utm_content=DAGuI7LgGxM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 3,
    year: "2025",
    title: "Pitch Deck of Euforia 2025",
    description: "Deck of Euforia 2025 Business Case Competition",
    longDescription : "SIS OTOMAIL is a web-based platform (automailer) that streamlines bulk email sending with personalized content and attachments. Designed for internal use by the School of Information Systems staff, including lab assistants, lecturers, and administrators, it provides a reliable solution after previous attempts failed.",
    category: "Deck",
    image: "/assets/otherProjects/euforia1.png",
    galleryImages: ["/assets/otherProjects/euforia1.png", "/assets/otherProjects/euforia2.png", "/assets/otherProjects/euforia3.png"],
    githubLink: "https://github.com/ezzeddinp/frontend-auto-mailer",
    liveLink: "https://automailer.binus.com"
  },
  { id: 4, year: "2024", title: "Data Visualization Dashboard", description: "Interactive sales dashboard.", category: "Data", tech: ["Python", "Tableau"], image: "/assets/projects/dummy.png", githubLink: "#", liveLink: "https://data.com" },
  { id: 5, year: "2023", title: "Pitch Deck Startup", description: "Investor pitch deck design.", category: "Deck", tech: ["Figma", "PowerPoint"], image: "/assets/projects/dummy.png", githubLink: "#", liveLink: "https://pitch.com" },
  { id: 6, year: "2023", title: "Miscellaneous Ideas", description: "Various small concept projects.", category: "Others", tech: ["Various"], image: "/assets/projects/dummy.png", githubLink: "#", liveLink: "https://other.com" },
];

// ===================================================
// MODAL (ProjectModal) - DIUBAH (Link Project)
// ===================================================
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  const [currentImage, setCurrentImage] = useState(project.image);
  
  useEffect(() => {
    const defaultImage = project.galleryImages?.[0] || project.image;
    setCurrentImage(defaultImage);
  }, [project.id]);

  return (
    <motion.div
      // Layer Backdrop (Penuh Layar)
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-lg bg-black/70" // Diperbaiki: Sudut & Blur
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        // Kotak Modal Utama
        // 💡 DIUBAH: Menggunakan rounded-2xl dan menghapus backdrop-blur-xl
        className="w-full max-w-5xl bg-white/95 rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 relative border border-gray-100"
        initial={{ y: 50, scale: 0.95 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 50, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-800 hover:text-pink-500 transition-colors p-2 rounded-full bg-white/70"
        >
          <X size={22} className="sm:size-6" />
        </button>

        {/* Header Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            {project.title}
          </h1>
        </div>

        {/* Konten Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Bagian Kiri */}
          <div className="flex flex-col gap-4">
            <p className="text-xs sm:text-sm text-gray-600 font-medium uppercase">
              {project.year} | {project.description}
            </p>

            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="p-2 bg-white rounded-lg shadow-inner h-52 sm:h-64 lg:h-72 flex items-center justify-center"
            >
              <img
                src={currentImage}
                alt={project.title}
                className="w-full max-h-full object-contain"
              />
            </motion.div>

            {/* Gallery */}
            {project.galleryImages && (
              <div className="flex flex-wrap gap-2 p-2 bg-gray-50 rounded-lg shadow-inner">
                {project.galleryImages.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-16 h-12 sm:w-20 sm:h-16 object-cover rounded-md cursor-pointer border-2 
                      ${currentImage === imgSrc ? 'border-pink-500 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}
                      transition-all duration-200`}
                    onClick={() => setCurrentImage(imgSrc)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Bagian Kanan */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 border-b pb-1">Description</h4>
              <p className="text-gray-700 text-sm sm:text-base mt-2">{project.longDescription}</p>
            </div>

            {/* Tautan Project */}
            <div className="mt-4">
              {/* Tampilkan tautan "Go to Project" hanya jika liveLink ada dan bukan '#' */}
              {project.liveLink && project.liveLink !== '#' && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Style untuk tombol project
                  className="inline-flex items-center gap-2 text-sm sm:text-base text-white font-medium px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 transition-colors shadow-lg"
                >
                  <ExternalLink size={18} className="sm:size-5" /> Go to Project
                </a>
              )}
               {/* Tampilkan pesan jika link tidak ada */}
               {(!project.liveLink || project.liveLink === '#') && (
                <p className="text-sm text-gray-500 italic">Project link is currently unavailable.</p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


// ===================================================
// GRID PROJECT (ProjectCards) - PESAN PLACEHOLDER
// ===================================================
const ProjectCards = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All"); 

  const handleCardClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const filteredProjects = projects.filter(
    // Memfilter berdasarkan kategori yang cocok atau menampilkan semua jika "All" dipilih
    (p) => activeCategory === "All" || p.category === activeCategory
  );
  
  // Menghapus useEffect yang menyebabkan scroll reset.

  return (
    <section id="projects" className="pb-20 ">
      <div className="max-w-6xl mx-auto pb-10 px-4 sm:px-6">
        {/* Header dan Navbar Tabs */}
        <div className="flex flex-col items-center mb-12 sm:mb-16">
          <NavbarTabs setActiveCategory={setActiveCategory} />
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => handleCardClick(project)}
              className= "group flex flex-col items-center text-center p-4 sm:p-6 transition-all duration-300 transform hover:scale-[1.03] cursor-pointer border border-gray-200 rounded-xl shadow-sm hover:shadow-md bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-pink-500">
                {project.title}
              </h3>
              <div className="min-h-[36px] sm:min-h-[40px] mt-2 mb-4 sm:mb-6 flex items-center">
                <p className="text-xs sm:text-sm text-gray-600">{project.description}</p>
              </div>
              <div className="relative w-full h-auto p-3 sm:p-4 bg-white rounded-xl shadow-xl border border-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-lg object-contain"
                />
              </div>
            </motion.div>
          ))}
          
          {/* 💡 PESAN JIKA TIDAK ADA PROYEK DITEMUKAN */}
          {filteredProjects.length === 0 && (
             <p className="text-gray-500 col-span-full text-center py-10 text-lg">
                Currently, there are no projects in the **{activeCategory}** category. <br/>
                Please check back soon! (Coming Soon) 🚀
             </p>
          )}
        </div>
        
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </section>
  );
};


// ===================================================
// UTAMA: CONTAINER SCROLL DEMO
// ===================================================

export function ProjectsContainerScroll() {
  return (
    <div className="flex flex-col overflow-hidden min-h-screen">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl md:text-2xl font-semibold text-black dark:text-white text-center">
                Explore my other <br />
              <span className="text-5xl md:text-[5rem] font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500">
                Projects
              </span>
            </h1>
          </>
        }
      >
        <div className="w-full">
            <ProjectCards /> 
        </div>

      </ContainerScroll>
    </div>
  );
}