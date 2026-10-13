import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initApp() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Lenis Smooth Scroll (solo escritorio y sin movimiento reducido)
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (!prefersReducedMotion && !isTouchDevice) {
    try {
      const lenis = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1
      });

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    } catch (e) {
      console.warn('Lenis disabled:', e);
    }
  }

  // 2. Animaciones GSAP progresivas y seguras
  if (!prefersReducedMotion) {
    // Parallax suave en el marco de la foto
    const parallaxEl = document.querySelector('[data-parallax]');
    if (parallaxEl) {
      gsap.to(parallaxEl, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: '#quienes-somos',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }

    // Tarjetas de especialidades
    const specCards = document.querySelectorAll('#especialidades .grid > div');
    if (specCards.length > 0) {
      gsap.fromTo(
        specCards,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#especialidades',
            start: 'top 85%',
            once: true
          }
        }
      );
    }

    // Sección El Espacio
    const espacioSec = document.querySelector('#espacio');
    if (espacioSec) {
      gsap.fromTo(
        espacioSec,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#espacio',
            start: 'top 90%',
            once: true
          }
        }
      );
    }

    // Refrescar ScrollTrigger tras cargar recursos para evitar posiciones desfasadas
    ScrollTrigger.refresh();
    window.addEventListener('load', () => ScrollTrigger.refresh());
    setTimeout(() => ScrollTrigger.refresh(), 500);
  }

  // 3. Medición y analítica desacoplada
  document.addEventListener('click', (event) => {
    const target = (event.target as HTMLElement)?.closest('[data-track]');
    if (!target) return;

    const eventName = target.getAttribute('data-track');
    const location = target.getAttribute('data-location') || 'general';

    const trackingEvent = new CustomEvent('laguleria_analytics', {
      detail: {
        event: eventName,
        location: location,
        timestamp: new Date().toISOString()
      }
    });
    window.dispatchEvent(trackingEvent);

    if (typeof (window as any).dataLayer !== 'undefined') {
      (window as any).dataLayer.push({
        event: eventName,
        button_location: location
      });
    }
  });
}
