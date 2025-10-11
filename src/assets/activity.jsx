import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; 

// ===================================================
// DATA ACTIVITIES
// ===================================================
const activities = [
  {
    id: 1,
    year: "2025",
    title: "Microsoft AI-900 Training Instructor",
    description: "Delivered Day 2 of ElevAIte Indonesia professional training",
    longDescription: "Delivered the second day of a professional training program for GreatNusa’s ElevAIte Indonesia, a collaboration between BINUS University and Microsoft. Covered Microsoft AI-900 concepts and practical applications, including classification, regression, clustering, face detection, and OCR using Azure AI, providing hands-on solutions for real-world business challenges.",
    image: "/assets/activities/elevait1.png",
    galleryImages: [
      "/assets/activities/elevait1.png",
      "/assets/activities/elevait2.png"
    ]
  },
  {
    id: 2,
    year: "2025",
    title: "SIS Appreciation Day 2025 Awardee",
    description: "SIS Appreciation Day 2025, Outstanding Student Recognition",
    longDescription: "Honored to participate in SIS Appreciation Day 2025, recognizing students with outstanding achievements and high GPAs. The event was a meaningful reflection on personal growth and academic success. Excited to continue learning, contributing, and achieving future milestones.",
    image: "/assets/activities/appreciationDay1.png",
    galleryImages: [
      "/assets/activities/appreciationDay1.png",
      "/assets/activities/appreciationDay2.png", 
      "/assets/activities/appreciationDay3.JPEG"
    ]
  }, 
  {
    id: 3,
    year: "2025",
    title: "Best Project for Web Development in ISPM",
    description: "Best Information Systems Project Member Project in Web Development 2025",
    longDescription: "Awarded Best Project in Web Development for creating an internal automailer website for the Information Systems Laboratory. Served as UI/UX Designer and Frontend Developer, focusing on intuitive interface design and seamless user experience.",
    image: "/assets/experiences/ispm1.png",
    galleryImages: [
      "/assets/experiences/ispm1.png",
      "/assets/activities/bestprojectispm1.png"
    ]
  }
];

// ===================================================
// MODAL
// ===================================================
const ActivityModal = ({ activity, onClose }) => {
  if (!activity) return null;

  const [currentImage, setCurrentImage] = useState(activity.image);

  useEffect(() => {
    const defaultImage = activity.galleryImages?.[0] || activity.image;
    setCurrentImage(defaultImage);
  }, [activity.id]);

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
          <X size={22} />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            {activity.title}
          </h1>
        </div>

        {/* Konten Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Bagian Kiri */}
          <div className="flex flex-col gap-4">
            <p className="text-xs sm:text-sm text-gray-600 font-medium uppercase">
              {activity.year} | {activity.description}
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
                alt={activity.title}
                className="w-full max-h-full object-contain"
              />
            </motion.div>

            {/* Gallery */}
            {activity.galleryImages && (
              <div className="flex flex-wrap gap-2 p-2 bg-gray-50 rounded-lg shadow-inner">
                {activity.galleryImages.map((imgSrc, index) => (
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
              <p className="text-gray-700 text-sm sm:text-base mt-2">{activity.longDescription}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ===================================================
// GRID ACTIVITIES
// ===================================================
const Activities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleCardClick = (activity) => {
    setSelectedActivity(activity);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedActivity(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="activity" className="pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 text-center">
            Recent Activities
          </h2>
          <div className="w-16 sm:w-24 h-1 mx-auto bg-gradient-to-r from-[#ffd1dc] to-pink-400 rounded-full"></div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {activities.map((activity) => (
            <div
              key={activity.id}
              onClick={() => handleCardClick(activity)}
              className= "group flex flex-col items-center text-center p-4 sm:p-6 transition-all duration-300 transform hover:scale-[1.03] cursor-pointer border border-gray-200 rounded-xl shadow-sm hover:shadow-md bg-white"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-pink-500">
                {activity.title}
              </h3>

              {/* Description */}
              <div className="min-h-[36px] sm:min-h-[40px] mt-2 mb-4 sm:mb-6 flex items-center">
                <p className="text-xs sm:text-sm text-gray-600">{activity.description}</p>
              </div>

              {/* Image */}
              <div className="relative w-full h-auto p-3 sm:p-4 bg-white rounded-xl shadow-xl border border-gray-100">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-auto rounded-lg object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedActivity && (
          <ActivityModal activity={selectedActivity} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Activities;
