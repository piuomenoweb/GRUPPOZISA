'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zisa-blue shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2"
            aria-label="Torna all'inizio"
          >
            <Image
              src="/logo-z.png"
              alt="Gruppo Zisa Logo"
              width={40}
              height={40}
              className="hover:opacity-80 transition-opacity"
            />
            <span className="text-white font-montserrat font-bold text-xl hidden sm:block">
              Gruppo Zisa
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-zisa-yellow transition-colors font-opensans"
            >
              Chi Siamo
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-white hover:text-zisa-yellow transition-colors font-opensans"
            >
              Prodotti
            </button>
            <button
              onClick={() => scrollToSection('map')}
              className="text-white hover:text-zisa-yellow transition-colors font-opensans"
            >
              Terreni
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-zisa-yellow text-zisa-blue px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Contatti
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
            aria-label="Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block text-white hover:text-zisa-yellow transition-colors w-full text-left"
            >
              Chi Siamo
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block text-white hover:text-zisa-yellow transition-colors w-full text-left"
            >
              Prodotti
            </button>
            <button
              onClick={() => scrollToSection('map')}
              className="block text-white hover:text-zisa-yellow transition-colors w-full text-left"
            >
              Terreni
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block bg-zisa-yellow text-zisa-blue px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors w-full text-center"
            >
              Contatti
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

