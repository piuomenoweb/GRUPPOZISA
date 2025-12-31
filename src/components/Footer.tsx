'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from './Logo'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-zisa-black via-gray-900 to-zisa-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo e Slogan */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Logo variant="full" className="w-auto h-12 mb-4" />
            </div>
            <p className="text-gray-400 italic text-lg font-opensans">
              Natura Blu, Energia Verde
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Azienda familiare innovativa nella provincia di Ragusa
            </p>
          </div>

          {/* Link Utili */}
          <div>
            <h4 className="font-montserrat font-bold mb-6 text-xl">Link Utili</h4>
            <ul className="space-y-3">
              {[
                { id: 'about', label: 'Chi Siamo' },
                { id: 'products', label: 'Prodotti' },
                { id: 'stats', label: 'Numeri' },
                { id: 'values', label: 'Valori' },
                { id: 'certifications', label: 'Certificazioni' },
                { id: 'gallery', label: 'Galleria' },
                { id: 'map', label: 'Terreni' },
                { id: 'contact', label: 'Contatti' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-zisa-yellow transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti Footer */}
          <div>
            <h4 className="font-montserrat font-bold mb-6 text-xl">Contatti</h4>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: 'Santa Croce Camerina, Ragusa' },
                { icon: Phone, text: '0932 825131', href: 'tel:+390932825131' },
                { icon: Mail, text: 'info@gruppozisa.it', href: 'mailto:info@gruppozisa.it' },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <li key={index} className="flex items-start gap-3">
                    <Icon className="h-5 w-5 text-zisa-yellow mt-0.5 flex-shrink-0" />
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-zisa-yellow transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-400">{item.text}</span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-montserrat font-bold mb-6 text-xl">Seguici</h4>
            <div className="flex flex-col gap-4">
              <Button
                variant="ghost"
                className="justify-start border border-white/20 hover:bg-white/10"
                asChild
              >
                <a href="https://wa.me/393XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="border border-white/20 hover:bg-white/10"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="border border-white/20 hover:bg-white/10"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Gruppo Zisa. Tutti i diritti riservati.
            </p>
            <p className="text-sm text-gray-500 text-center md:text-right">
              Mirtilli e lamponi bio residuo zero | Pannelli solari | Ragusa, Sicilia
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-zisa-blue text-white shadow-lg hover:bg-zisa-blue-dark transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  )
}
