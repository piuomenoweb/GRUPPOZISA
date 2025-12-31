'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Logo from './Logo'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
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

  const menuItems = [
    { id: 'about', label: 'Chi Siamo' },
    { id: 'products', label: 'Prodotti' },
    { id: 'stats', label: 'Numeri' },
    { id: 'values', label: 'Valori' },
    { id: 'certifications', label: 'Certificazioni' },
    { id: 'gallery', label: 'Galleria' },
    { id: 'map', label: 'Terreni' },
    { id: 'contact', label: 'Contatti' },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" 
          : "bg-white/90 backdrop-blur-sm"
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 group"
            aria-label="Torna all'inizio"
          >
            <div className="transition-transform group-hover:scale-105">
              <Logo variant="icon" />
            </div>
            <span className={cn(
              "font-montserrat font-bold text-xl hidden sm:block transition-colors",
              isScrolled ? "text-zisa-blue-dark" : "text-zisa-blue-dark"
            )}>
              Gruppo Zisa
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-gray-700 hover:text-zisa-blue hover:bg-blue-50 rounded-lg px-4"
                )}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="default"
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-zisa-blue hover:bg-zisa-blue-dark text-white rounded-lg"
            >
              Contatti
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700"
            aria-label="Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-gray-200 mt-4">
                {menuItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left justify-start text-gray-700 hover:text-zisa-blue hover:bg-blue-50"
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="default"
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-zisa-blue hover:bg-zisa-blue-dark text-white mt-2"
                >
                  Contatti
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
