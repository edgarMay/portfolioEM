// src/sections/Hero.tsx
import { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import WordCloud from '../components/WordCloud';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const height = heroRef.current.offsetHeight;
      setShrink(window.scrollY > height / 2);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    /* — Este section será SOLO el fondo que cambia según el modo — */
    <section id='home' className="bg-white dark:bg-slate-900">
      {/*
        — Aquí vamos a colocar un <div> que SÍ lleva background-image,
          rounded-3xl/overflow-hidden cuando “shrink” sea true,
          y al mismo tiempo recibe el ref para medir su altura.
      */}
      <div
        ref={heroRef}
        className={`
          relative 
          bg-cover bg-center   /* para la imagen de fondo */
          px-4 py-80           /* padding vertical que define la “altura” inicial */
          transition-all duration-500
          ${shrink
            ? 'mx-8 rounded-3xl overflow-hidden'
            : 'w-full'
          }
        `}
        style={{ backgroundImage: "url('/logos/bttrbckgrnd2.png')" }}
      >
        {/* — Contenido (texto, botones) dentro de ese div con fondo-imagen — */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            I&apos;m Edgar,<br />
            <span className="text-yellow-500">Software Engineer</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium mt-4 flex justify-center items-center gap-2">
            <span>I build</span>
            <span className="text-yellow-300">
              <Typewriter
                options={{ loop: true }}
                onInit={(tw) =>
                  tw
                    .typeString('projects').pauseFor(1500).deleteAll()
                    .typeString('solutions').pauseFor(1500).deleteAll()
                    .typeString('APIs').pauseFor(1500).deleteAll()
                    .typeString('software').pauseFor(1500).deleteAll()
                    .typeString('mobile apps').pauseFor(1500)
                    .start()
                }
              />
            </span>
          </h2>

          <a
            href="#contact"
            className="mt-4 inline-block px-6 py-2 bg-yellow-500 
                       text-white font-semibold rounded-full hover:bg-yellow-400 transition"
          >
            Let's work together!
          </a>
        </div>
      </div>

      {/* — Dicho WordCloud “flotante” va fuera del div que maneja background-image — */}
      <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30">
        <WordCloud />
      </div>
      <div className="hidden md:block absolute bottom-10 left-1/2 w-[800px] h-[400px] opacity-40">
        <WordCloud />
      </div>
    </section>
  );
}
