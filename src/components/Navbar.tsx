import { useState, useEffect } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

const links = [
  { label: 'WORK',       href: '#work' },
  { label: 'ABOUT ME',   href: '#about' },
  { label: 'PROJECTS',   href: '#projects' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CONTACT',    href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled,  setScrolled] = useState(false);

  /* ——— Detectar scroll ——— */
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  /* ——— Bloquear scroll del body cuando el menú móvil esté abierto ——— */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  /* ——— Clases dinámicas ——— */
  const navClasses =
    `fixed top-0 left-0 w-full z-50 transition-colors duration-300
     ${scrolled ? 'bg-gray-900 text-white shadow-md' : 'bg-transparent text-white'}`;

  return (
    <nav className={navClasses}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Branding */}
        <span className="text-xl font-bold">Edgar Mayol</span>

        {/* Hamburguesa */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <HiOutlineMenu />
        </button>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-6 items-center">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-indigo-400 transition">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Slide-over móvil */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* fondo oscuro */}
          <div className="absolute inset-0 bg-black/60" onClick={() => setMenuOpen(false)} />
          {/* panel */}
          <div className="absolute right-0 top-0 h-full w-64 bg-slate-900 p-6 shadow-lg">
            <button
              className="text-3xl mb-8"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <HiX />
            </button>

            <ul className="space-y-6">
              {links.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-lg hover:text-indigo-400 transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
