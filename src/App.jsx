// src/App.jsx

import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; 
import Portfolio from "./pages/home";
import Projects from "./pages/projects";
import Certificates from "./pages/certificates"; // ✅ tambahin ini
import Lenis from "@studio-freight/lenis"; 

function App() {
  const location = useLocation(); 

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const lenisInstance = Lenis.instance;
      if (lenisInstance) {
        lenisInstance.scrollTo(0, { immediate: true, force: true });
      } else {
        window.scrollTo(0, 0);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certificates" element={<Certificates />} /> {/* ✅ ini tambahan penting */}
    </Routes>
  );
}

export default App;
