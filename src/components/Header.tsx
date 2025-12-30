'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1])
  const headerBlur = useTransform(scrollY, [0, 100], [0, 20])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.header
      style={{
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`,
      }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        "bg-zisa-blue/80 backdrop-blur-xl border-b border-white/10"
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 group"
            aria-label="Torna all'inizio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              whileHover={{ rotateY: 360 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Image
                src="/logo-z.png"
                alt="Gruppo Zisa Logo"
                width={48}
                height={48}
                className="rounded-full border-2 border-zisa-yellow/50 group-hover:border-zisa-yellow transition-all"
              />
            </motion.div>
            <span className="text-white font-montserrat font-bold text-xl hidden sm:block group-hover:text-zisa-yellow transition-colors">
              Gruppo Zisa
            </span>
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {['about', 'products', 'map', 'contact'].map((section, index) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection(section)}
                  className="text-white hover:text-zisa-yellow hover:bg-white/10 rounded-full px-6"
                >
                  {section === 'about' && 'Chi Siamo'}
                  {section === 'products' && 'Prodotti'}
                  {section === 'map' && 'Terreni'}
                  {section === 'contact' && 'Contatti'}
                </Button>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                variant="zisaYellow"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="ml-4 rounded-full"
              >
                Contatti
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {['about', 'products', 'map', 'contact'].map((section) => (
              <Button
                key={section}
                variant="ghost"
                onClick={() => scrollToSection(section)}
                className="w-full text-left text-white hover:text-zisa-yellow hover:bg-white/10 justify-start"
              >
                {section === 'about' && 'Chi Siamo'}
                {section === 'products' && 'Prodotti'}
                {section === 'map' && 'Terreni'}
                {section === 'contact' && 'Contatti'}
              </Button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}
