import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react'; 

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
    tech: ["Figma", "React 18", "Tailwind CSS", "Vite", "Firebase", "Cloudinary"],
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="w-full max-w-4xl bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl p-8 relative border border-gray-100"
        initial={{ y: 50, scale: 0.9 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 50, scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-800 hover:text-pink-500 transition-colors p-2 rounded-full bg-white/70"
        >
          <X size={24} />
        </button>

        {/* Header Title + Links */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {project.title} <span className="text-pink-500"></span>
          </h1>
          {/* <div className="flex gap-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-pink-500 font-medium transition-colors"
              >
                <Github size={20} /> Code
              </a>
            )}
            {project.liveLink && project.liveLink !== '#' && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-pink-500 font-medium transition-colors"
              >
                <ExternalLink size={20} /> Live Demo
              </a>
            )}
          </div> */}
        </div>

        {/* Konten Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bagian Kiri: Gambar + Gallery */}
          <div className="flex flex-col gap-4">
            <p className="text-sm text-gray-600 font-medium uppercase">
              {project.year} | {project.description}
            </p>

            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="p-2 bg-white rounded-lg shadow-inner h-72 flex items-center justify-center"
            >
              <img
                src={currentImage}
                alt={project.title}
                className="w-full max-h-full object-contain"
              />
            </motion.div>

            {/* Gallery Thumbnails */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="flex gap-2 p-2 bg-gray-50 rounded-lg shadow-inner">
                {project.galleryImages.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-20 h-16 object-cover rounded-md cursor-pointer border-2 
                      ${currentImage === imgSrc ? 'border-pink-500 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}
                      transition-all duration-200`}
                    onClick={() => setCurrentImage(imgSrc)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Bagian Kanan: Detail */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-gray-800 border-b pb-1">Description</h4>
              <p className="text-gray-700 text-sm">{project.longDescription}</p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-bold text-gray-800 border-b pb-1">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-pink-100 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* <div className="space-y-2">
              <h4 className="text-xl font-bold text-gray-800 border-b pb-1">Contributors</h4>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                {project.contributors.map((name, i) => (
                  <li key={i}>{name}</li>
                ))}
              </ul>
            </div> */}

            <div className="flex gap-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-pink-500 font-medium transition-colors"
              >
                <Github size={20} /> Code
              </a>
            )}
            {project.liveLink && project.liveLink !== '#' && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-pink-500 font-medium transition-colors"
              >
                <ExternalLink size={20} /> Live Demo
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
    <section id="projects" className="pb-15 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2 text-center relative">
            Projects
            <span className="absolute top-[-10px] right-[-30px] text-pink-500 text-3xl"></span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#ffd1dc] to-pink-400 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
          key={project.id}
          onClick={() => handleCardClick(project)}
          className="group flex flex-col items-center text-center p-6 transition-all duration-300 transform hover:scale-[1.03] cursor-pointer"
        >
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-pink-500">
            {project.title}
          </h3>

  {/* Description dengan fixed height */}
          <div className="min-h-[40px] mt-2 mb-6 flex items-center">
            <p className="text-sm text-gray-600">{project.description}</p>
          </div>

          {/* Gambar */}
          <div className="relative w-full h-auto p-4 bg-white rounded-xl shadow-xl border border-gray-100">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>
          ))}
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

export default ProjectCards;
