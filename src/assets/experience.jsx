import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- ICONS (SVG) ---
// Menggunakan SVG langsung agar tidak perlu install library ikon
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const BuildingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

// Icon untuk tombol "Show More"
const ChevronDownIcon = ({ isOpen }) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 ml-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </motion.svg>
);


// --- 1. DATA DIPERBARUI UNTUK UI BARU ---
// Menambahkan properti 'description'
const journeyData = [
  {
    title: "Information Systems Case Study Club Member (ISCSC)",
    company: "Bina Nusantara University",
    // Tambahkan deskripsi di sini
    description: "Weekly training for competitions, developing skills in problem-solving, business analysis, design thinking, and data-driven decision-making.",
    dateRange: "January 2025 - Present",
    location: "Banten, Indonesia",
    category: "Experience",
    images: [
      "/assets/experiences/iscsc1.JPG",
      "/assets/experiences/iscsc2.jpg",
      "/assets/experiences/iscsc3.jpg"
    ],
  },
  {
    title: "Information Systems Project Member (ISPM)",
    company: "Bina Nusantara University",
    // Tambahkan deskripsi di sini
    description: "Weekly training in web programming to strengthen frontend and backend development skills, while also conducting research and writing related papers.",
    dateRange: "January 2025 - Present",
    location: "Banten, Indonesia",
    category: "Experience",
    images: [
      "/assets/experiences/ispm1.png",
      "/assets/experiences/ispm2.png",
    ],
  },
  {
    title: "Software Laboratory Center Part-Time Lab Assistant",
    company: "Bina Nusantara University",
    // Tambahkan deskripsi di sini
    description: "Handles five classes weekly, with responsibilities including corrections, case creation, exam proctoring, and providing hands-on guidance in programming labs.",
    dateRange: "September 2024 - Present",
    location: "Banten, Indonesia",
    category: "Experience",
    images: [
      "/assets/experiences/aslab1.png",
      "/assets/experiences/aslab2.png"
    ],
  },
  {
    title: "Scholarship Mentor",
    company: "Bina Nusantara University",
    // Tambahkan deskripsi di sini
    description: "Conducted weekly mentoring for 5 students, supporting coursework, projects, and academic development. Earned a 16-credit scholarship for mentoring excellence in courses including Business Application Development, Database, Digital Innovation, and UX Design.",
    dateRange: "January 2025 - Present",
    location: "Banten, Indonesia",
    category: "Experience",
    images: [
    ],
  },
  {
    title: "Freshmen Leader @FYPB2029",
    company: "Bina Nusantara University",
    // Tambahkan deskripsi di sini
    description: "Mentored 5 freshmen directly and facilitated sessions for 60 students, fostering adaptability, teamwork, and smooth adjustment to university life. Collaborated with fellow leaders to deliver orientation activities, support access to resources, and create a welcoming first-year experience.",
    dateRange: "August 2025 - September 2025",
    location: "Banten, Indonesia",
    category: "Experience",
    images: [
      "/assets/experiences/fl1.png",
      "/assets/experiences/fl2.png",
    ],
  },
  {
    title: "Scholarship Tutor",
    company: "Bina Nusantara University",
    // Tambahkan deskripsi di sini
    description: "Led weekly Python tutoring for first-semester Information Systems students, emphasizing programming fundamentals and problem-solving. Supported learning through coding guidance and earned a 16-credit scholarship for academic contributions.",
    dateRange: "September 2024 - January 2025",
    location: "Banten, Indonesia",
    category: "Experience",
    images: [
    ],
  },
  {
    title: "Bachelor of Information Systems",
    company: "Bina Nusantara University",
    // Tambahkan deskripsi di sini
    description: "Bachelor of Information Systems at Bina Nusantara University with a specialization in Database. Focused on database design and management, with broader knowledge in systems analysis, IT infrastructure, and data-driven decision-making.",
    dateRange: "2023 - 2027",
    location: "Banten, Indonesia",
    category: "Education",
    images: [
    ],
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    company: "Microsoft",
    // Kosongkan deskripsi untuk sertifikasi jika tidak diperlukan
    description: "", 
    dateRange: "Issued March 2025",
    location: "Indonesia",
    category: "Certification",
    images: [
      "/assets/certifications/azureai2.png",
      "/assets/certifications/azureai1.png"
    ], 
  },
  {
    title: "Database Design and Oracle Database",
    company: "Oracle",
    // Kosongkan deskripsi untuk sertifikasi jika tidak diperlukan
    description: "", 
    dateRange: "Issued September 2025",
    location: "Indonesia",
    category: "Certification",
    images: [
      "/assets/certifications/oracle1.png"
    ], 
  },
];

// --- 2. KOMPONEN BARU UNTUK SETIAP ITEM DI TIMELINE ---
const JourneyItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative pl-16">
      {/* Lingkaran di timeline */}
      <div className="absolute left-[26px] top-1 h-3 w-3 rounded-full bg-pink-400 border-4 border-pink-300"></div>
      
      {/* Card Konten */}
      <div className="mb-8 rounded-lg border border-gray-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-5 mt-1">
                <BuildingIcon />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-md text-gray-600">{item.company}</p>
              
              {/* BARIS KODE BARU UNTUK DESKRIPSI (TAMPILKAN HANYA JIKA ADA) */}
              {item.description && (
                <p className="mt-1 text-sm text-gray-500 max-w-xl">{item.description}</p>
              )}
              {/* AKHIR BARIS KODE BARU */}

              <div className="mt-2 flex flex-wrap items-center text-sm text-gray-500">
                <span className="flex items-center mr-4 mb-1"><CalendarIcon /> {item.dateRange}</span>
                <span className="flex items-center mr-4 mb-1"><LocationIcon /> {item.location}</span>
                <span className="inline-block rounded-md bg-pink-200 px-2 py-1 text-xs font-medium text-pink-700 border border-pink-500">{item.category}</span>
              </div>
            </div>
          </div>
          {/* Tombol Dropdown hanya muncul jika ada gambar */}
          {item.images && item.images.length > 0 && (
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-300">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
          )}
        </div>

        {/* Galeri Gambar (muncul saat dropdown diklik) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: '20px' }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {item.images.map((img, index) => (
                  <img key={index} src={img} alt={`${item.title} gallery ${index + 1}`} className="rounded-md w-full h-auto object-cover" />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- 3. KOMPONEN UTAMA ---
function PortfolioPage() {
  const filters = ["Experience", "Education", "Certification"];
  const [activeFilter, setActiveFilter] = useState("Experience");
  // State untuk mengontrol tampilan item tersembunyi
  const [showAll, setShowAll] = useState(false); 
  
  // Batas item yang akan ditampilkan secara default
  const ITEM_LIMIT = 3; 

  const filteredData = journeyData.filter(
    (item) => item.category === activeFilter
  );

  // Membagi data menjadi yang terlihat dan tersembunyi
  const visibleData = filteredData.slice(0, ITEM_LIMIT);
  const hiddenData = filteredData.slice(ITEM_LIMIT);
  
  // Data yang akan dirender (tampilkan semua jika showAll=true, jika tidak, hanya visibleData)
  const dataToRender = showAll ? filteredData : visibleData;
  
  // Menentukan teks tombol
  const buttonText = showAll 
    ? `Show Less (${filteredData.length} items)` 
    : `Show All Experiences (${hiddenData.length} more)`;

  return (
    <div className="portfolio-container">
      <style>{`
        // @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>
      
      <div className="max-w-3xl mx-auto pt-20 px-4">
        {/* Header */}
        <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2 text-center relative">
            Experiences and Education
            <span className="absolute top-[-10px] right-[-30px] text-pink-500 text-3xl"></span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#ffd1dc] to-pink-400 rounded-full"></div>
            {/* <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">My professional journey and the roles that have shaped my career.</p> */}
        </div>

        {/* Tombol Filter */}
        <div className="flex justify-center mb-12">
            <div className="flex space-x-2 rounded-3xl bg-gray-200 p-1.5">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => {
                            setActiveFilter(filter);
                            setShowAll(false); // Reset dropdown saat filter ganti
                        }}
                        className={`px-4 py-1.5 rounded-2xl text-sm font-medium transition-colors
                        ${activeFilter === filter
                            ? "bg-pink-400 text-white shadow-sm"
                            : "text-gray-700 hover:text-gray-700"
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
            {/* Garis Vertikal Timeline */}
            <div className="absolute left-7 top-1 bottom-0 w-0.5 bg-gray-200"></div>
            
            {dataToRender.length > 0 ? (
                // Menggunakan AnimatePresence dan motion.div agar item yang baru muncul memiliki animasi
                <AnimatePresence initial={false}>
                    {dataToRender.map((item, index) => (
                        <motion.div
                            key={item.title} // Penting menggunakan key yang unik dan stabil
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: (index >= ITEM_LIMIT && !showAll) ? 0 : 0.05 * (index - ITEM_LIMIT) }}
                        >
                            <JourneyItem item={item} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            ) : (
                <p className="text-center text-gray-500">No items in this category.</p>
            )}
        </div>
        
        {/* --- TOMBOL SHOW MORE/LESS BARU --- */}
        {hiddenData.length > 0 && (
            <div className="flex justify-center mt-6">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="flex items-center justify-center px-6 py-2 border border-pink-400 rounded-full text-pink-600 font-medium hover:bg-pink-50 transition-colors"
                >
                    {buttonText}
                    <ChevronDownIcon isOpen={showAll} />
                </button>
            </div>
        )}
      </div>
    </div>
  );
}

export default PortfolioPage;