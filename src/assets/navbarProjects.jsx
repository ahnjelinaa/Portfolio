import React, { useState } from "react";

const NavbarTabs = ({ setActiveCategory }) => {
  const [activeTab, setActiveTab] = useState("All"); 

  // DAFTAR KATEGORI HARUS SAMA PERSIS DENGAN YANG ADA DI DATA
  const categories = ["All", "Deck", "Analyst", "Data", "Others"];

  const handleClick = (tab) => {
    setActiveTab(tab);
    setActiveCategory(tab); 
  };
  
  return (
    <div className="w-full flex justify-center my-8">
      <div className="flex bg-pink-50 border border-pink-200 rounded-full px-2 py-1 shadow-sm">
        {["Deck", "Analyst", "Data", "Others"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleClick(tab)}
            className={`px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ${
              activeTab === tab
                ? "bg-pink-400 text-white shadow-md"
                : "text-pink-600 hover:bg-pink-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavbarTabs;
