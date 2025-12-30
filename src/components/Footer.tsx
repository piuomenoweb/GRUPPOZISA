'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
    <footer className="relative bg-gradient-to-br from-zisa-black via-gray-900 to-zisa-black text-white py-16 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-zisa-blue rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zisa-green rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo e Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mb-6"
            >
              <Image
                src="/logo-full.png"
                alt="Gruppo Zisa"
                width={200}
                height={100}
                className="mb-4 drop-shadow-2xl"
              />
            </motion.div>
            <p className="text-gray-400 italic text-lg font-opensans">
              Natura Blu, Energia Verde
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Azienda familiare innovativa nella provincia di Ragusa
            </p>
          </motion.div>

          {/* Link Utili */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="font-montserrat font-bold mb-6 text-xl">Link Utili</h4>
            <ul className="space-y-3">
              {[
                { id: 'about', label: 'Chi Siamo' },
                { id: 'products', label: 'Prodotti' },
                { id: 'map', label: 'Terreni' },
                { id: 'contact', label: 'Contatti' },
              ].map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-zisa-yellow transition-colors text-left group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-zisa-yellow transition-all" />
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contatti Footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-montserrat font-bold mb-6 text-xl">Contatti</h4>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: 'Santa Croce Camerina, Ragusa' },
                { icon: Phone, text: '0932 825131', href: 'tel:+390932825131' },
                { icon: Mail, text: 'info@gruppozisa.it', href: 'mailto:info@gruppozisa.it' },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <Icon className="h-5 w-5 text-zisa-yellow mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
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
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="font-montserrat font-bold mb-6 text-xl">Seguici</h4>
            <div className="flex flex-col gap-4">
              <Button
                variant="ghost"
                size="lg"
                className="justify-start rounded-full border border-white/20 hover:bg-white/10 hover:border-zisa-yellow transition-all"
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
                  className="rounded-full border border-white/20 hover:bg-white/10 hover:border-zisa-yellow transition-all"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-white/20 hover:bg-white/10 hover:border-zisa-yellow transition-all"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-center md:text-left"
            >
              © {new Date().getFullYear()} Gruppo Zisa. Tutti i diritti riservati.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm text-gray-500 text-center md:text-right"
            >
              Mirtilli e lamponi bio residuo zero | Pannelli solari | Ragusa, Sicilia
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-zisa-blue text-white shadow-2xl hover:bg-blue-700 transition-colors border-2 border-zisa-yellow/50"
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="h-6 w-6" />
      </motion.button>
    </footer>
  )
}
