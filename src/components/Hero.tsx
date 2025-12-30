'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-zisa-blue to-blue-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-zisa-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-zisa-green rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo Grande */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo-full.png"
              alt="Gruppo Zisa Logo Completo"
              width={300}
              height={200}
              className="w-auto h-auto"
              priority
            />
          </div>

          {/* Slogan Principale */}
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-8">
            Natura Blu, Energia Verde
          </h1>
          <p className="text-xl md:text-2xl font-opensans mb-12 text-zisa-yellow">
            – Gruppo Zisa –
          </p>

          {/* Video YouTube */}
          <div className="max-w-4xl mx-auto mb-12 rounded-lg overflow-hidden shadow-2xl">
            <div className="relative pb-[56.25%] h-0 overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/8nPDsQF9M7I?autoplay=1&mute=1&loop=1&playlist=8nPDsQF9M7I&controls=0&modestbranding=1"
                title="Video Gruppo Zisa"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Bottone CTA */}
          <motion.button
            onClick={() => {
              const mapSection = document.getElementById('map')
              mapSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-zisa-yellow text-zisa-blue px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Scopri i Nostri Terreni
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

