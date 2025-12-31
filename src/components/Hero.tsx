'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from './Logo'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 pt-24"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-zisa-blue rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-zisa-green rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="transition-transform hover:scale-105">
              <Logo variant="full" className="w-auto h-16 md:h-20" />
            </div>
          </motion.div>

          {/* Slogan */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-extrabold mb-6 leading-tight"
          >
            <span className="text-zisa-blue-dark">Natura Blu,</span>
            <span className="block text-zisa-green mt-2">Energia Verde</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl font-opensans mb-12 text-zisa-gray"
          >
            – Gruppo Zisa –
          </motion.p>

          {/* Video Container - Fixed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/8nPDsQF9M7I?autoplay=1&mute=1&loop=1&playlist=8nPDsQF9M7I&controls=1&modestbranding=1&rel=0"
                title="Video Gruppo Zisa"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => {
                const mapSection = document.getElementById('map')
                mapSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-zisa-blue hover:bg-zisa-blue-dark text-white px-8 py-6 text-lg font-bold rounded-lg shadow-lg"
            >
              <span>Scopri i Nostri Terreni</span>
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const aboutSection = document.getElementById('about')
                aboutSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="border-2 border-zisa-green text-zisa-green hover:bg-zisa-green hover:text-white px-8 py-6 text-lg font-semibold rounded-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              <span>La Nostra Storia</span>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => {
            const aboutSection = document.getElementById('about')
            aboutSection?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-zisa-gray group-hover:text-zisa-blue transition-colors">
            Scorri
          </span>
          <div className="w-6 h-10 border-2 border-zisa-blue rounded-full flex justify-center p-1.5">
            <motion.div
              className="w-1.5 h-3 bg-zisa-blue rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
