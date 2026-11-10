'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosInit() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    AOS.init({
      duration: reduced ? 0 : 800,
      once: false,
      offset: 100,
      easing: 'ease-out-cubic',
      disable: reduced,
    });
  }, []);

  return null;
}
