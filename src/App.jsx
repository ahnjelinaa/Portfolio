import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/home';
import Lenis from '@studio-freight/lenis';

function App() {
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

  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
