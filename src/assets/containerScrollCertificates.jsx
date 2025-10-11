"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ContainerScroll } from "../ui/container-scroll-animation";

// ==========================
//  DATA CERTIFICATES
// ==========================
const certificates = [
  {
    id: 1,
    title: "UI/UX Design Fundamentals",
    image: "/assets/certificates/uiux1.png",
  },
  {
    id: 2,
    title: "Front-End Development Bootcamp",
    image: "/assets/certificates/frontend1.png",
  },
  {
    id: 3,
    title: "React Developer Certificate",
    image: "/assets/certificates/react1.png",
  },
  {
    id: 4,
    title: "Google Project Management",
    image: "/assets/certificates/pm1.png",
  },
];

// ==========================
//  MODAL UNTUK PREVIEW GAMBAR
// ==========================
const CertificateModal = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white/70 p-2 rounded-full hover:bg-white transition"
        >
          <X size={20} className="text-gray-800" />
        </button>
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full object-contain rounded-2xl"
        />
      </motion.div>
    </motion.div>
  );
};

// ==========================
//  GRID CERTIFICATES
// ==========================
const CertificateGrid = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpenModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="certificates" className="pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              onClick={() => handleOpenModal(cert)}
              className="cursor-pointer group border border-gray-200 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-60 object-contain p-4 bg-white group-hover:opacity-90 transition"
              />
              <div className="px-4 pb-4 text-center">
                <h3 className="text-gray-800 font-semibold text-base sm:text-lg">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <CertificateModal certificate={selectedCert} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

// ==========================
//  HALAMAN CONTAINER SCROLL
// ==========================
export function CertificatesContainerScroll() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Bagian animasi header */}
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl md:text-2xl font-semibold text-black text-center">
              My Professional <br />
              <span className="text-5xl md:text-[5rem] font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500">
                Certificates
              </span>
            </h1>
          </>
        }
      >
        {/* Satu section pendek aja biar scroll-nya gak ke-block */}
        <div className="w-full h-[50vh] flex items-center justify-center">
          <p className="text-gray-600 text-lg">Scroll down to see my certificates ↓</p>
        </div>
      </ContainerScroll>

      {/* Section terpisah yang bisa di-scroll normal */}
      <div className="flex-1 bg-white">
        <CertificateGrid />
      </div>
    </div>
  );
}
