import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CertificatesContainerScroll } from "../assets/containerScrollCertificates";

const Certificates = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsContentVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen w-full transition-opacity duration-300 ${
        isContentVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative pt-10 px-6 md:px-12">
        <Link
          to="/"
          className="px-4 sm:px-6 py-2 border border-pink-400 rounded-full text-sm sm:text-base text-pink-600 font-medium hover:bg-pink-50 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      <CertificatesContainerScroll />
    </div>
  );
};

export default Certificates;
