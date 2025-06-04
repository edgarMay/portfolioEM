// src/components/Navbar.tsx
import { useState, useEffect } from 'react'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import { AiOutlineHome } from 'react-icons/ai'

const links = [
  { label: 'HOME',       href: '#home' },
  { label: 'ABOUT ME',   href: '#about' },
  { label: 'PROJECTS',   href: '#portfolio' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CONTACT',    href: '#contact' },
  { label: 'RESUME',     href: '/resume.pdf' }
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled,  setScrolled]  = useState(false)

  // 1) Detectar scroll para cambiar fondo
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 180)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 2) Bloquear scroll cuando el menú móvil esté abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
  }, [menuOpen])

  // 3) Clases dinámicas para el <nav>
  const navClasses = [
    'fixed top-0 left-0 w-full z-50 transition-colors duration-300',
    scrolled ? 'bg-gray-900 text-white shadow-md' : 'bg-transparent text-white'
  ].join(' ')

  return (
    <nav className={navClasses}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Branding */}
        <span className="text-xl font-bold">Edgar Mayol</span>

        {/* Botón hamburguesa para móvil */}
        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <HiOutlineMenu />
        </button>

        {/* ── Menú Desktop (solo en pantallas ≥ md) ── */}
        <ul className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <li key={l.label}>
              {/*
                Detectamos si es RESUME para pintarlo como botón:
                - aplicamos atributo download
                - le damos clases de botón amarillo
              */}
              {l.label === 'RESUME' ? (
                <a
                  href={l.href}
                  download
                  className="
                    ml-4 inline-block px-4 py-2
                    bg-yellow-500 text-white font-semibold
                    rounded-full hover:bg-yellow-400 transition
                  "
                >
                  {l.label}
                </a>
              ) : (
                <a
                  href={l.href}
                  className="hover:text-indigo-400 transition flex items-center"
                >
                  {l.href === '#home'
                    ? // Para HOME mostramos ícono o texto según scroll:
                      scrolled
                        ? <AiOutlineHome className="text-2xl" />
                        : <span className="text-sm font-medium">{l.label}</span>
                    : l.label
                  }
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/*
        ──────────────────────────────────────────────────
        MENÚ MÓVIL SLIDE-OUT:
        - Solo aparece si menuOpen === true
        - Oculto en pantallas ≥ md, gracias a md:hidden
      */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Fondo semitransparente */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMenuOpen(false)}
          />

          {/* Panel derecho con los enlaces + botón cerrar */}
          <div className="absolute right-0 top-0 h-full w-64 bg-slate-900 p-6 shadow-lg">
            <button
              className="text-3xl mb-8 text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <HiX />
            </button>

            <ul className="space-y-6">
              {links.map((l) => (
                <li key={l.label}>
                  {l.label === 'RESUME' ? (
                    <a
                      href={l.href}
                      download
                      onClick={() => setMenuOpen(false)}
                      className="
                        block w-full text-center
                        px-4 py-2 bg-yellow-500 text-white font-semibold
                        rounded-full hover:bg-yellow-400 transition
                      "
                    >
                      {l.label}
                    </a>
                  ) : (
                    <a
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-lg text-white hover:text-indigo-400 transition"
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}
