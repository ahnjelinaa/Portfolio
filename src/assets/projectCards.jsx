import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react'; 
import { Link } from 'react-router-dom'; 
import Projects from '../pages/projects';

// ===================================================
// DATA PROYEK
// ===================================================
const projects = [
  {
    id: 1,
    year: "2025",
    title: "Anggar.in",
    description: "Tracking Every Rupiah, Securing Every Purpose",
    longDescription : "Anggar.in is a blockchain-powered platform for transparent budgeting and fund tracking, designed to fight corruption and financial mismanagement in Indonesia’s public, corporate, and student sectors. It offers a blockchain-based web platform that ensures transparency, security, and real-time budget tracking, helping individuals, organizations, and communities build trust and reduce corruption.",
    tech: ["Figma", "React.js", "Vite", "Firebase"],
    contributors: ["Angelina Oktaviani Putri", "Gisella Jayata", "Vellyn Angeline"],
    image: "/assets/projects/Anggarin1.png",
    galleryImages: [
      "/assets/projects/Anggarin1.png",
      "/assets/projects/Anggarin2.png",
      "/assets/projects/Anggarin3.png",
      "/assets/projects/Anggarin4.png"
    ],
    githubLink: "https://github.com/ve11yn/anggarin",
    liveLink: "#"
  },
  {
    id: 2,
    year: "2025",
    title: "LimbahKu",
    description: "Turn Your Waste into Worth",
    longDescription : "LimbahKu is a waste management platform that helps users repurpose valuable household waste by connecting them with verified waste buyers. From stacks of old paper to broken electronics and used plastic, our app ensures that your waste doesn't go to waste.",
    tech: ["Figma", "React 18", "Tailwind CSS", "Vite", "Firebase", "Cloudinary"],
    contributors: ["Angelina Oktaviani Putri", "Matthew Jeremiah Lim", "Natha Buddhi Pratama Chandra", "Vernandio Rivaldo"],
    image: "/assets/projects/Limbahku3.png",
    galleryImages: [
      "/assets/projects/Limbahku3.png",
      "/assets/projects/Limbahku2.png",
      "/assets/projects/Limbahku1.png",
      "/assets/projects/Limbahku4.png",
    ],
    githubLink: "https://github.com/nathabuddhi/garuda-hacks-6",
    liveLink: "#"
  },
  {
    id: 3,
    year: "2025",
    title: "SIS Automailer",
    description: "Automailer website for BINUS School of Information Systems internal use",
    longDescription : "SIS OTOMAIL is a web-based platform (automailer) that streamlines bulk email sending with personalized content and attachments. Designed for internal use by the School of Information Systems staff, including lab assistants, lecturers, and administrators, it provides a reliable solution after previous attempts failed.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Go", "Cloudflare", "PostgreSQL", "MySQL", "Redis"],
    contributors: [" "],
    image: "/assets/projects/Automailer1.png",
    galleryImages: [
      "/assets/projects/Automailer1.png",
      "/assets/projects/Automailer2.png", 
      "/assets/projects/Automailer3.png"
    ],
    githubLink: "https://github.com/ezzeddinp/frontend-auto-mailer",
    liveLink: "#"
  }
];

// ===================================================
// MODAL
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-black/60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="w-full max-w-5xl bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 relative border border-gray-100"
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

            <div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 border-b pb-1">Technologies</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-pink-100 text-pink-700 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm sm:text-base text-gray-700 hover:text-pink-500 font-medium transition-colors"
                >
                  <Github size={18} className="sm:size-5" /> Code
                </a>
              )}
              {project.liveLink && project.liveLink !== '#' && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm sm:text-base text-gray-700 hover:text-pink-500 font-medium transition-colors"
                >
                  <ExternalLink size={18} className="sm:size-5" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ===================================================
// GRID PROJECT
// ===================================================
const ProjectCards = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="pb-20 bg-white">
      <div className="max-w-6xl mx-auto pb-10 px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 text-center">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-24 h-1 mx-auto bg-gradient-to-r from-[#ffd1dc] to-pink-400 rounded-full"></div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleCardClick(project)}
              className= "group flex flex-col items-center text-center p-4 sm:p-6 transition-all duration-300 transform hover:scale-[1.03] cursor-pointer border border-gray-200 rounded-xl shadow-sm hover:shadow-md bg-white"
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
            </div>
          ))}
        </div>

        {/* === TOMBOL DITAMBAHKAN DI SINI === */}
        {/* <div className="text-center mt-16">
          <Link 
            to="/projects" // <-- Ganti "/projects" dengan link halaman tujuanmu
            className="flex items-center justify-center px-4 sm:px-6 py-2 border border-pink-400 rounded-full text-sm sm:text-base text-pink-600 font-medium hover:bg-pink-50 transition-colors"
          >
            View Other Projects
          </Link>
        </div> */}
        {/* ==================================== */}

      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectCards;