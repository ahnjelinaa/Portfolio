// src/components/ScrollToTop.jsx (atau sesuaikan path Anda)
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll ke (0, 0) setiap kali 'pathname' (URL) berubah
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Komponen ini tidak me-render apapun
}